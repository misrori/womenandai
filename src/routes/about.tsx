import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Women and AI" },
      { name: "description", content: "Why Women and AI exists, and the research behind closing the gender gap in AI." },
      { property: "og:title", content: "About — Women and AI" },
      { property: "og:description", content: "Why Women and AI exists, and the research behind closing the gender gap in AI." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  return (
    <Page>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker">{t("about.kicker")}</div>
          <h1 className="display text-5xl md:text-7xl lg:text-8xl mt-4 max-w-5xl">
            {t("about.title")}
          </h1>
          <p className="mt-8 text-xl md:text-2xl max-w-3xl leading-snug">{t("about.lead")}</p>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3 number-marker text-muted-foreground">
            §01 — The gap
          </div>
          <div className="md:col-span-9 space-y-6 text-lg leading-relaxed">
            <p className="display-italic text-3xl text-primary leading-tight">
              {t("about.body.1")}
            </p>
            <p>{t("about.body.2")}</p>
            <p>{t("about.body.3")}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker mb-10">{t("about.values.title")}</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-paper p-8">
                <div className="number-marker text-primary">0{i}</div>
                <h3 className="display text-3xl mt-4">{t(`about.v${i}.t`)}</h3>
                <p className="mt-3 text-muted-foreground">{t(`about.v${i}.b`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
