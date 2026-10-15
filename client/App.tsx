import "./global.css";
import "@/lib/i18n";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import EcommerceQuestionnaire from "./pages/EcommerceQuestionnaire";
import CustomSolutionQuestionnaire from "./pages/CustomSolutionQuestionnaire";
import WordPressQuestionnaire from "./pages/WordPressQuestionnaire";
import Formations from "./pages/Formations";
import FormationDetail from "./pages/FormationDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurProjects from "./pages/OurProjects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
    value={{
      light: "light",
      dark: "dark",
    }}
    enableSystem={false}
    storageKey="cyberlymph-theme"
  >
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/formation/:id" element={<FormationDetail />} />
          <Route path="/formations/:id" element={<FormationDetail />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/ecommerce-questionnaire" element={<EcommerceQuestionnaire />} />
          <Route path="/custom-solution-questionnaire" element={<CustomSolutionQuestionnaire />} />
          <Route path="/wordpress-questionnaire" element={<WordPressQuestionnaire />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </I18nextProvider>
  </ThemeProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
