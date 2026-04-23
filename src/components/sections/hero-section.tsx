import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CTAConfig, StatItem } from "@/lib/types";
import { CounterAnimation } from "@/components/animation/counter-animation";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  primaryCTA?: CTAConfig;
  secondaryCTA?: CTAConfig;
  stats?: StatItem[];
  variant?: "home" | "page" | "detail" | "compact";
  overlay?: "gradient" | "dark" | "navy";
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  stats,
  variant = "page",
  overlay = "navy",
}: HeroSectionProps) {
  const heightClass = {
    home: "min-h-screen",
    page: "min-h-[60vh]",
    detail: "min-h-[50vh]",
    compact: "min-h-[40vh]",
  }[variant];

  const overlayClass = {
    gradient: "bg-gradient-to-r from-navy/90 via-navy/80 to-deep-dark/70",
    dark: "bg-black/60",
    navy: "bg-navy/80",
  }[overlay];

  return (
    <section className={`relative ${heightClass} flex items-center overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`font-display font-extrabold text-white leading-tight ${
              variant === "home"
                ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
                : variant === "page"
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-2xl sm:text-3xl lg:text-4xl"
            }`}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {primaryCTA && (
                <Link
                  to={primaryCTA.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal hover:bg-teal-dark text-white font-display font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal/20"
                >
                  {primaryCTA.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  to={secondaryCTA.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 hover:border-white text-white font-display font-semibold rounded-lg transition-all duration-300 !bg-transparent hover:!bg-transparent"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {/* Stats Bar */}
        {stats && variant === "home" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                  <CounterAnimation value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}