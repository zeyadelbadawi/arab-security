'use client';

import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface OrgBoxProps {
  name?: string;
  title: string;
  highlight?: boolean;
  className?: string;
}

function OrgBox({ name, title, highlight = false, className = "" }: OrgBoxProps) {
  return (
    <div
      className={`
        bg-white border rounded-md px-3 py-3 text-center shadow-sm
        flex flex-col items-center justify-center
        ${highlight ? "border-2 border-orange-500" : "border-navy/80"}
        ${className}
      `}
    >
      {name && (
        <div className="font-display font-bold text-navy text-[14px] leading-tight">
          {name}
        </div>
      )}

      <div className="text-[12px] uppercase tracking-[0.16em] text-gray-900 leading-snug whitespace-pre-line">
        {title}
      </div>
    </div>
  );
}

export function OrganizationChart() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-navy/5 to-teal/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4">
        <ScrollReveal variant="slideUp">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2">
              Organization Chart
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Our leadership structure and team hierarchy
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideUp" delay={0.2}>
          <div className="overflow-hidden pb-6 h-[260px] sm:h-[430px] md:h-[580px] lg:h-[720px] xl:h-[850px] 2xl:h-auto">
            <div className="relative mx-auto w-[1320px] origin-top-left scale-[0.25] sm:scale-[0.42] md:scale-[0.58] lg:scale-[0.72] xl:scale-[0.86] 2xl:scale-100 bg-white rounded-2xl border border-gray-200 shadow-xl px-10 py-10">

              {/* Executives */}
              <div className="flex justify-center gap-8 mb-8">
                <OrgBox name="Farid Galila" title="CHAIRMAN" className="w-[230px] min-h-[78px]" />
                <OrgBox name="Basem Bahaa" title="CEO" className="w-[230px] min-h-[78px]" />
                <OrgBox name="Ahmed Safwat" title="VICE PRESIDENT" className="w-[230px] min-h-[78px]" />
              </div>

              <div className="flex justify-center">
                <div className="w-px h-8 bg-navy/80" />
              </div>

              {/* GM */}
              <div className="flex justify-center">
                <OrgBox
                  name="Hassan Mansour"
                  title="GENERAL MANAGER"
                  highlight
                  className="w-[280px] min-h-[86px]"
                />
              </div>

              <div className="flex justify-center">
                <div className="w-px h-8 bg-navy/80" />
              </div>

              {/* Main connector */}
              <div className="relative h-8 mx-[70px]">
                <div className="absolute top-0 left-0 right-0 h-px bg-navy/80" />
                <div className="absolute top-0 left-[0px] w-px h-8 bg-navy/80" />
                <div className="absolute top-0 left-[300px] w-px h-8 bg-navy/80" />
                <div className="absolute top-0 right-[270px] w-px h-8 bg-navy/80" />
              </div>

              {/* Branches */}
              <div className="grid grid-cols-[240px_430px_1fr] gap-10 items-start">

                {/* Product branch */}
                <div className="flex flex-col items-center">
                  <OrgBox
                    name="Kareem Moamen"
                    title="PRODUCT MANAGER"
                    className="w-[220px] min-h-[78px]"
                  />

                  <div className="w-px h-8 bg-navy/80" />

                  <OrgBox
                    title={"PRODUCT MANAGER\nASSISTANT"}
                    className="w-[220px] min-h-[78px]"
                  />
                </div>

                {/* Mohamed / SMB branch */}
                <div className="flex flex-col items-center">
                  <OrgBox
                    name="Mohamed Rabiea"
                    title={"BUSINESS UNIT HEAD\n(CHANNELS & SMB)"}
                    className="w-[250px] min-h-[92px]"
                  />

                  <div className="w-px h-7 bg-navy/80" />

                  <div className="relative w-[390px] h-8">
                    <div className="absolute top-0 left-[70px] right-[70px] h-px bg-navy/80" />
                    <div className="absolute top-0 left-[70px] w-px h-8 bg-navy/80" />
                    <div className="absolute top-0 right-[70px] w-px h-8 bg-navy/80" />
                  </div>

                  <div className="flex items-start justify-center gap-8">
                    <OrgBox
                      name="SMB’s"
                      title="DEPARTMENT"
                      className="w-[165px] min-h-[78px]"
                    />

                    <div className="flex flex-col items-center">
                      <OrgBox
                        name="Amira Zalat"
                        title="SALES MANAGER"
                        className="w-[165px] min-h-[78px]"
                      />

                      <div className="w-px h-7 bg-navy/80" />

                      <div className="relative w-[330px] h-8">
                        <div className="absolute top-0 left-[60px] right-[60px] h-px bg-navy/80" />
                        <div className="absolute top-0 left-[60px] w-px h-8 bg-navy/80" />
                        <div className="absolute top-0 right-[60px] w-px h-8 bg-navy/80" />
                      </div>

                      <div className="flex gap-8">
                        <OrgBox
                          name="Katim Sweilam"
                          title={"SALES ACCOUNT\nMANAGER"}
                          className="w-[150px] min-h-[92px]"
                        />
                        <OrgBox
                          name="Ibrahim Metwaley"
                          title={"SALES ACCOUNT\nMANAGER"}
                          className="w-[150px] min-h-[92px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sales projects branch */}
                <div className="flex flex-col items-center">
                  <OrgBox
                    title={"SALES PROJECTS\nDEPARTMENT"}
                    className="w-[250px] min-h-[78px]"
                  />

                  <div className="w-px h-7 bg-navy/80" />

                  <div className="relative w-[720px] h-8">
                    <div className="absolute top-0 left-[55px] right-[55px] h-px bg-navy/80" />

                    {[55, 177, 299, 421, 543, 665].map((left) => (
                      <div
                        key={left}
                        className="absolute top-0 w-px h-8 bg-navy/80"
                        style={{ left }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-6 gap-4">
                    <OrgBox
                      name="Haidy Nabieh"
                      title={"SALES MANAGER -\nRESIDENTIAL &\nHOSPITALITY"}
                      className="w-[110px] min-h-[120px]"
                    />
                    <OrgBox
                      name="Bishoy George"
                      title="BDM"
                      className="w-[110px] min-h-[120px]"
                    />
                    <OrgBox
                      name="Sameh Mohamed"
                      title={"BDM - ITS\nGOVERNMENTAL\nSECTOR"}
                      className="w-[110px] min-h-[120px]"
                    />
                    <OrgBox
                      name="Shaima Fathy"
                      title="SALES MANAGER"
                      className="w-[110px] min-h-[120px]"
                    />
                    <OrgBox
                      name="Sama Emira"
                      title="BDM"
                      className="w-[110px] min-h-[120px]"
                    />
                    <OrgBox
                      name="Kareem Shanawaney"
                      title={"BDM - ITS\nPRIVATE\nSECTOR"}
                      className="w-[110px] min-h-[120px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
