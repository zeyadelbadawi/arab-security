import { Link } from "react-router-dom";
import { ArrowRight, icons } from "lucide-react";

interface SolutionCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category?: string;
}

export function SolutionCard({ slug, title, description, icon, category }: SolutionCardProps) {
  const IconComponent = icons[icon as keyof typeof icons];
  const href = category ? `/solutions/${category}/${slug}` : `/solutions/${slug}`;

  return (
    <Link
    to={href}
    className="group flex flex-col h-full bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-navy/5 group-hover:bg-teal/10 flex items-center justify-center mb-4 transition-colors">
      {IconComponent && (
        <IconComponent className="w-6 h-6 text-navy group-hover:text-teal transition-colors" />
      )}
    </div>
  
    <h3 className="font-display font-semibold text-lg text-navy mb-2 group-hover:text-teal transition-colors">
      {title}
    </h3>
  
    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
      {description}
    </p>
  
    {/* 👇 ده المهم */}
    <span className="mt-auto inline-flex items-center gap-1 text-teal text-sm font-medium group-hover:gap-2 transition-all">
      Learn More <ArrowRight className="w-4 h-4" />
    </span>
  </Link>
  );
}
