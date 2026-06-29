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
            title: "PRODUCT MANAGER ASSISTANT",
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
            title: "SMB'S DEPARTMENT",
          },
        },
        {
          position: {
            name: "Amira Zalat",
            title: "SALES MANAGER",
          },
          children: [
            {
              position: {
                name: "Katim Sweilam",
                title: "SALES ACCOUNT MANAGER",
              },
            },
            {
              position: {
                name: "Ibrahim Metwaley",
                title: "SALES ACCOUNT MANAGER",
              },
            },
          ],
        },
      ],
    },
    {
      position: {
        name: "---",
        title: "SALES PROJECTS DEPARTMENT",
      },
      children: [
        {
          position: {
            name: "Haidy Nabieh",
            title: "SALES MANAGER -\nRESIDENIAL & HOSPITALITY",
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
            title: "SALES MANAGER",
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
            title: "BDM - ITS\nGOVERNMENTAL SECTOR",
          },
        },
        {
          position: {
            name: "Kareem Shanawaney",
            title: "BDM - ITS PRIVATE\nSECTOR",
          },
        },
      ],
    },
  ],
};

interface OrgChartNodeProps {
  node: ChartNode;
  level: number;
}

function OrgChartNode({ node, level }: OrgChartNodeProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Position Box */}
      <div
        className={`
          border-2 rounded-lg p-4 min-w-[200px] text-center
          ${
            node.isHighlight
              ? "border-orange-500 bg-white shadow-lg"
              : "border-gray-800 bg-white"
          }
        `}
      >
        <div className="font-bold text-sm md:text-base text-gray-900">
          {node.position.name}
        </div>
        <div className="text-xs md:text-sm text-gray-700 mt-1 whitespace-pre-line font-semibold">
          {node.position.title}
        </div>
      </div>

      {/* Vertical Line to Children */}
      {node.children && node.children.length > 0 && (
        <>
          <div className="w-1 h-8 bg-gray-800"></div>

          {/* Horizontal Line connecting multiple children */}
          <div className="relative flex items-start">
            <div className="absolute h-1 bg-gray-800" style={{width: '100%'}} />

            {/* Children Container */}
            <div className="flex gap-8 md:gap-12 justify-center pt-8 flex-wrap">
              {node.children.map((child, index) => (
                <div key={index} className="relative">
                  {/* Vertical line from horizontal to child */}
                  <div className="absolute w-1 h-8 bg-gray-800 left-1/2 -translate-x-1/2 -top-8"></div>
                  <OrgChartNode node={child} level={level + 1} />
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
    <section className="py-20 bg-gradient-to-br from-navy/5 to-teal/5">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-2">
              Organization Chart
            </h2>
            <p className="text-gray-600 text-lg">
              Our leadership structure and team hierarchy
            </p>
          </div>
        </ScrollReveal>

        {/* Chart Container - Horizontally Scrollable on Mobile */}
        <ScrollReveal variant="slideUp" delay={0.2}>
          <div className="overflow-x-auto pb-8">
            <div className="flex justify-center min-w-max px-4 md:px-0">
              <OrgChartNode node={organizationData} level={0} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
