import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/Page";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";
import { Copy, Mail, Award } from "lucide-react";

export const Route = createFileRoute("/refer")({
  head: () => ({
    meta: [
      { title: "Refer a friend — Women and AI" },
      { name: "description", content: "Invite your friends and grow the Women and AI community." },
      { property: "og:title", content: "Refer a friend — Women and AI" },
      { property: "og:description", content: "Invite your friends and grow the Women and AI community." },
    ],
  }),
  component: Refer,
});

function Refer() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const link = "https://womenandai.hu/?ref=anna2026";

  return (
    <Page>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker">{t("refer.kicker")}</div>
          <h1 className="display text-5xl md:text-7xl mt-4 max-w-4xl">{t("refer.title")}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("refer.lead")}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-10">
            <div>
              <div className="number-marker text-muted-foreground mb-3">{t("refer.link")}</div>
              <div className="flex items-stretch border border-ink">
                <input
                  readOnly
                  value={link}
                  className="flex-1 px-4 py-3 bg-transparent font-mono text-sm outline-none"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(link);
                    toast.success(t("refer.copied"));
                  }}
                  className="bg-ink text-paper px-5 inline-flex items-center gap-2 text-sm hover:bg-primary"
                >
                  <Copy size={14} /> {t("refer.copy")}
                </button>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                toast.success(t("refer.sent"));
                setEmail("");
              }}
            >
              <div className="number-marker text-muted-foreground mb-3">{t("refer.email.title")}</div>
              <div className="flex items-stretch border border-ink">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("refer.email.placeholder")}
                  className="flex-1 px-4 py-3 bg-transparent outline-none"
                />
                <button
                  type="submit"
                  className="bg-ink text-paper px-5 inline-flex items-center gap-2 text-sm hover:bg-primary"
                >
                  <Mail size={14} /> {t("refer.send")}
                </button>
              </div>
            </form>
          </div>

          <aside className="md:col-span-5 border border-rule p-8 bg-secondary">
            <Award className="text-primary" size={36} />
            <div className="display text-2xl mt-4">Founding Member</div>
            <p className="mt-3 text-muted-foreground">{t("refer.reward")}</p>
            <div className="grid grid-cols-3 gap-2 mt-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square border border-rule bg-paper flex items-center justify-center">
                  <span className="display-italic text-3xl text-muted-foreground/40">{i}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </Page>
  );
}
