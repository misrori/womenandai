import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hu";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.events": "Events",
  "nav.blog": "Journal",
  "nav.knowledge": "Knowledge",
  "nav.refer": "Refer",
  "nav.join": "Join",

  "site.tagline": "A Hungarian community for women in AI",

  "home.kicker": "Issue 01 — Manifesto",
  "home.title.a": "Empowering",
  "home.title.b": "Women",
  "home.title.c": "with AI",
  "home.title.d": "Skills",
  "home.lead":
    "Women remain underrepresented in artificial intelligence. We are a Hungarian community building the rooms, the role models, and the rigour to change that — one workshop, one essay, one conversation at a time.",
  "home.cta.join": "Join the community",
  "home.cta.events": "See events",
  "home.stat.1.k": "23%",
  "home.stat.1.v": "of AI professionals globally are women",
  "home.stat.2.k": "5x",
  "home.stat.2.v": "fewer female founders in AI startups",
  "home.stat.3.k": "1",
  "home.stat.3.v": "growing community closing the gap, in Budapest and online",

  "home.sections.title": "Inside this issue",
  "home.sections.about": "About the community — who we are and why we exist",
  "home.sections.events": "Upcoming events — meetups, workshops, study circles",
  "home.sections.journal": "The Journal — essays on AI for everyday life",
  "home.sections.knowledge": "Knowledge hub — guides, tools, learning paths",

  "home.testimonials": "Voices from the community",
  "home.t1": "I joined as a complete beginner. Three months later I'm automating reports at work with ChatGPT.",
  "home.t1.name": "Eszter K., marketing lead",
  "home.t2": "Finally a space where my questions aren't 'too basic'. The role models here are real.",
  "home.t2.name": "Réka M., data analyst",
  "home.t3": "The study circle gave me the confidence to switch into an AI product role.",
  "home.t3.name": "Anna T., PM",

  "about.kicker": "About",
  "about.title": "Why a community of women in AI?",
  "about.lead":
    "Women and AI is a Hungarian community for women — beginners and professionals — who want to learn, build with, and shape artificial intelligence.",
  "about.body.1":
    "Less than a quarter of professionals in AI are women. The gap is not about ability. It is about the slow accumulation of small frictions: stereotypes that begin in school, fewer visible role models, a confidence gap reinforced by male-coded jargon, and unequal access to the networks where opportunities circulate.",
  "about.body.2":
    "Research consistently identifies four forces. First, gender stereotypes in STEM steer girls away from technical paths. Second, a lack of visible role models makes the field feel foreign. Third, a documented confidence gap — women apply only when they meet most criteria, men when they meet some. Fourth, unequal access to mentorship, capital, and informal networks.",
  "about.body.3":
    "We address all four. We host beginner-friendly workshops. We feature Hungarian women already shipping AI work. We practise out loud, together, so the confidence comes from doing. And we open our network — to you, and to the friend you bring.",
  "about.values.title": "What we stand for",
  "about.v1.t": "Practical",
  "about.v1.b": "Skills you can use on Monday morning, not abstract theory.",
  "about.v2.t": "Inclusive",
  "about.v2.b": "Beginner questions are the most important questions.",
  "about.v3.t": "Rigorous",
  "about.v3.b": "We take AI seriously — its power and its risks.",
  "about.v4.t": "Hungarian",
  "about.v4.b": "Built here, in our language, for our context.",

  "events.kicker": "Events",
  "events.title": "Workshops, meetups, study circles",
  "events.lead": "Two ways to browse: the list, or the calendar.",
  "events.tab.list": "List",
  "events.tab.calendar": "Calendar",
  "events.upcoming": "Upcoming",
  "events.past": "Past events",
  "events.register": "Register",
  "events.none": "No event on this date.",
  "events.selected": "Selected date",

  "blog.kicker": "The Journal",
  "blog.title": "Essays on AI for everyday life",
  "blog.lead": "Practical, beginner-friendly writing from the community.",
  "blog.read": "Read essay",
  "blog.back": "Back to the Journal",
  "blog.published": "Published",

  "knowledge.kicker": "Knowledge",
  "knowledge.title": "A hub for learning AI",
  "knowledge.lead": "Curated guides, tools, and learning paths — sorted by where you are.",
  "knowledge.cat.guides": "Beginner guides",
  "knowledge.cat.tools": "AI tools",
  "knowledge.cat.paths": "Learning paths",
  "knowledge.visit": "Open",

  "refer.kicker": "Referral",
  "refer.title": "Invite your friends and grow the community",
  "refer.lead":
    "The community grows by trust. Send your personal link to a friend — when she joins, you both get a digital badge and an invite to the next mentor circle.",
  "refer.link": "Your invite link",
  "refer.copy": "Copy link",
  "refer.copied": "Link copied",
  "refer.email.title": "Or send by email",
  "refer.email.placeholder": "friend@example.com",
  "refer.send": "Send invite",
  "refer.sent": "Invite sent",
  "refer.reward": "Earn a Founding Member badge after 3 friends join.",

  "join.kicker": "Join",
  "join.title": "Join the Women and AI Community",
  "join.lead": "Tell us a little about yourself. We'll send the next event invite to your inbox.",
  "join.name": "Name",
  "join.email": "Email",
  "join.level": "Experience level",
  "join.level.beginner": "Beginner — curious, just starting",
  "join.level.intermediate": "Intermediate — using AI tools regularly",
  "join.level.advanced": "Advanced — building or shipping AI",
  "join.submit": "Join the Community",
  "join.success": "Welcome — check your inbox.",

  "footer.tag": "A community publication.",
  "footer.rights": "All rights reserved.",
};

