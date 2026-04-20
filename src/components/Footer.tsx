import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-rule mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="display text-3xl">Women<span className="display-italic"> & </span>AI</div>
            <p className="mt-3 text-sm opacity-70 max-w-sm">{t("site.tagline")}</p>
          </div>
          <div className="text-sm space-y-2">
            <div className="number-marker opacity-60 mb-2">Read</div>
            <Link to="/about" className="block hover:underline">{t("nav.about")}</Link>
            <Link to="/blog" className="block hover:underline">{t("nav.blog")}</Link>
            <Link to="/knowledge" className="block hover:underline">{t("nav.knowledge")}</Link>
          </div>
          <div className="text-sm space-y-2">
            <div className="number-marker opacity-60 mb-2">Act</div>
            <Link to="/events" className="block hover:underline">{t("nav.events")}</Link>
            <Link to="/join" className="block hover:underline">{t("nav.join")}</Link>
            <Link to="/refer" className="block hover:underline">{t("nav.refer")}</Link>
          </div>
        </div>
        <div className="editorial-rule border-paper/20 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-60">
          <div>© {new Date().getFullYear()} Women & AI. {t("footer.rights")}</div>
          <div>{t("footer.tag")}</div>
        </div>
      </div>
    </footer>
  );
}
