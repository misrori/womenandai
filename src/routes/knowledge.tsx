import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useI18n } from "@/lib/i18n";
import { resources } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub — Women and AI" },
      { name: "description", content: "Curated guides, AI tools, and learning paths for every level." },
      { property: "og:title", content: "Knowledge Hub — Women and AI" },
      { property: "og:description", content: "Curated guides, AI tools, and learning paths for every level." },
    ],
  }),
  component: Knowledge,
});

function Knowledge() {
  const { t, lang } = useI18n();
  const cats = ["guides", "tools", "paths"] as const;

  return (
    <Page>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker">{t("knowledge.kicker")}</div>
          <h1 className="display text-5xl md:text-7xl mt-4">{t("knowledge.title")}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("knowledge.lead")}</p>
        </div>
      </section>

      {cats.map((cat, ci) => {
        const items = resources.filter((r) => r.category === cat);
        return (
          <section key={cat} className="border-b border-rule">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <div className="number-marker text-muted-foreground">§0{ci + 1}</div>
                <h2 className="display text-3xl mt-2">{t(`knowledge.cat.${cat}`)}</h2>
              </div>
              <div className="md:col-span-9 divide-y divide-rule border-t border-rule">
                {items.map((r) => (
                  <a
                    key={r.title.en}
                    href={r.url}
                    target={r.url.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-6 py-5 hover:pl-3 transition-all"
                  >
                    <div className="flex-1">
                      <div className="display text-xl">{r.title[lang]}</div>
                      <div className="text-sm text-muted-foreground">{r.description[lang]}</div>
                    </div>
                    <span className="number-marker inline-flex items-center gap-1 group-hover:text-primary">
                      {t("knowledge.visit")} <ArrowUpRight size={14} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </Page>
  );
}
