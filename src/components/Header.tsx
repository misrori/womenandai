import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/events", key: "nav.events" },
  { to: "/blog", key: "nav.blog" },
  { to: "/knowledge", key: "nav.knowledge" },
  { to: "/refer", key: "nav.refer" },
  { to: "/join", key: "nav.join" },
] as const;

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-rule bg-paper sticky top-0 z-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Women & AI Logo" className="h-8 w-8 object-contain" />
            <span className="display text-2xl tracking-tighter">Women<span className="display-italic"> & </span>AI</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => 
                  `text-sm tracking-wide hover:text-primary transition-colors ${isActive ? "text-primary border-b border-primary" : ""}`
                }
              >
                {t(l.key)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitcher lang={lang} setLang={setLang} />
            <button
              className="lg:hidden p-2"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden flex flex-col gap-1 pb-4 border-t border-rule pt-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `py-2 text-base ${isActive ? "text-primary font-medium" : ""}`
                }
              >
                {t(l.key)}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 number-marker border border-rule rounded-sm">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 ${lang === "en" ? "bg-ink text-paper" : "hover:bg-secondary"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("hu")}
        className={`px-2 py-1 ${lang === "hu" ? "bg-ink text-paper" : "hover:bg-secondary"}`}
        aria-pressed={lang === "hu"}
      >
        HU
      </button>
    </div>
  );
}
