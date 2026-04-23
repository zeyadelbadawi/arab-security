import { google } from "googleapis"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  // Get credentials from environment variables
  const GOOGLE_CREDENTIALS = process.env.GOOGLE_CREDENTIALS
  const SPREADSHEET_ID = "1tR4YP3XDmcM6UKvkZXgML_Ef7Ip79kkTJ306z703x1g"
  const SHEET_NAME = "Contact Form" // Target sheet for contact form submissions

  console.log("[v0] === API REQUEST STARTED ===")
  console.log("[v0] GOOGLE_CREDENTIALS:", GOOGLE_CREDENTIALS ? "✓ Set" : "✗ Missing")
  console.log("[v0] SPREADSHEET_ID:", SPREADSHEET_ID ? "✓ Set" : "✗ Missing")

  // Parse credentials from environment
  let credentials
  try {
    if (!GOOGLE_CREDENTIALS) {
      throw new Error("GOOGLE_CREDENTIALS environment variable not set")
    }
    credentials = JSON.parse(GOOGLE_CREDENTIALS)
    console.log("[v0] Credentials parsed successfully")
  } catch (e) {
    console.error("[v0] Error parsing credentials:", e.message)
    return res.status(500).json({ error: "Invalid credentials configuration" })
  }

  try {
    console.log("[v0] Parsing form data...")
    const { name, phone, email, company, service, solution, message } = req.body
    console.log("[v0] Form data received:", { name, email, service })

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" })
    }

    // Set up Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    const spreadsheetId = SPREADSHEET_ID
    const rangeName = SHEET_NAME
    const headerRange = `${rangeName}!A1:H1`

    // Check if the target sheet exists, if not create it
    try {
      const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId })
      const sheetExists = spreadsheet.data.sheets.some((s) => s.properties.title === rangeName)

      if (!sheetExists) {
        console.log(`[v0] Creating sheet: ${rangeName}`)
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [{ addSheet: { properties: { title: rangeName } } }],
          },
        })
      }
    } catch (e) {
      console.error(`[v0] Error checking/creating ${rangeName}:`, e)
    }

    // Get existing headers
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: headerRange,
    })

    const existingData = response.data.values || []

    // Create headers if they don't exist
    if (existingData.length === 0) {
      const headers = ["Timestamp", "Name", "Email", "Phone", "Company", "Service", "Solution", "Message"]

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: headerRange,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [headers],
        },
      })

      // Get sheetId for formatting
      const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId })
      const sheetId =
        spreadsheet.data.sheets.find((s) => s.properties.title === rangeName)?.properties.sheetId || 0

      // Format header row (bold and freeze)
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              repeatCell: {
                range: {
                  sheetId: sheetId,
                  startRowIndex: 0,
                  endRowIndex: 1,
                  startColumnIndex: 0,
                  endColumnIndex: headers.length,
                },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: { red: 0.9, green: 0.9, blue: 0.9 },
                    textFormat: { bold: true },
                    horizontalAlignment: "CENTER",
                  },
                },
                fields: "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)",
              },
            },
            {
              updateSheetProperties: {
                properties: {
                  sheetId: sheetId,
                  gridProperties: { frozenRowCount: 1 },
                },
                fields: "gridProperties.frozenRowCount",
              },
            },
          ],
        },
      })
    }

    // Prepare the data to append
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Cairo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    const values = [[timestamp, name, email, phone || "", company || "", service || "", solution || "", message]]

    // Append data to the sheet
    console.log("[v0] Appending data to sheet...")
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${rangeName}!A:H`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    // Get sheetId again for formatting wrapping
    const spreadsheetForFormat = await sheets.spreadsheets.get({ spreadsheetId })
    const sheetIdForFormat =
      spreadsheetForFormat.data.sheets.find((s) => s.properties.title === rangeName)?.properties.sheetId || 0

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: sheetIdForFormat,
                startColumnIndex: 0,
                endColumnIndex: values[0].length,
              },
              cell: {
                userEnteredFormat: {
                  wrapStrategy: "WRAP",
                },
              },
              fields: "userEnteredFormat.wrapStrategy",
            },
          },
          {
            autoResizeDimensions: {
              dimensions: {
                sheetId: sheetIdForFormat,
                dimension: "COLUMNS",
                startIndex: 0,
                endIndex: values[0].length,
              },
            },
          },
        ],
      },
    })

    console.log("[v0] Form submitted successfully!")
    return res.status(200).json({ message: "Form submitted successfully!" })
  } catch (error) {
    console.log("[v0] === CATCH ERROR TRIGGERED ===")
    console.error("[v0] Full Error Object:", error)
    console.error("[v0] Error Message:", error?.message)
    console.error("[v0] Error Stack:", error?.stack)
    return res
      .status(500)
      .json({ error: "Failed to submit form. Please check server logs." })
  }
}
