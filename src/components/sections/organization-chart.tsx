'use client';

import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface PositionBoxProps {
  name: string;
  title: string;
  isHighlight?: boolean;
}

function PositionBox({ name, title, isHighlight }: PositionBoxProps) {
  return (
    <div
      className={`
        w-40 border-2 rounded-lg p-3 text-center
        ${
          isHighlight
            ? 'border-orange-500 bg-white shadow-md'
            : name === '---'
            ? 'border-gray-300 bg-gray-50'
            : 'border-navy bg-white'
        }
      `}
    >
      <div className="font-bold text-sm text-navy">{name}</div>
      <div className="text-gray-700 mt-2 whitespace-pre-line font-semibold text-xs leading-snug">
        {title}
      </div>
    </div>
  );
}

export function OrganizationChart() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2">
              Organization Chart
            </h2>
            <p className="text-gray-600">Our leadership structure and team hierarchy</p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideUp" delay={0.2}>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 overflow-x-auto">
            <div className="relative" style={{ minHeight: '900px' }}>
              {/* SVG for connector lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: 'none' }}
                preserveAspectRatio="none"
              >
                {/* Executive to Hassan line */}
                <line x1="50%" y1="80" x2="50%" y2="130" stroke="#1e2455" strokeWidth="2" />

                {/* Hassan to branch line */}
                <line x1="50%" y1="210" x2="50%" y2="260" stroke="#1e2455" strokeWidth="2" />

                {/* Main horizontal branch line */}
                <line x1="15%" y1="260" x2="85%" y2="260" stroke="#1e2455" strokeWidth="2" />

                {/* Left branch vertical */}
                <line x1="15%" y1="260" x2="15%" y2="310" stroke="#1e2455" strokeWidth="2" />

                {/* Middle branch vertical */}
                <line x1="50%" y1="260" x2="50%" y2="310" stroke="#1e2455" strokeWidth="2" />

                {/* Right branch vertical */}
                <line x1="85%" y1="260" x2="85%" y2="310" stroke="#1e2455" strokeWidth="2" />

                {/* Left branch - Kareem to Assistant */}
                <line x1="15%" y1="390" x2="15%" y2="440" stroke="#1e2455" strokeWidth="2" />

                {/* Middle branch - Mohamed Rabiea split */}
                <line x1="35%" y1="390" x2="65%" y2="390" stroke="#1e2455" strokeWidth="2" />
                <line x1="35%" y1="390" x2="35%" y2="440" stroke="#1e2455" strokeWidth="2" />
                <line x1="65%" y1="390" x2="65%" y2="440" stroke="#1e2455" strokeWidth="2" />

                {/* Amira to Account Managers */}
                <line x1="65%" y1="520" x2="65%" y2="570" stroke="#1e2455" strokeWidth="2" />
                <line x1="50%" y1="570" x2="80%" y2="570" stroke="#1e2455" strokeWidth="2" />
                <line x1="50%" y1="570" x2="50%" y2="620" stroke="#1e2455" strokeWidth="2" />
                <line x1="80%" y1="570" x2="80%" y2="620" stroke="#1e2455" strokeWidth="2" />

                {/* Right branch - Sales Projects to 6 team members */}
                <line x1="85%" y1="390" x2="85%" y2="440" stroke="#1e2455" strokeWidth="2" />
                <line x1="70%" y1="520" x2="100%" y2="520" stroke="#1e2455" strokeWidth="2" />
                <line x1="70%" y1="520" x2="70%" y2="570" stroke="#1e2455" strokeWidth="2" />
                <line x1="75%" y1="520" x2="75%" y2="570" stroke="#1e2455" strokeWidth="2" />
                <line x1="80%" y1="520" x2="80%" y2="570" stroke="#1e2455" strokeWidth="2" />
                <line x1="85%" y1="520" x2="85%" y2="570" stroke="#1e2455" strokeWidth="2" />
                <line x1="90%" y1="520" x2="90%" y2="570" stroke="#1e2455" strokeWidth="2" />
                <line x1="95%" y1="520" x2="95%" y2="570" stroke="#1e2455" strokeWidth="2" />
              </svg>

              {/* Chart Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Executive Level */}
                <div className="flex gap-8 md:gap-12 justify-center mb-20">
                  <PositionBox name="Farid Galila" title="CHAIRMAN" />
                  <PositionBox name="Basem Bahaa" title="CEO" />
                  <PositionBox name="Ahmed Safwat" title="VICE PRESIDENT" />
                </div>

                {/* Hassan Mansour */}
                <div className="mb-32">
                  <PositionBox name="Hassan Mansour" title="GENERAL MANAGER" isHighlight />
                </div>

                {/* Three Main Branches */}
                <div className="flex justify-between w-full px-8" style={{ gap: '40px' }}>
                  {/* Left Branch - Product */}
                  <div className="flex flex-col items-center" style={{ flex: '0 0 auto', width: '160px' }}>
                    <div className="mb-12">
                      <PositionBox name="Kareem Moamen" title="PRODUCT MANAGER" />
                    </div>
                    <div>
                      <PositionBox name="---" title="PRODUCT MANAGER\nASSISTANT" />
                    </div>
                  </div>

                  {/* Middle Branch - Business Unit */}
                  <div className="flex flex-col items-center" style={{ flex: '0 0 auto', width: '280px' }}>
                    <div className="mb-12">
                      <PositionBox name="Mohamed Rabiea" title="BUSINESS UNIT HEAD\n(CHANNELS & SMB)" />
                    </div>
                    <div className="flex gap-6 mb-16">
                      <PositionBox name="---" title="SMB'S\nDEPARTMENT" />
                      <div className="flex flex-col items-center">
                        <div className="mb-12">
                          <PositionBox name="Amira Zalat" title="SALES\nMANAGER" />
                        </div>
                        <div className="flex gap-6">
                          <PositionBox name="Katim Sweilam" title="SALES ACCOUNT\nMANAGER" />
                          <PositionBox name="Ibrahim Metwaley" title="SALES ACCOUNT\nMANAGER" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Branch - Sales Projects */}
                  <div className="flex flex-col items-center" style={{ flex: '0 0 auto', width: '280px' }}>
                    <div className="mb-12">
                      <PositionBox name="---" title="SALES PROJECTS\nDEPARTMENT" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <PositionBox name="Haidy Nabieh" title="SALES MANAGER -\nRESIDENTIAL &\nHOSPITALITY" />
                      <PositionBox name="Bishoy George" title="BDM" />
                      <PositionBox name="Sameh Mohamed" title="BDM - ITS\nGOVERNMENTAL\nSECTOR" />
                      <PositionBox name="Shaima Fathy" title="SALES\nMANAGER" />
                      <PositionBox name="Sama Emira" title="BDM" />
                      <PositionBox name="Kareem Shanawaney" title="BDM - ITS\nPRIVATE\nSECTOR" />
                    </div>
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
