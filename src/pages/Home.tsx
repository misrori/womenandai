import { Link } from "react-router-dom";
import { Page } from "@/components/Page";
import { useI18n } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

export function Home() {
  const { t } = useI18n();

  return (
    <Page>
      <title>Women and AI</title>
      <meta name="description" content="A bilingual website empowering Hungarian women in AI, offering learning resources, events, and community connection." />
      {/* HERO — editorial masthead */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 lg:py-16">
          <div className="flex items-center justify-between number-marker">
            <span>{t("home.kicker")}</span>
            <span className="hidden md:block">Budapest · Online</span>
          </div>
          <h1 className="display text-[12vw] md:text-[9vw] lg:text-[8.5rem] mt-6 leading-[0.85]">
            {t("home.title.a")}
            <span className="display-italic"> {t("home.title.b")} </span>
            <span className="text-primary">{t("home.title.c")}</span>{" "}
            {t("home.title.d")}
          </h1>

          <div className="grid md:grid-cols-12 gap-8 mt-10">
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl leading-relaxed">{t("home.lead")}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm hover:bg-primary transition-colors"
                >
                  {t("home.cta.join")} <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-paper transition-colors"
                >
                  {t("home.cta.events")} <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <aside className="md:col-span-4 md:col-start-9 border-l border-rule pl-6 space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="display text-5xl text-primary">{t(`home.stat.${i}.k`)}</div>
                  <div className="text-sm text-muted-foreground mt-1">{t(`home.stat.${i}.v`)}</div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* CONTENTS / table-of-contents style */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker mb-10">{t("home.sections.title")}</div>
          <div className="divide-y divide-rule">
            {[
              { num: "01", to: "/about", label: t("home.sections.about") },
              { num: "02", to: "/events", label: t("home.sections.events") },
              { num: "03", to: "/blog", label: t("home.sections.journal") },
              { num: "04", to: "/knowledge", label: t("home.sections.knowledge") },
            ].map((s) => (
              <Link
                key={s.num}
                to={s.to}
                className="group flex items-center gap-6 md:gap-12 py-6 hover:pl-4 transition-all"
              >
                <span className="number-marker text-muted-foreground">{s.num}</span>
                <span className="display text-2xl md:text-4xl flex-1">{s.label}</span>
                <ArrowUpRight className="opacity-30 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — pull-quote columns */}
      <section>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker mb-10">{t("home.testimonials")}</div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[1, 2, 3].map((i) => (
              <figure key={i} className="border-t border-rule pt-6">
                <blockquote className="display-italic text-2xl leading-snug">
                  "{t(`home.t${i}`)}"
                </blockquote>
                <figcaption className="number-marker text-muted-foreground mt-6">
                  — {t(`home.t${i}.name`)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
