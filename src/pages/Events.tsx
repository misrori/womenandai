import { useMemo, useState } from "react";
import { Page } from "@/components/Page";
import { useI18n } from "@/lib/i18n";
import { events } from "@/lib/content";
import { Calendar } from "@/components/ui/calendar";
import { format, isSameDay, parseISO, isAfter, startOfToday } from "date-fns";
import { hu as huLocale, enUS } from "date-fns/locale";

export function Events() {
  const { t, lang } = useI18n();
  const [view, setView] = useState<"list" | "calendar">("list");
  const [selected, setSelected] = useState<Date | undefined>(undefined);

  const today = startOfToday();
  const upcoming = useMemo(
    () => events.filter((e) => isAfter(parseISO(e.date), today) || isSameDay(parseISO(e.date), today)).sort((a, b) => a.date.localeCompare(b.date)),
    [today]
  );
  const past = useMemo(
    () => events.filter((e) => !isAfter(parseISO(e.date), today) && !isSameDay(parseISO(e.date), today)).sort((a, b) => b.date.localeCompare(a.date)),
    [today]
  );

  const eventDates = events.map((e) => parseISO(e.date));
  const selectedEvents = selected ? events.filter((e) => isSameDay(parseISO(e.date), selected)) : [];
  const locale = lang === "hu" ? huLocale : enUS;

  return (
    <Page>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
          <div className="number-marker">{t("events.kicker")}</div>
          <h1 className="display text-5xl md:text-7xl mt-4">{t("events.title")}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t("events.lead")}</p>

          <div className="mt-10 inline-flex border border-ink">
            {(["list", "calendar"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-5 py-2 text-sm number-marker ${view === v ? "bg-ink text-paper" : "hover:bg-secondary"}`}
              >
                {t(`events.tab.${v}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
          {view === "list" ? (
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-3 number-marker text-muted-foreground">{t("events.upcoming")}</div>
              <div className="md:col-span-9 divide-y divide-rule border-t border-rule">
                {upcoming.length === 0 && <div className="py-8 text-muted-foreground">—</div>}
                {upcoming.map((e) => (
                  <EventRow key={e.id} ev={e} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-6">
                <Calendar
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  locale={locale}
                  modifiers={{ hasEvent: eventDates }}
                  modifiersClassNames={{
                    hasEvent: "relative font-bold text-primary after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-primary",
                  }}
                  className="p-4 border border-rule pointer-events-auto"
                />
              </div>
              <div className="md:col-span-6">
                <div className="number-marker text-muted-foreground mb-4">
                  {t("events.selected")}: {selected ? format(selected, "PPP", { locale }) : "—"}
                </div>
                {selected && selectedEvents.length === 0 && (
                  <div className="text-muted-foreground border-t border-rule pt-6">{t("events.none")}</div>
                )}
                <div className="divide-y divide-rule">
                  {selectedEvents.map((e) => <EventRow key={e.id} ev={e} compact />)}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-3 number-marker text-muted-foreground">{t("events.past")}</div>
              <div className="md:col-span-9 divide-y divide-rule border-t border-rule">
                {past.map((e) => <EventRow key={e.id} ev={e} muted />)}
              </div>
            </div>
          </div>
        </section>
      )}
    </Page>
  );
}

function EventRow({
  ev,
  compact = false,
  muted = false,
}: {
  ev: typeof events[number];
  compact?: boolean;
  muted?: boolean;
}) {
  const { t, lang } = useI18n();
  const locale = lang === "hu" ? huLocale : enUS;
  const date = parseISO(ev.date);
  return (
    <article className={`py-6 grid md:grid-cols-12 gap-4 ${muted ? "opacity-60" : ""}`}>
      <div className="md:col-span-3">
        <div className="display text-3xl">{format(date, "dd")}</div>
        <div className="number-marker text-muted-foreground">
          {format(date, "MMM yyyy", { locale })} · {ev.time}
        </div>
      </div>
      <div className="md:col-span-7">
        <h3 className="display text-2xl">{ev.title[lang]}</h3>
        {!compact && <p className="mt-2 text-muted-foreground">{ev.description[lang]}</p>}
        <div className="number-marker text-muted-foreground mt-3">{ev.location[lang]}</div>
      </div>
      <div className="md:col-span-2 flex md:justify-end items-start">
        {!muted && (
          <button
            onClick={() => alert(`${ev.title[lang]} — ${t("events.register")}`)}
            className="inline-flex items-center border border-ink px-4 py-2 text-sm hover:bg-ink hover:text-paper transition-colors"
          >
            {t("events.register")}
          </button>
        )}
      </div>
    </article>
  );
}
