import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { CTABlock } from "@/components/sections/cta-block";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animation/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { getMediaItems, type MediaItem } from "@/lib/data/media";
import { Calendar, ArrowRight, User, Tag } from "lucide-react";

const allMedia = getMediaItems();
const tabs = [
  { key: "all", label: "All" },
  { key: "news", label: "News" },
  { key: "blog", label: "Blogs" },
  { key: "event", label: "Events" },
] as const;

function MediaCard({ item }: { item: MediaItem }) {
  const typeColors = {
    news: "bg-blue-100 text-blue-700",
    blog: "bg-teal/10 text-teal",
    event: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${typeColors[item.type]}`}>
            {item.type}
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs">
            <Calendar className="w-3 h-3" />
            {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>
        <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-teal transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{item.excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          {item.author && (
            <span className="flex items-center gap-1 text-gray-400 text-xs">
              <User className="w-3 h-3" /> {item.author}
            </span>
          )}
          <div className="flex items-center gap-1 text-teal text-sm font-medium group-hover:gap-2 transition-all ml-auto">
            Read More <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MediaCenterPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return allMedia;
    return allMedia.filter((m) => m.type === activeTab);
  }, [activeTab]);

  return (
    <>
      <HeroSection
        title="Media Center"
        subtitle="Stay updated with the latest news, insights, and events from Arab Security Group."
        backgroundImage={IMAGES.heroCommandCenter}
        variant="compact"
        overlay="navy"
      />
      <Breadcrumb items={[{ label: "Media Center" }]} />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <ScrollReveal>
            <div className="flex gap-2 mb-10 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.key
                      ? "bg-navy text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <StaggerItem key={item.slug}>
                <Link to={`/media/${item.slug}`} className="block h-full">
                  <MediaCard item={item} />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Tag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CTABlock
        title="Stay Connected"
        subtitle="Subscribe to our newsletter for the latest updates and industry insights."
        primaryText="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}