import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  client: string;
  heroImage: string;
  industry: string;
  location?: string;
}

export function ProjectCard({ slug, title, client, heroImage, industry, location }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 bg-teal/90 text-white text-xs font-medium rounded-full capitalize">
          {industry}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-navy text-base mb-1 group-hover:text-teal transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mb-2">{client}</p>

        {location && (
          <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
            <MapPin className="w-3 h-3" />
            {location}
          </div>
        )}

        {/* 👇 دا اللي بيظبط ال alignment */}
        <span className="mt-auto inline-flex items-center gap-1 text-teal text-sm font-medium mt-3 group-hover:gap-2 transition-all">
          View Case Study <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
