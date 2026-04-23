import * as Icons from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import type { ProcessStep } from "@/lib/types";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {steps.map((step) => {
        const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[step.icon];
        return (
          <StaggerItem key={step.stepNumber}>
            <div className="relative text-center p-6">
              <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4 relative">
                {IconComponent && <IconComponent className="w-6 h-6 text-teal" />}
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-navy text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.stepNumber}
                </span>
              </div>
              <h4 className="font-display font-semibold text-navy text-sm mb-2">{step.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}