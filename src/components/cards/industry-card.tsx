import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  slug: string;
  title: string;
  description?: string;
  icon: string;
  compact?: boolean;
}

export function IndustryCard({ slug, title, description, icon, compact }: IndustryCardProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon];

  if (compact) {
    return (
      <Link
        to={`/industries/${slug}`}
        className="group flex h-full flex-col items-center bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
      >
        <div className="w-10 h-10 rounded-lg bg-navy/5 group-hover:bg-teal/10 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
          {IconComponent && (
            <IconComponent className="w-5 h-5 text-navy group-hover:text-teal transition-colors duration-300" />
          )}
        </div>

        <h4 className="font-display font-semibold text-sm text-navy group-hover:text-teal transition-colors line-clamp-2">
          {title}
        </h4>
      </Link>
    );
  }

  return (
    <Link
      to={`/industries/${slug}`}
      className="group flex h-full flex-col bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-navy/5 group-hover:bg-teal/10 flex items-center justify-center mb-4 transition-colors duration-300">
        {IconComponent && (
          <IconComponent className="w-6 h-6 text-navy group-hover:text-teal transition-colors duration-300" />
        )}
      </div>

      <h3 className="font-display font-semibold text-lg text-navy mb-2 group-hover:text-teal transition-colors">
        {title}
      </h3>

      {description && (
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
      )}

      <span className="mt-auto inline-flex items-center gap-1 text-teal text-sm font-medium group-hover:gap-2 transition-all">
        Explore <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
