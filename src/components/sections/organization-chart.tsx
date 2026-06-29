'use client';

import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface ChartPosition {
  name: string;
  title: string;
}

interface ChartNode {
  position: ChartPosition;
  children?: ChartNode[];
  isHighlight?: boolean;
}

const organizationData: ChartNode = {
  position: {
    name: "---",
    title: "EXECUTIVE LEVEL",
  },
  children: [
    {
      position: {
        name: "Basem Bahaa",
        title: "CEO",
      },
    },
    {
      position: {
        name: "Farid Galila",
        title: "CHAIRMAN",
      },
    },
    {
      position: {
        name: "Ahmed Safwat",
        title: "VICE PRESIDENT",
      },
    },
  ],
};

const generalManagerData: ChartNode = {
  position: {
    name: "Hassan Mansour",
    title: "GENERAL MANAGER",
  },
  isHighlight: true,
  children: [
    {
      position: {
        name: "Kareem Moamen",
        title: "PRODUCT MANAGER",
      },
      children: [
        {
          position: {
            name: "---",
            title: "PRODUCT MANAGER\nASSISTANT",
          },
        },
      ],
    },
    {
      position: {
        name: "Mohamed Rabiea",
        title: "BUSINESS UNIT HEAD\n(CHANNELS & SMB)",
      },
      children: [
        {
          position: {
            name: "---",
            title: "SMB'S\nDEPARTMENT",
          },
        },
        {
          position: {
            name: "Amira Zalat",
            title: "SALES\nMANAGER",
          },
          children: [
            {
              position: {
                name: "Katim Sweilam",
                title: "SALES ACCOUNT\nMANAGER",
              },
            },
            {
              position: {
                name: "Ibrahim Metwaley",
                title: "SALES ACCOUNT\nMANAGER",
              },
            },
          ],
        },
      ],
    },
    {
      position: {
        name: "---",
        title: "SALES PROJECTS\nDEPARTMENT",
      },
      children: [
        {
          position: {
            name: "Haidy Nabieh",
            title: "SALES MANAGER -\nRESIDENIAL &\nHOSPITALITY",
          },
        },
        {
          position: {
            name: "Bishoy George",
            title: "BDM",
          },
        },
        {
          position: {
            name: "Shaima Fathy",
            title: "SALES\nMANAGER",
          },
        },
        {
          position: {
            name: "Sama Emira",
            title: "BDM",
          },
        },
        {
          position: {
            name: "Sameh Mohamed",
            title: "BDM - ITS\nGOVERNMENTAL\nSECTOR",
          },
        },
        {
          position: {
            name: "Kareem Shanawaney",
            title: "BDM - ITS\nPRIVATE\nSECTOR",
          },
        },
      ],
    },
  ],
};

interface OrgChartNodeProps {
  node: ChartNode;
  level: number;
  isExecutiveRow?: boolean;
}

function OrgChartNode({ node, level, isExecutiveRow }: OrgChartNodeProps) {
  const boxWidth = level === 0 ? "w-32" : level === 1 ? "w-36" : "w-40";
  
  return (
    <div className="flex flex-col items-center">
      {/* Position Box */}
      <div
        className={`
          border-2 rounded-lg p-3 text-center transition-all
          ${
            node.isHighlight
              ? "border-orange-500 bg-white shadow-lg"
              : node.position.name === "---"
              ? "border-gray-400 bg-gray-50 opacity-60"
              : "border-gray-800 bg-white"
          }
          ${isExecutiveRow ? "min-w-max" : boxWidth}
        `}
      >
        <div className={`font-bold ${isExecutiveRow ? "text-sm" : "text-xs md:text-sm"} text-gray-900`}>
          {node.position.name}
        </div>
        <div className={`text-gray-700 mt-1 whitespace-pre-line font-semibold ${isExecutiveRow ? "text-xs" : "text-xs"}`}>
          {node.position.title}
        </div>
      </div>

      {/* Vertical Line to Children */}
      {node.children && node.children.length > 0 && (
        <>
          <div className="w-0.5 h-6 bg-gray-800"></div>

          {/* Horizontal Line connecting multiple children */}
          <div className="relative">
            <div className="absolute h-0.5 bg-gray-800" style={{
              width: 'calc(100% + 2rem)',
              left: '-1rem',
              top: 0
            }} />

            {/* Children Container */}
            <div className={`flex ${node.children.length > 1 ? "gap-3 md:gap-6" : "gap-2"} justify-center pt-8 flex-wrap`}>
              {node.children.map((child, index) => (
                <div key={index} className="relative">
                  {/* Vertical line from horizontal to child */}
                  <div className="absolute w-0.5 h-6 bg-gray-800 left-1/2 -translate-x-1/2 -top-8"></div>
                  <OrgChartNode node={child} level={level + 1} isExecutiveRow={false} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function OrganizationChart() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-navy/5 to-teal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <ScrollReveal variant="slideUp">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2">
              Organization Chart
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Our leadership structure and team hierarchy
            </p>
          </div>
        </ScrollReveal>

        {/* Chart Container - Horizontally Scrollable on Mobile, Centered on Desktop */}
        <ScrollReveal variant="slideUp" delay={0.2}>
          <div className="overflow-x-auto pb-4 md:pb-8 -mx-3 md:mx-0 px-3 md:px-0">
            <div className="flex flex-col items-center space-y-8 md:space-y-12 min-w-max md:min-w-0 py-4">
              {/* Executive Level */}
              <div className="flex gap-4 md:gap-8 justify-center flex-wrap">
                {organizationData.children?.map((executive, index) => (
                  <OrgChartNode key={index} node={executive} level={0} isExecutiveRow={true} />
                ))}
              </div>

              {/* Connecting line from executives to General Manager */}
              <div className="flex flex-col items-center w-full">
                <div className="w-0.5 h-8 bg-gray-800"></div>
              </div>

              {/* General Manager and below */}
              <div className="w-full flex justify-center">
                <OrgChartNode node={generalManagerData} level={1} isExecutiveRow={false} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
