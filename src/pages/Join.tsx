import { useState } from "react";
import { Page } from "@/components/Page";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";

export function Join() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", level: "beginner" });

  return (
    <Page>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker">{t("join.kicker")}</div>
          <h1 className="display text-5xl md:text-7xl mt-4 max-w-4xl">{t("join.title")}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("join.lead")}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-6">
            <div className="display-italic text-3xl text-primary leading-snug">
              "The room I needed didn't exist. So we built it — and you're invited."
            </div>
            <div className="number-marker text-muted-foreground">— The founders</div>
          </div>

          <form
            className="md:col-span-7 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (!form.name || !form.email) return;
              toast.success(t("join.success"));
              setForm({ name: "", email: "", level: "beginner" });
            }}
          >
            <Field label={t("join.name")}>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-ink py-3 outline-none focus:border-primary text-lg"
              />
            </Field>
            <Field label={t("join.email")}>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-ink py-3 outline-none focus:border-primary text-lg"
              />
            </Field>
            <Field label={t("join.level")}>
              <select
                value={form.level}
                onChange={(e) => setForm({ ...form, level: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-ink py-3 outline-none focus:border-primary text-lg"
              >
                <option value="beginner">{t("join.level.beginner")}</option>
                <option value="intermediate">{t("join.level.intermediate")}</option>
                <option value="advanced">{t("join.level.advanced")}</option>
              </select>
            </Field>
            <button
              type="submit"
              className="mt-6 inline-flex items-center bg-ink text-paper px-8 py-4 text-sm hover:bg-primary transition-colors"
            >
              {t("join.submit")}
            </button>
          </form>
        </div>
      </section>
    </Page>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="number-marker text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
