import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import { Toaster } from "@/components/ui/sonner";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Events } from "./pages/Events";
import { Join } from "./pages/Join";
import { Knowledge } from "./pages/Knowledge";
import { Refer } from "./pages/Refer";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogDetail } from "./pages/BlogDetail";

function App() {
  return (
    <I18nProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          {/* Fallback for 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
