import { useParams, Navigate, Link } from "react-router-dom";
import { HeroSection } from "@/components/sections/hero-section";
import { Breadcrumb } from "@/components/sections/breadcrumb";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { CTABlock } from "@/components/sections/cta-block";
import { ImageGallery } from "@/components/sections/image-gallery";
import { getMediaBySlug, getMediaItems } from "@/lib/data/media";
import { Calendar, User, Tag, ArrowRight, Share2, MessageCircle } from "lucide-react";
import { IMAGES } from "@/lib/constants";

export default function MediaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const media = getMediaBySlug(slug || "");

  if (!media) return <Navigate to="/media" replace />;

  const allMedia = getMediaItems();
  const relatedMedia = allMedia
    .filter((m) => m.slug !== media.slug && m.type === media.type)
    .slice(0, 3);

  const typeColors = {
    news: "bg-blue-100 text-blue-700",
    blog: "bg-teal/10 text-teal",
    event: "bg-orange-100 text-orange-700",
  };

  const typeLabels = {
    news: "News",
    blog: "Blog",
    event: "Event",
  };

  return (
    <>
      <HeroSection
        title={media.title}
        subtitle={media.excerpt}
        backgroundImage={media.image}
        variant="detail"
        overlay="gradient"
      />

      <Breadcrumb
        items={[
          { label: "Media", href: "/media" },
          { label: media.title },
        ]}
      />

      {/* Media Detail Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {/* Main Content - 2/3 width */}
              <div className="lg:col-span-2">
                {/* Media Type & Meta Information */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide ${typeColors[media.type]}`}
                    >
                      {typeLabels[media.type]}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(media.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    {media.author && (
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <User className="w-4 h-4" />
                        <span>{media.author}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-12">
                  <ImageGallery 
                    images={media.images && media.images.length > 0 ? media.images : [media.image]}
                    title={media.title}
                  />
                </div>

                {/* Article Content */}
                <article className="prose prose-lg max-w-none mb-12 text-gray-700">
                  {media.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                      {paragraph.split("\n").map((line, lineIndex) => (
                        <span key={lineIndex}>
                          {line}
                          {lineIndex < paragraph.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
                </article>

                {/* Tags */}
                {media.tags && media.tags.length > 0 && (
                  <div className="mb-8 pb-8 border-t border-gray-200 pt-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-gray-600 font-semibold text-sm">Tags:</span>
                      {media.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/media?tag=${tag}`}
                          className="px-4 py-2 bg-navy/5 border border-navy/10 hover:bg-teal/10 hover:border-teal text-navy hover:text-teal text-sm rounded-full transition-all duration-300"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Section */}
                <div className="border-t border-gray-200 pt-8 flex items-center gap-4">
                  <span className="text-gray-600 font-semibold">Share:</span>
                  <button className="p-2 rounded-full bg-navy/5 hover:bg-navy/10 text-navy transition-colors" title="Share">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-navy/5 hover:bg-navy/10 text-navy transition-colors" title="Comment">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Sidebar - 1/3 width */}
              <div className="lg:col-span-1">
                {/* Info Card */}
                <div className="bg-gradient-to-br from-navy/5 to-teal/5 rounded-2xl border border-navy/10 p-8 mb-8 sticky top-24">
                  <h3 className="font-display font-bold text-navy text-lg mb-6">About This {typeLabels[media.type]}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">Published</div>
                      <div className="flex items-center gap-2 text-navy font-medium">
                        <Calendar className="w-4 h-4 text-teal" />
                        {new Date(media.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>

                    {media.author && (
                      <div>
                        <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">By</div>
                        <div className="flex items-center gap-2 text-navy font-medium">
                          <User className="w-4 h-4 text-teal" />
                          {media.author}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-2">Category</div>
                      <div className={`inline-block px-3 py-1.5 rounded-lg text-sm font-semibold ${typeColors[media.type]}`}>
                        {typeLabels[media.type]}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-navy/10 mt-8 pt-8">
                    <Link
                      to="/media"
                      className="inline-flex items-center gap-2 text-teal hover:text-navy font-semibold text-sm transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 -rotate-180" />
                      Back to Media
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Media */}
      {relatedMedia.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-12">
                Related {typeLabels[media.type]}
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="slideUp" delay={0.1}>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedMedia.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/media/${item.slug}`}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize ${typeColors[item.type]}`}
                        >
                          {item.type}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          {new Date(item.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-teal transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-end mt-auto pt-4 border-t border-gray-100">
                        <span className="flex items-center gap-1 text-teal text-sm font-medium group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTABlock
        heading="Stay Updated with Latest News"
        description="Subscribe to our newsletter to get the latest insights, events, and announcements from Arab Security Group."
        primaryCTA={{ label: "Back to Media Center", href: "/media" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
