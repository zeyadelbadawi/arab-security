import * as Icons from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import type { ProcessStep } from "@/lib/types";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => {
        const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[step.icon];
        return (
          <StaggerItem key={step.stepNumber}>
            <div className="relative text-center p-8 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow h-full">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6 relative">
                {IconComponent && <IconComponent className="w-7 h-7 text-teal" />}
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-navy text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {step.stepNumber}
                </span>
              </div>
              <h4 className="font-display font-semibold text-navy text-lg mb-3">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}



