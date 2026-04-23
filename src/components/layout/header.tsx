import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, icons } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/lib/data/navigation";
import type { NavItem, MegaMenuColumn } from "@/lib/types";

function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const IconComponent = icons[name as keyof typeof icons];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/assets/logos/logo-white.png"
              alt="Arab Security Group"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveMega(item.label)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors ${
                    location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                      ? "text-teal"
                      : ""
                  }`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {item.megaMenu && activeMega === item.label && (
                    <MegaMenu columns={item.megaMenu.columns} isLarge={item.megaMenu.columns.length > 4} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-teal hover:bg-teal-dark text-white text-sm font-display font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Get a Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu items={navigation} />}
      </AnimatePresence>
    </header>
  );
}

function MegaMenu({ columns, isLarge }: { columns: MegaMenuColumn[]; isLarge?: boolean }) {
  if (isLarge) {
    // Large mega menu for Solutions (9 columns) - use fixed position full-width dropdown
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="fixed top-16 lg:top-20 left-0 right-0 pt-0 z-50"
      >
        <div className="bg-white shadow-2xl border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-6">
              {columns.map((col) => (
                <div key={col.title}>
                  <Link
                    to={col.href}
                    className="flex items-center gap-2 text-navy font-display font-semibold text-sm mb-2 hover:text-teal transition-colors"
                  >
                    <DynamicIcon name={col.icon} className="w-4 h-4 text-teal" />
                    {col.title}
                  </Link>
                  <div className="space-y-0.5">
                    {col.items.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block text-xs text-gray-600 hover:text-teal hover:pl-1 transition-all duration-200 py-0.5"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard mega menu for smaller dropdowns
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 min-w-[280px]"
        style={{ width: columns.length > 1 ? `${columns.length * 220}px` : "280px" }}
      >
        <div className="grid gap-6"
          style={{ gridTemplateColumns: `repeat(${Math.min(columns.length, 4)}, minmax(0, 1fr))` }}
        >
          {columns.map((col) => (
            <div key={col.title}>
              <Link
                to={col.href}
                className="flex items-center gap-2 text-navy font-display font-semibold text-sm mb-3 hover:text-teal transition-colors"
              >
                <DynamicIcon name={col.icon} className="w-4 h-4 text-teal" />
                {col.title}
              </Link>
              <div className="space-y-1">
                {col.items.map((sub) => (
                  <Link
                    key={sub.label}
                    to={sub.href}
                    className="block text-sm text-gray-600 hover:text-teal hover:pl-1 transition-all duration-200 py-1"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
              <Link
                to={col.href}
                className="inline-flex items-center gap-1 text-xs text-teal font-medium mt-3 hover:gap-2 transition-all"
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenu({ items }: { items: NavItem[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden bg-navy border-t border-white/10 overflow-hidden"
    >
      <div className="max-h-[80vh] overflow-y-auto px-4 py-4 space-y-1">
        {items.map((item) => (
          <div key={item.label}>
            {item.megaMenu ? (
              <>
                <button
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full px-3 py-3 text-white/90 hover:text-white text-sm font-medium"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {expanded === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 space-y-1">
                        {item.megaMenu.columns.map((col) => (
                          <div key={col.title} className="mb-3">
                            <Link
                              to={col.href}
                              className="block text-teal text-xs font-semibold uppercase tracking-wider mb-1 px-3 py-1"
                            >
                              {col.title}
                            </Link>
                            {col.items.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                className="block px-3 py-1.5 text-white/70 hover:text-white text-sm"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                to={item.href}
                className="block px-3 py-3 text-white/90 hover:text-white text-sm font-medium"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <div className="pt-4 px-3">
          <Link
            to="/contact"
            className="block w-full text-center px-5 py-3 bg-teal hover:bg-teal-dark text-white text-sm font-display font-semibold rounded-lg transition-colors"
          >
            Get a Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
}