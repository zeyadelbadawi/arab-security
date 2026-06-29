import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";

interface ChartNode {
  name: string;
  title: string;
  children?: ChartNode[];
}

const organizationData: ChartNode[] = [
  {
    name: "Basem Bahaa",
    title: "CEO",
    children: [
      {
        name: "Farid Galila",
        title: "Chairman",
      },
      {
        name: "Ahmed Safwat",
        title: "Vice President",
      },
    ],
  },
  {
    name: "Hassan Mansour",
    title: "General Manager",
    children: [
      {
        name: "Kareem Moamen",
        title: "Product Manager",
        children: [
          {
            name: "---",
            title: "Product Manager Assistant",
          },
        ],
      },
      {
        name: "Mohamed Rabiea",
        title: "Business Unit Head (Channels & SMB)",
        children: [
          {
            name: "---",
            title: "SMB's Department",
            children: [
              {
                name: "Amira Zalat",
                title: "Sales Manager",
                children: [
                  {
                    name: "Katim Sweilam",
                    title: "Sales Account Manager",
                  },
                  {
                    name: "Ibrahim Metwaley",
                    title: "Sales Account Manager",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Sales Projects Department",
        title: "",
        children: [
          {
            name: "Haidy Nabieh",
            title: "Sales Manager - Residential & Hospitality",
          },
          {
            name: "Bishoy George",
            title: "BDM",
          },
          {
            name: "Sameh Mohamed",
            title: "BDM - ITS Governmental Sector",
          },
          {
            name: "Shaima Fathy",
            title: "Sales Manager",
          },
          {
            name: "Sama Emira",
            title: "BDM",
          },
          {
            name: "Kareem Shanawaney",
            title: "BDM - ITS Private Sector",
          },
        ],
      },
    ],
  },
];

interface ChartNodeProps {
  node: ChartNode;
  level: number;
  isLastChild?: boolean;
}

function ChartNodeComponent({ node, level, isLastChild = false }: ChartNodeProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Card */}
      <StaggerItem>
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow min-w-max max-w-xs">
          <h4 className="font-display font-bold text-navy text-base sm:text-lg text-center">
            {node.name}
          </h4>
          {node.title && (
            <p className="text-teal text-xs sm:text-sm font-medium text-center mt-1">
              {node.title}
            </p>
          )}
        </div>
      </StaggerItem>

      {/* Connecting lines and children */}
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center w-full">
          {/* Vertical line down from card */}
          <div className="h-6 w-0.5 bg-gray-300" />

          {/* Horizontal line connecting all children */}
          {node.children.length > 1 && (
            <div className="flex items-center justify-center w-full mb-6">
              {/* Left connector */}
              <div className="h-0.5 flex-1 bg-gray-300" />
              {/* Center dot */}
              <div className="w-2 h-2 rounded-full bg-gray-300 mx-0" />
              {/* Right connector */}
              <div className="h-0.5 flex-1 bg-gray-300" />
            </div>
          )}

          {/* Single child or multiple children */}
          {node.children.length === 1 ? (
            <div className="flex flex-col items-center">
              <div className="h-6 w-0.5 bg-gray-300" />
              <div className="mt-0">
                <ChartNodeComponent node={node.children[0]} level={level + 1} />
              </div>
            </div>
          ) : (
            <StaggerContainer className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full">
              {node.children.map((child, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center"
                >
                  {/* Vertical line from horizontal connector to card */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-6 w-0.5 bg-gray-300" />
                  <div className="mt-6">
                    <ChartNodeComponent
                      node={child}
                      level={level + 1}
                      isLastChild={idx === node.children.length - 1}
                    />
                  </div>
                </div>
              ))}
            </StaggerContainer>
          )}
        </div>
      )}
    </div>
  );
}

export function OrganizationChart() {
  return (
    <section className="py-20">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-teal font-display font-bold text-sm tracking-wide mb-2">
                ORGANIZATION STRUCTURE
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
                Organization Structure
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                A clear leadership and departmental structure built to support operational excellence and growth.
              </p>
            </div>
          </ScrollReveal>

          {/* Chart Container - Scrollable on mobile */}
          <div className="overflow-x-auto pb-8">
            <div className="inline-block min-w-full">
              <StaggerContainer className="flex flex-col items-center gap-12 py-8 px-4">
                {organizationData.map((topNode, idx) => (
                  <div key={idx} className="w-full flex justify-center">
                    <ChartNodeComponent node={topNode} level={0} />
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
