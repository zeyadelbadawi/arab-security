import { google } from "googleapis"

export default async function handler(req, res) {

  if (req.method !== "POST") {

    return res.status(405).json({ error: "Method not allowed" })

  }

  // Credentials

  const CLIENT_EMAIL = "website-form-submissions@asg-distry.iam.gserviceaccount.com"

    const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+sKzRwGBc6EkG
KQNF1dHHJSJqYGMGFmvNbk5pXJFYJkYWyLF4S4D1tPg8VD3K4GqY7a9xJB5H3JxE
y6C4JsxT3V7gW5Q8nK0J8oN7KJqFqJz1vQ8dQ3G9YqZ4sN8pQ9rK0L9kO8mN9pR5
sO9qR0rK1mP9lP8nM9oQ6rL2mQcNnS9oRcoLvTsN/f7U7T3x+gZ8W0WF/fZU7T1z
+gZ8W0Wp++gR9YNqGqG7A5S9U8u2q3X2vHwRB8hU8XwEhK3O4R9rN3N2oL3sG3fX
Y7Z2L9zX3z0z2ZqZz1PW9xBU7VxH3dPt1VBhU0EbKKqJz5K0rN2pUnJmVhN7kPKY
a5j8aUNDAoGBAO9Ew5U8zZ0xJj5L6pYTcVBe8FvQT2nVnZsXuKc7s5j4Y0eQwL1e
KqKXrM5eT9e+w3L8O1xL0v7FzM1G9VzR7qM2UaS7KuC6xQhA8J0L8L8Y0m/s1p1T
xwL1Q3G8gK3bQ5vX1CQjDZ4R3FVmGd8Q5I8nD1E0rKIE9pJ4aJ1f0KZLAkEA0kDW
8pzJ3x8pI4K5cVJ9pYzC0G7X1vwNkjI1oJ5nK5qN7vV2aU+q/dO+Z5d6W6L1pWD2
lK0oTjVU7eV9uN8zT3G1G6k9P6B3sZ5qQ7e0+x3UkxsXxbCVPQJBAOtL+JzwBjxx
Kq7vC0M+cX5+sK3H8r+J5Q4Y3JhZ2qO6x9Q3P5uL9U4T3E0R+OzT5qKuEsx9d0Uo
98tYJ60CQQCz6LPLfj8xVJvU8oI8vT5Q7b8O1m9rK3R1U4aD9p+H7N0tDQxnCKFq
EQw9+VzqKpGQ0QW2T+DZGd9Dn+uT
-----END PRIVATE KEY-----`
  
  const SPREADSHEET_ID = "1tR4YP3XDmcM6UKvkZXgML_Ef7Ip79kkTJ306z703x1g"

  const SHEET_NAME = "Contact Form"

  console.log("[v0] === API REQUEST STARTED ===")

  try {

    const { name, phone, email, company, service, solution, message } = req.body

    if (!name || !email || !message) {

      return res.status(400).json({ error: "Name, email, and message are required" })

    }

    // ✅ FIXED AUTH (بدون replace)

    const auth = new google.auth.GoogleAuth({

      credentials: {

        client_email: CLIENT_EMAIL,

        private_key: PRIVATE_KEY,

      },

      scopes: ["https://www.googleapis.com/auth/spreadsheets"],

    })

    const sheets = google.sheets({ version: "v4", auth })

    const headerRange = `${SHEET_NAME}!A1:H1`

    // Ensure sheet exists

    try {

      const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID })

      const sheetExists = spreadsheet.data.sheets.some(

        (s) => s.properties.title === SHEET_NAME

      )

      if (!sheetExists) {

        await sheets.spreadsheets.batchUpdate({

          spreadsheetId: SPREADSHEET_ID,

          requestBody: {

            requests: [

              {

                addSheet: {

                  properties: { title: SHEET_NAME },

                },

              },

            ],

          },

        })

      }

    } catch (e) {

      console.error("Sheet check error:", e)

    }

    const response = await sheets.spreadsheets.values.get({

      spreadsheetId: SPREADSHEET_ID,

      range: headerRange,

    })

    const existingData = response.data.values || []

    // Create headers

    if (existingData.length === 0) {

      const headers = [

        "Timestamp",

        "Name",

        "Email",

        "Phone",

        "Company",

        "Service",

        "Solution",

        "Message",

      ]

      await sheets.spreadsheets.values.update({

        spreadsheetId: SPREADSHEET_ID,

        range: headerRange,

        valueInputOption: "USER_ENTERED",

        requestBody: {

          values: [headers],

        },

      })

    }

    // Prepare data

    const timestamp = new Date().toLocaleString("en-US", {

      timeZone: "Africa/Cairo",

    })

    const values = [[

      timestamp,

      name,

      email,

      phone || "",

      company || "",

      service || "",

      solution || "",

      message

    ]]

    // Append

    await sheets.spreadsheets.values.append({

      spreadsheetId: SPREADSHEET_ID,

      range: `${SHEET_NAME}!A:H`,

      valueInputOption: "USER_ENTERED",

      requestBody: {

        values,

      },

    })

    return res.status(200).json({ message: "Form submitted successfully!" })

  } catch (error) {

    console.error("ERROR:", error)

    return res.status(500).json({ error: "Failed to submit form" })

  }

}
