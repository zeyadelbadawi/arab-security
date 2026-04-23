import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Partners from './pages/Partners';
import Industries from './pages/Industries';
import IndustryDetail from './pages/IndustryDetail';
import ServiceDetail from './pages/ServiceDetail';
import SolutionOverview from './pages/SolutionOverview';
import SolutionSubPage from './pages/SolutionSubPage';
import SolutionPreviousWork from './pages/SolutionPreviousWork';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import FAQs from './pages/FAQs';
import MediaCenter from './pages/MediaCenter';
import Careers from './pages/Careers';
import Training from './pages/Training';
import PartnerWithUs from './pages/PartnerWithUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import AuthCallback from './pages/AuthCallback';
import AuthError from './pages/AuthError';
import SolutionsPage from './pages/solutions';
import Services from './pages/Services';
// MODULE_IMPORTS_START
// MODULE_IMPORTS_END

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* MODULE_PROVIDERS_START */}
    {/* MODULE_PROVIDERS_END */}
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/solutions/:category" element={<SolutionOverview />} />
            <Route path="/solutions/:category/previous-work" element={<SolutionPreviousWork />} />
            <Route path="/solutions/:category/:slug" element={<SolutionSubPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/media" element={<MediaCenter />} />
            <Route path="/media/:slug" element={<MediaCenter />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/training" element={<Training />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/error" element={<AuthError />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/services" element={<Services />} />

            {/* MODULE_ROUTES_START */}
            {/* MODULE_ROUTES_END */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
    {/* MODULE_PROVIDERS_CLOSE */}
  </QueryClientProvider>
);

export default App;