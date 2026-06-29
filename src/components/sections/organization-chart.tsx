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
        bg-white border rounded-md px-4 py-3 text-center shadow-sm
        min-h-[72px] flex flex-col items-center justify-center
        ${highlight ? "border-2 border-orange-500" : "border-navy/80"}
        ${className}
      `}
    >
      {name && (
        <div className="font-display font-bold text-navy text-sm leading-tight tracking-wide">
          {name}
        </div>
      )}
      <div className="text-[12px] uppercase tracking-[0.14em] text-gray-900 leading-snug whitespace-pre-line">
        {title}
      </div>
    </div>
  );
}

export function OrganizationChart() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-navy/5 to-teal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
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
          <div className="overflow-x-auto pb-6">
            <div className="relative mx-auto bg-white rounded-2xl border border-gray-200 shadow-xl px-10 py-10 min-w-[1180px]">
              
              {/* Executive Row */}
              <div className="flex justify-center gap-8 mb-8">
                <OrgBox name="Farid Galila" title="CHAIRMAN" className="w-[210px]" />
                <OrgBox name="Basem Bahaa" title="CEO" className="w-[210px]" />
                <OrgBox name="Ahmed Safwat" title="VICE PRESIDENT" className="w-[210px]" />
              </div>

              {/* Line from executive row to GM */}
              <div className="flex justify-center">
                <div className="w-px h-8 bg-navy/80" />
              </div>

              {/* General Manager */}
              <div className="flex justify-center">
                <OrgBox
                  name="Hassan Mansour"
                  title="GENERAL MANAGER"
                  highlight
                  className="w-[250px] min-h-[86px]"
                />
              </div>

              {/* GM vertical line */}
              <div className="flex justify-center">
                <div className="w-px h-7 bg-navy/80" />
              </div>

              {/* Main horizontal line */}
              <div className="relative h-8 mx-[70px]">
                <div className="absolute top-0 left-0 right-0 h-px bg-navy/80" />
                <div className="absolute top-0 left-[0px] w-px h-8 bg-navy/80" />
                <div className="absolute top-0 left-[215px] w-px h-8 bg-navy/80" />
                <div className="absolute top-0 right-[250px] w-px h-8 bg-navy/80" />
              </div>

              {/* Main branches row */}
              <div className="grid grid-cols-[190px_260px_1fr] gap-8 items-start">
                
                {/* Product Manager Branch */}
                <div className="flex flex-col items-center">
                  <OrgBox
                    name="Kareem Moamen"
                    title="PRODUCT MANAGER"
                    className="w-[190px]"
                  />
                  <div className="w-px h-8 bg-navy/80" />
                  <OrgBox
                    title="PRODUCT MANAGER&#10;ASSISTANT"
                    className="w-[190px]"
                  />
                </div>

                {/* Business Unit Branch */}
                <div className="flex flex-col items-center">
                  <OrgBox
                    name="Mohamed Rabiea"
                    title={"BUSINESS UNIT HEAD\n(CHANNELS & SMB)"}
                    className="w-[230px] min-h-[100px]"
                  />

                  <div className="w-px h-6 bg-navy/80" />

                  <div className="relative w-[330px] h-8">
                    <div className="absolute top-0 left-[65px] right-[65px] h-px bg-navy/80" />
                    <div className="absolute top-0 left-[65px] w-px h-8 bg-navy/80" />
                    <div className="absolute top-0 right-[65px] w-px h-8 bg-navy/80" />
                  </div>

                  <div className="flex justify-center gap-6">
                    <OrgBox
                      name="SMB’s"
                      title="DEPARTMENT"
                      className="w-[150px]"
                    />

                    <div className="flex flex-col items-center">
                      <OrgBox
                        name="Amira Zalat"
                        title="SALES MANAGER"
                        className="w-[150px]"
                      />

                      <div className="w-px h-6 bg-navy/80" />

                      <div className="relative w-[290px] h-8">
                        <div className="absolute top-0 left-[55px] right-[55px] h-px bg-navy/80" />
                        <div className="absolute top-0 left-[55px] w-px h-8 bg-navy/80" />
                        <div className="absolute top-0 right-[55px] w-px h-8 bg-navy/80" />
                      </div>

                      <div className="flex gap-6">
                        <OrgBox
                          name="Katim Sweilam"
                          title={"SALES ACCOUNT\nMANAGER"}
                          className="w-[135px]"
                        />
                        <OrgBox
                          name="Ibrahim Metwaley"
                          title={"SALES ACCOUNT\nMANAGER"}
                          className="w-[135px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sales Projects Branch */}
                <div className="flex flex-col items-center">
                  <OrgBox
                    title={"SALES PROJECTS\nDEPARTMENT"}
                    className="w-[230px]"
                  />

                  <div className="w-px h-6 bg-navy/80" />

                  <div className="relative w-[650px] h-8">
                    <div className="absolute top-0 left-[55px] right-[55px] h-px bg-navy/80" />

                    <div className="absolute top-0 left-[55px] w-px h-8 bg-navy/80" />
                    <div className="absolute top-0 left-[170px] w-px h-8 bg-navy/80" />
                    <div className="absolute top-0 left-[285px] w-px h-8 bg-navy/80" />
                    <div className="absolute top-0 left-[400px] w-px h-8 bg-navy/80" />
                    <div className="absolute top-0 left-[515px] w-px h-8 bg-navy/80" />
                    <div className="absolute top-0 right-[55px] w-px h-8 bg-navy/80" />
                  </div>

                  <div className="grid grid-cols-6 gap-4">
                    <OrgBox
                      name="Haidy Nabieh"
                      title={"SALES MANAGER -\nRESIDENTIAL &\nHOSPITALITY"}
                      className="w-[105px] min-h-[92px]"
                    />
                    <OrgBox
                      name="Bishoy George"
                      title="BDM"
                      className="w-[105px] min-h-[92px]"
                    />
                    <OrgBox
                      name="Sameh Mohamed"
                      title={"BDM - ITS\nGOVERNMENTAL\nSECTOR"}
                      className="w-[105px] min-h-[92px]"
                    />
                    <OrgBox
                      name="Shaima Fathy"
                      title="SALES MANAGER"
                      className="w-[105px] min-h-[92px]"
                    />
                    <OrgBox
                      name="Sama Emira"
                      title="BDM"
                      className="w-[105px] min-h-[92px]"
                    />
                    <OrgBox
                      name="Kareem Shanawaney"
                      title={"BDM - ITS\nPRIVATE\nSECTOR"}
                      className="w-[105px] min-h-[92px]"
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
