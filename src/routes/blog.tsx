import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useI18n } from "@/lib/i18n";
import { posts } from "@/lib/content";
import { format, parseISO } from "date-fns";
import { hu as huLocale, enUS } from "date-fns/locale";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Journal — Women and AI" },
      { name: "description", content: "Practical, beginner-friendly essays on AI for everyday life and work." },
      { property: "og:title", content: "The Journal — Women and AI" },
      { property: "og:description", content: "Practical, beginner-friendly essays on AI for everyday life and work." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const { t, lang } = useI18n();
  const locale = lang === "hu" ? huLocale : enUS;
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Page>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker">{t("blog.kicker")}</div>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl mt-4">{t("blog.title")}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("blog.lead")}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
          <div className="divide-y divide-rule border-t border-rule">
            {sorted.map((p, idx) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block py-10 grid md:grid-cols-12 gap-6 hover:pl-4 transition-all"
              >
                <div className="md:col-span-2 number-marker text-muted-foreground">
                  №{String(sorted.length - idx).padStart(2, "0")} · {format(parseISO(p.date), "PP", { locale })}
                </div>
                <div className="md:col-span-8">
                  <h2 className="display text-3xl md:text-5xl leading-tight group-hover:text-primary transition-colors">
                    {p.title[lang]}
                  </h2>
                  <p className="mt-3 text-muted-foreground text-lg max-w-2xl">{p.summary[lang]}</p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-start">
                  <span className="inline-flex items-center gap-1 number-marker">
                    {p.readMinutes} min <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
