import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useI18n } from "@/lib/i18n";
import { posts } from "@/lib/content";
import { format, parseISO } from "date-fns";
import { hu as huLocale, enUS } from "date-fns/locale";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Essay — Women and AI" }] };
    return {
      meta: [
        { title: `${post.title.en} — Women and AI` },
        { name: "description", content: post.summary.en },
        { property: "og:title", content: post.title.en },
        { property: "og:description", content: post.summary.en },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <Page>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <div className="number-marker">404</div>
        <h1 className="display text-6xl mt-3">Essay not found.</h1>
        <Link to="/blog" className="mt-8 inline-block underline">Back to the Journal</Link>
      </div>
    </Page>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  const { t, lang } = useI18n();
  const locale = lang === "hu" ? huLocale : enUS;

  return (
    <Page>
      <article>
        <header className="border-b border-rule">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10 py-12">
            <Link to="/blog" className="inline-flex items-center gap-2 number-marker text-muted-foreground hover:text-ink">
              <ArrowLeft size={14} /> {t("blog.back")}
            </Link>
            <div className="number-marker text-muted-foreground mt-8">
              {t("blog.published")} · {format(parseISO(post.date), "PPP", { locale })} · {post.readMinutes} min
            </div>
            <h1 className="display text-4xl md:text-6xl lg:text-7xl mt-4 leading-[0.95]">
              {post.title[lang]}
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-snug max-w-3xl">
              {post.summary[lang]}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[760px] px-6 lg:px-10 py-16">
          <Prose body={post.body[lang]} />
        </div>

        <div className="mx-auto max-w-[760px] px-6 lg:px-10 pb-24">
          <div className="border-t border-rule pt-8 flex justify-between number-marker text-muted-foreground">
            <Link to="/blog" className="hover:text-ink">← {t("blog.back")}</Link>
            <Link to="/join" className="hover:text-ink">{t("home.cta.join")} →</Link>
          </div>
        </div>
      </article>
    </Page>
  );
}

function Prose({ body }: { body: string }) {
  const blocks = body.split("\n\n");
  return (
    <div className="space-y-6 text-lg leading-relaxed [&>h2]:display [&>h2]:text-3xl [&>h2]:mt-12 [&>h2]:mb-2">
      {blocks.map((b, i) => {
        if (b.startsWith("## ")) return <h2 key={i}>{b.slice(3)}</h2>;
        return <p key={i}>{b}</p>;
      })}
    </div>
  );
}