const hu: Dict = {
  "nav.home": "Főoldal",
  "nav.about": "Rólunk",
  "nav.events": "Események",
  "nav.blog": "Magazin",
  "nav.knowledge": "Tudástár",
  "nav.refer": "Ajánlás",
  "nav.join": "Csatlakozz",

  "site.tagline": "Magyar közösség az AI-ban dolgozó és tanuló nőkért",

  "home.kicker": "01. szám — Kiáltvány",
  "home.title.a": "Nők",
  "home.title.b": "támogatása",
  "home.title.c": "AI",
  "home.title.d": "készségekkel",
  "home.lead":
    "A nők alulreprezentáltak a mesterséges intelligenciában. Magyar közösségként építjük azokat a tereket, példaképeket és tudást, amelyek ezen változtatnak — egy workshop, egy esszé, egy beszélgetés a másik után.",
  "home.cta.join": "Csatlakozom",
  "home.cta.events": "Események",
  "home.stat.1.k": "23%",
  "home.stat.1.v": "az AI szakemberek aránya, akik nők, globálisan",
  "home.stat.2.k": "5x",
  "home.stat.2.v": "kevesebb női alapító az AI startupokban",
  "home.stat.3.k": "1",
  "home.stat.3.v": "növekvő közösség, amely ezt a szakadékot szűkíti — Budapesten és online",

  "home.sections.title": "Ebben a számban",
  "home.sections.about": "A közösségről — kik vagyunk és miért létezünk",
  "home.sections.events": "Közelgő események — meetupok, workshopok, tanulókörök",
  "home.sections.journal": "A Magazin — esszék az AI-ról a hétköznapokra",
  "home.sections.knowledge": "Tudástár — útmutatók, eszközök, tanulási utak",

  "home.testimonials": "Hangok a közösségből",
  "home.t1": "Teljes kezdőként csatlakoztam. Három hónap múlva ChatGPT-vel automatizálom a riportjaimat.",
  "home.t1.name": "Eszter K., marketing vezető",
  "home.t2": "Végre egy hely, ahol egyetlen kérdésem sem „túl alap”. Itt valós példaképek vannak.",
  "home.t2.name": "Réka M., adatelemző",
  "home.t3": "A tanulókör adta meg a bátorságot, hogy AI-os termékmenedzser legyek.",
  "home.t3.name": "Anna T., PM",

  "about.kicker": "Rólunk",
  "about.title": "Miért közösség a nőknek az AI-ban?",
  "about.lead":
    "A Women and AI egy magyar közösség nőknek — kezdőknek és profiknak —, akik tanulni, építeni és alakítani szeretnék a mesterséges intelligenciát.",
  "about.body.1":
    "Az AI szakemberek kevesebb mint negyede nő. A szakadék nem a képességekről szól. Apró súrlódások halmozódnak: az iskolában kezdődő sztereotípiák, a kevés látható példakép, a férfias szakzsargon által erősített önbizalomhiány, és az egyenlőtlen hozzáférés azokhoz a hálózatokhoz, ahol a lehetőségek mozognak.",
  "about.body.2":
    "A kutatások négy okot azonosítanak. Először: a STEM-ben élő nemi sztereotípiák elterelik a lányokat a technikai pályákról. Másodszor: a látható példaképek hiánya idegennek mutatja a területet. Harmadszor: a dokumentált önbizalom-szakadék — a nők akkor jelentkeznek, ha a kritériumok nagy részét teljesítik, a férfiak már néhánynál is. Negyedszer: egyenlőtlen hozzáférés a mentoráláshoz, tőkéhez és informális hálózatokhoz.",
  "about.body.3":
    "Mind a négyre válaszolunk. Kezdőbarát workshopokat tartunk. Bemutatjuk azokat a magyar nőket, akik már AI-jal dolgoznak. Hangosan, együtt gyakorlunk, hogy az önbizalom a cselekvésből jöjjön. És megnyitjuk a hálózatunkat — neked és a barátnődnek is.",
  "about.values.title": "Amiben hiszünk",
  "about.v1.t": "Gyakorlati",
  "about.v1.b": "Hétfő reggel használható tudás, nem absztrakt elmélet.",
  "about.v2.t": "Befogadó",
  "about.v2.b": "A kezdő kérdések a legfontosabb kérdések.",
  "about.v3.t": "Igényes",
  "about.v3.b": "Komolyan vesszük az AI-t — az erejét és a kockázatait is.",
  "about.v4.t": "Magyar",
  "about.v4.b": "Itt épül, a mi nyelvünkön, a mi kontextusunkban.",

  "events.kicker": "Események",
  "events.title": "Workshopok, meetupok, tanulókörök",
  "events.lead": "Két nézet: lista vagy naptár.",
  "events.tab.list": "Lista",
  "events.tab.calendar": "Naptár",
  "events.upcoming": "Közelgő",
  "events.past": "Korábbi események",
  "events.register": "Regisztráció",
  "events.none": "Ezen a napon nincs esemény.",
  "events.selected": "Kiválasztott dátum",

  "blog.kicker": "A Magazin",
  "blog.title": "Esszék az AI-ról a hétköznapokra",
  "blog.lead": "Gyakorlati, kezdőbarát írások a közösségből.",
  "blog.read": "Esszé olvasása",
  "blog.back": "Vissza a Magazinhoz",
  "blog.published": "Megjelent",

  "knowledge.kicker": "Tudás",
  "knowledge.title": "Tudástár az AI tanulásához",
  "knowledge.lead": "Válogatott útmutatók, eszközök és tanulási utak — aszerint, hol tartasz.",
  "knowledge.cat.guides": "Kezdő útmutatók",
  "knowledge.cat.tools": "AI eszközök",
  "knowledge.cat.paths": "Tanulási utak",
  "knowledge.visit": "Megnyitás",

  "refer.kicker": "Ajánlás",
  "refer.title": "Hívd a barátaidat, építsük együtt a közösséget",
  "refer.lead":
    "A közösség bizalomból nő. Küldd el a személyes linkedet egy barátnődnek — ha csatlakozik, mindketten kaptok egy digitális kitűzőt és meghívót a következő mentorkörre.",
  "refer.link": "A meghívó linked",
  "refer.copy": "Link másolása",
  "refer.copied": "Link másolva",
  "refer.email.title": "Vagy küldd e-mailben",
  "refer.email.placeholder": "barat@example.com",
  "refer.send": "Meghívó küldése",
  "refer.sent": "Meghívó elküldve",
  "refer.reward": "Szerezd meg az Alapító Tag jelvényt 3 csatlakozott barát után.",

  "join.kicker": "Csatlakozz",
  "join.title": "Csatlakozz a Women and AI Közösséghez",
  "join.lead": "Mesélj egy kicsit magadról. Elküldjük a következő meghívót a postaládádba.",
  "join.name": "Név",
  "join.email": "E-mail",
  "join.level": "Tapasztalati szint",
  "join.level.beginner": "Kezdő — kíváncsi, most ismerkedik",
  "join.level.intermediate": "Középhaladó — rendszeresen használ AI eszközöket",
  "join.level.advanced": "Haladó — épít vagy szállít AI megoldást",
  "join.submit": "Csatlakozom a Közösséghez",
  "join.success": "Üdv a fedélzeten — nézd meg a postaládádat.",

  "footer.tag": "Közösségi kiadvány.",
  "footer.rights": "Minden jog fenntartva.",
};

const dicts: Record<Lang, Dict> = { en, hu };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "hu") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dicts[lang][k] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
