import type { Lang } from "./i18n";

export type LocalizedString = Record<Lang, string>;

export type BlogPost = {
  slug: string;
  date: string; // ISO
  title: LocalizedString;
  summary: LocalizedString;
  body: LocalizedString; // markdown-lite: paragraphs separated by \n\n, "## " for h2
  readMinutes: number;
};

export const posts: BlogPost[] = [
  {
    slug: "ai-in-everyday-life",
    date: "2026-04-02",
    readMinutes: 6,
    title: {
      en: "AI in everyday life: small wins that add up",
      hu: "AI a hétköznapokban: kis győzelmek, amik összeadódnak",
    },
    summary: {
      en: "Forget science fiction. The most useful AI of 2026 is the one that quietly removes friction from your week.",
      hu: "Felejtsd el a sci-fit. A 2026-os AI legjobb használata az, ami csendben tűnteti el a heted súrlódásait.",
    },
    body: {
      en: `When people imagine AI, they picture humanoid robots. The honest truth is more boring — and more useful. AI in 2026 is the assistant that drafts the email you've been avoiding, the camera that finds the photo of your daughter on the swing without you scrolling for ten minutes, the calendar that proposes a time you both can meet.

## Three small wins to try this week

First, dictate instead of type. On any modern phone, the microphone button on the keyboard now transcribes you in Hungarian with near-perfect accuracy. A two-minute voice note becomes a structured email in seconds.

Second, use a chatbot as your patient explainer. Paste a contract, an insurance letter, or a school notice and ask: "Explain this to me in simple Hungarian, and tell me what I should pay attention to." It will not replace a lawyer, but it will sharpen the questions you ask one.

Third, batch your decisions. Once a week, open a chatbot and dump the small things — meal plan, gift ideas, packing list, week-ahead schedule. Treat it as a thinking partner, not an oracle.

## Why this matters

Every minute AI saves you is a minute you keep. Multiply that by a year and the compounding is real. The goal is not to become a power user overnight — it is to find one tool that earns its place in your week, then add another.`,
      hu: `Amikor az emberek az AI-ra gondolnak, humanoid robotokat képzelnek el. Az igazság prózaibb — és hasznosabb. A 2026-os AI az az asszisztens, aki megírja az e-mailt, amit halogatsz, a kamera, ami megtalálja a hintázó kislányod fotóját anélkül, hogy tíz percig görgetnél, a naptár, ami időpontot javasol.

## Három kis győzelem erre a hétre

Először: diktálj gépelés helyett. Minden modern telefon billentyűzetén a mikrofon gomb ma már szinte tökéletesen leírja a magyar beszédet. Egy két perces hangjegyzet másodpercek alatt strukturált e-maillé válik.

Másodszor: használd a chatbotot türelmes magyarázóként. Másolj be egy szerződést, biztosítási levelet vagy iskolai értesítőt, és kérdezd meg: „Magyarázd el egyszerű magyar nyelven, és mondd meg, mire figyeljek.” Nem helyettesít ügyvédet, de élesíti a kérdéseidet.

## Miért számít ez

Minden percet, amit az AI megspórol neked, megtartasz. Szorozd be egy évvel, és a hatás valós. A cél nem az, hogy egyik napról a másikra szakértő legyél — hanem hogy találj egy eszközt, ami megérdemli a helyét a hetedben, aztán egy következőt.`,
    },
  },
  {
    slug: "chatgpt-for-productivity",
    date: "2026-03-20",
    readMinutes: 8,
    title: {
      en: "ChatGPT for productivity: the prompts I use every day",
      hu: "ChatGPT a produktivitásért: a promptok, amiket naponta használok",
    },
    summary: {
      en: "Six prompt patterns that turn a chat window into a thinking partner, an editor, and a project manager.",
      hu: "Hat prompt-minta, amelyek a chat ablakot gondolkodó partnerré, szerkesztővé és projektmenedzserré teszik.",
    },
    body: {
      en: `A blank chat window is intimidating. The trick is to keep a small library of prompts you trust, and adapt them.

## 1. The editor

"Edit this text for clarity. Do not change the meaning. Suggest two stronger opening lines."

## 2. The thinking partner

"I'm trying to decide between X and Y. Give me three arguments for each. Then ask me one question that would change your recommendation."

## 3. The summariser

"Summarise this in five bullets, then in one sentence a child would understand."

## 4. The project breakdown

"Here is a goal. Break it into the smallest meaningful next step I could do today in 20 minutes."

## 5. The translator-with-context

"Translate to Hungarian. Use professional but warm tone, the kind I would use with a colleague I respect."

## 6. The pre-mortem

"What is most likely to go wrong with this plan? List five risks, ranked."

Save these. Adapt them. The pattern matters more than the exact words.`,
      hu: `Egy üres chat ablak ijesztő. A trükk: tarts egy kis prompt-könyvtárat, amelyben bízol, és igazítsd a helyzethez.

## 1. A szerkesztő

„Szerkeszd ezt a szöveget az érthetőség kedvéért. Ne változtasd meg az értelmét. Javasolj két erősebb nyitómondatot.”

## 2. A gondolkodó partner

„X és Y között döntök. Adj három érvet mindkettő mellett. Aztán tegyél fel egy kérdést, ami megváltoztatná az ajánlásodat.”

## 3. Az összefoglaló

„Foglald össze öt pontban, majd egy mondatban, amit egy gyerek is megért.”

## 4. A projektbontás

„Itt egy cél. Bontsd a legkisebb értelmes következő lépésre, amit ma 20 perc alatt megtehetek.”

## 5. A kontextusos fordító

„Fordítsd magyarra. Profi, de meleg hang, ahogy egy tisztelt kollégával beszélnék.”

## 6. A pre-mortem

„Mi mehet legnagyobb valószínűséggel rosszul ebben a tervben? Sorolj fel öt kockázatot, rangsorolva.”

Mentsd el. Igazítsd. A minta fontosabb, mint a pontos szavak.`,
    },
  },
  {
    slug: "ai-in-education",
    date: "2026-03-08",
    readMinutes: 7,
    title: {
      en: "AI in education: tutor, not crutch",
      hu: "AI az oktatásban: korrepetitor, nem mankó",
    },
    summary: {
      en: "How parents and learners can use AI to deepen understanding instead of skipping it.",
      hu: "Hogyan használhatják a szülők és a tanulók az AI-t a megértés mélyítésére a kihagyása helyett.",
    },
    body: {
      en: `The fear is reasonable: a student who asks a chatbot to write the essay learns nothing. But the same tool, used differently, becomes the patient tutor most schools cannot afford.

## Three rules for learners

Ask it to explain, not to write. "Explain why the Hungarian Revolution of 1956 happened, as if I'm 14."

Ask it to quiz you. "Give me ten questions on this chapter, then mark my answers and explain each one I got wrong."

Ask it to find your blind spot. "Here is my essay. Don't rewrite it. Tell me what I'm missing."

## For parents

Sit with your child for ten minutes. Show them the difference between "do my homework" and "help me understand my homework." That conversation matters more than any school AI policy.`,
      hu: `A félelem érthető: a diák, aki megíratja a chatbottal a fogalmazást, semmit sem tanul. De ugyanaz az eszköz másképp használva azzá a türelmes korrepetitorrá válik, amit a legtöbb iskola nem engedhet meg magának.

## Három szabály a tanulóknak

Kérj magyarázatot, ne fogalmazást. „Magyarázd el, miért tört ki az 1956-os forradalom, mintha 14 éves lennék.”

Kérdeztesd magadat. „Tegyél fel tíz kérdést erről a fejezetről, majd javítsd ki a válaszaimat, és magyarázd el azt, amit elrontottam.”

Kérd meg, hogy találja meg a vakfoltodat. „Itt a fogalmazásom. Ne írd át. Mondd meg, mi hiányzik.”

## Szülőknek

Ülj le tíz percre a gyermekeddel. Mutasd meg neki a különbséget a „csináld meg a leckémet” és a „segíts megérteni a leckémet” között. Az a beszélgetés többet ér, mint bármilyen iskolai AI-szabályzat.`,
    },
  },
  {
    slug: "ai-tools-for-beginners",
    date: "2026-02-22",
    readMinutes: 5,
    title: {
      en: "AI tools for beginners: where to actually start",
      hu: "AI eszközök kezdőknek: hol érdemes valóban elkezdeni",
    },
    summary: {
      en: "A short, opinionated map: one chat tool, one image tool, one transcription tool. That's enough.",
      hu: "Rövid, határozott térkép: egy chat eszköz, egy kép eszköz, egy átirat eszköz. Ennyi elég.",
    },
    body: {
      en: `Beginner overwhelm is real. There are thousands of "AI tools." You need three.

## A chat assistant

Pick one (ChatGPT, Claude, Gemini — they are all good enough) and use only it for a month. Mastery beats variety.

## An image generator

Use one to make slides, blog headers, or moodboards. Treat it like a stock photo library you can describe instead of search.

## A transcription tool

Whether built into your phone or a dedicated app, transcribing meetings and voice notes is the productivity unlock most people overlook.

That's it. Master these three before you add a fourth.`,
      hu: `A kezdő túlterheltség valós. Több ezer „AI eszköz” van. Háromra van szükséged.

## Egy chat asszisztens

Válassz egyet (ChatGPT, Claude, Gemini — mindegyik elég jó), és csak azt használd egy hónapig. A mélység többet ér, mint a változatosság.

## Egy képgenerátor

Használd diákhoz, blogfejlécekhez, moodboardokhoz. Tekintsd olyan stock fotó könyvtárnak, amit le tudsz írni, nem keresni.

## Egy átirat eszköz

Akár a telefonodba van építve, akár külön alkalmazás — a meetingek és hangjegyzetek átírása az a produktivitás-ugrás, amit a legtöbben kihagynak.

Ennyi. Sajátítsd el ezt a hármat, mielőtt hozzáadnál egy negyediket.`,
    },
  },
  {
    slug: "ethical-challenges-in-ai",
    date: "2026-02-05",
    readMinutes: 9,
    title: {
      en: "Ethical challenges in AI: a community reading list",
      hu: "AI etikai kihívásai: közösségi olvasmánylista",
    },
    summary: {
      en: "Bias, privacy, work, and the climate question — what every careful user should think about.",
      hu: "Elfogultság, magánélet, munka és a klímakérdés — amin minden tudatos felhasználónak gondolkodnia kell.",
    },
    body: {
      en: `If you use AI, you have a stake in how it is built. Four questions to sit with.

## Bias

AI systems learn from the past. The past is unequal. A hiring tool trained on twenty years of resumes will quietly prefer the candidates who looked like the ones who got hired before. Ask: who was in the data, and who was missing?

## Privacy

A free chatbot is rarely free. Read what the provider does with your conversations. Treat any prompt as if it could one day be public.

## Work

Some tasks will go away. Most jobs will not. The honest framing is not "will AI take my job" but "which parts of my job is AI good at, and what becomes more valuable when those parts are cheap?"

## Climate

Training large models uses energy. So does every search. The question is not to abstain — it is to use AI for the things that justify the cost, and not for the things a calculator already does.

## What we do as a community

We pick speakers who disagree. We read the people most affected, not only the people building the systems. We update our minds in public.`,
      hu: `Ha AI-t használsz, részed van abban, ahogyan épül. Négy kérdés, amin érdemes elidőzni.

## Elfogultság

Az AI rendszerek a múltból tanulnak. A múlt egyenlőtlen. Egy húsz év önéletrajzaira tanított felvételi eszköz csendben azokat fogja előnyben részesíteni, akik hasonlítanak a korábban felvettekhez. Kérdezd: ki volt az adatban, és ki hiányzott?

## Magánélet

Az ingyenes chatbot ritkán ingyenes. Olvasd el, mit csinál a szolgáltató a beszélgetéseiddel. Minden promptot úgy kezelj, mintha egy nap nyilvános lehetne.

## Munka

Néhány feladat eltűnik. A legtöbb munkahely nem. Az őszinte kérdés nem az, hogy „elveszi-e az AI a munkámat”, hanem hogy „mely részekben jó az AI, és mi válik értékesebbé, amikor azok olcsóvá válnak?”

## Klíma

A nagy modellek tanítása energiát fogyaszt. Minden keresés is. A válasz nem a tartózkodás — hanem hogy az AI-t azokra használjuk, ami megéri a költséget, és nem arra, amit egy számológép is megtesz.

## Amit közösségként teszünk

Olyan előadókat hívunk, akik vitáznak. Azokat olvassuk, akiket a leginkább érint, nem csak azokat, akik építik a rendszereket. Nyilvánosan változtatjuk a véleményünket.`,
    },
  },
  {
    slug: "databricks-mosaic-ai-for-data",
    date: "2026-04-18",
    readMinutes: 7,
    title: {
      en: "Databricks Mosaic AI: democratizing data analysis",
      hu: "Databricks Mosaic AI: az adatelemzés demokratizálása",
    },
    summary: {
      en: "How generative AI is changing data work: less SQL, more conversation.",
      hu: "Ahogy a generatív AI megváltoztatja az adatmunkát: kevesebb SQL, több beszélgetés.",
    },
    body: {
      en: `For years, data analysis was locked behind SQL and Python. Not anymore. Databricks' Mosaic AI changes the game by letting you ask questions in plain English.

## What changed

Mosaic AI lets you upload a dataset and ask questions directly. "Show me revenue trends by region" returns a chart. "What products are underperforming?" returns a ranked list. No query language needed.

For non-technical teams, this is transformative. A marketing manager can explore customer data. A operations lead can spot inefficiencies. A founder can test hypotheses without waiting for an analyst.

## How it works

The AI understands your data structure. It generates the right queries. It handles the translation from human question to database logic — the part that usually requires months of training.

## The catch

It is not magic. The quality of your data matters. The structure matters. A poorly organized dataset will still confuse even the smartest AI. But for clean, well-documented data, Mosaic AI collapses the learning curve from months to days.

## Why this matters for teams

One person can now do what took three. That person is not replaced — they shift from query-writing to asking better questions.`,
      hu: `Évekig az adatelemzés SQL és Python mögött volt zárva. Nem több. A Databricks Mosaic AI megváltoztatja a helyzetet azzal, hogy sima angolul tehetsz fel kérdéseket.

## Mi változott

A Mosaic AI lehetővé teszi, hogy feltölts egy adathalmazt, és közvetlenül kérdéseket tegyél fel. „Mutasd a bevételi trendeket régiók szerint" egy grafikont ad vissza. „Mely termékek teljesítenek rosszul?" egy rangsorolt listát ad vissza. Nincs szükség lekérdezési nyelvra.

A nem technikai csapatok számára ez átalakító. Egy marketing menedzser felfedezheti a fogyasztói adatokat. Egy operációs vezető észlelhet hatékonysági hiányosságokat. Egy alapító tesztelheti a hipotéziseit anélkül, hogy analitikusra várna.

## Hogyan működik

Az AI megérti az adatstruktúrát. Legenerálja a megfelelő lekérdezéseket. Kezeli a fordítást az emberi kérdéstől az adatbázis logikáig — az a rész, amely általában hónapokig tart betanítani.

## A fogás

Nem varázslat. Az adatok minősége számít. A szerkezet számít. A rosszul szervezett adathalmaz még az intelligens AI-t is zavarja. De tiszta, jól dokumentált adatok esetén a Mosaic AI hónapokról napokra rövidíti a tanulási görbét.

## Miért számít a csapatok számára

Egy ember most azt tudja csinálni, amit három kellett. Az a személy nem helyettesítódik — a lekérdezés-írásról jobb kérdések feltételezésére vált.`,
    },
  },
  {
    slug: "women-in-ai-careers",
    date: "2026-04-15",
    readMinutes: 8,
    title: {
      en: "Women in AI careers: the paths they took",
      hu: "Nők az AI karrierben: az útvonalak, amelyeken haladtak",
    },
    summary: {
      en: "Five women share how they broke into AI, from career changers to first-time engineers.",
      hu: "Öt nő meséli el, hogyan törtek be az AI világába, Career-changeráektől az első alkalommal mérnöki pozícióba.",
    },
    body: {
      en: `The narrative says: AI roles are for computer science graduates. The reality is messier, and more hopeful.

## The career-changer

"I was a policy advisor for eight years. I took a three-month course on machine learning fundamentals, then applied to a startup working on AI ethics. That was the bridge."

## The engineer who went deep

"I built mobile apps. Then I realized I wanted to understand the neural networks behind everything. I spent a year in a job with 20% time to learn, became competent, then switched roles."

## The founder's path

"I saw a problem in my industry that AI could solve. I learned enough to spec the product, hired engineers, and learned the rest by shipping."

## The returner

"I took five years off. I was worried I would not catch up. I took two courses, did a small project, and the gap was smaller than expected. Tech moves fast, but five years is not ancient history."

## The academic

"I did a PhD in linguistics. I realized language models needed better thinking about language. I am now applying that lens in industry."

## The thread

No two paths were the same. But all five learned specifically, not broadly. They picked one thing — machine learning, LLMs, ethics, product — and went deep on that one thing. Then they found people willing to hire for that depth.

The door is smaller than you think. It is also reachable.`,
      hu: `Az elbeszélés azt mondja: az AI szerepekhez számítógéptudományi végzettség kell. A valóság zavarosabb, és reményteljesebb.

## A karrierváltó

„Nyolc évet politikai tanácsadóként töltöttem. Elvégeztem egy háromhónapos gépi tanulási alapok kurzust, majd egy AI etikán dolgozó startupra jelentkeztem. Ez volt a híd."

## A mérnök, aki elmélyült

„Mobil alkalmazásokat építettem. Aztán rájöttem, hogy meg akarom érteni az idegháló hálózatokat. Egy évet dolgoztam egy munkahelyén 20%-os tanulási idővel, kompetensé váltam, majd szerepet váltottam."

## Az alapító útja

„Láttam egy problémát az iparágamban, amit az AI meg tudott volna oldani. Annyira tanultam, hogy felspecifikálhassam a terméket, alkalmazottam mérnökökkel, és a többit szállítás közben tanultam meg."

## A visszatérő

„Öt évet szünetet vettem. Aggódtam, hogy nem érhetem utol. Elvégeztem két kurzust, egy kis projektet végeztem, és a szakadék kisebbnek bizonyult, mint gondoltam. A tech gyorsan mozog, de öt év nem őskori."

## Az akadémikus

„Doktori fokozatom van nyelvészetből. Rájöttem, hogy a nyelvi modellek jobb gondolkodást igényelnek a nyelvről. Most ezt az objektívumot alkalmazom az iparban."

## A szál

Nem volt két egyforma út. De mind az öten konkrétan tanultak, nem széles körűen. Egy dolgot választottak — gépi tanulást, LLM-eket, etikát, terméket — és abban mélyedhettek el. Aztán olyan embereket találtak, akik hajlandóak voltak felvételezni az adott mélységért.

Az ajtó kisebb, mint gondolnád. Elérhetőnek is.`,
    },
  },
  {
    slug: "ai-skills-future",
    date: "2026-04-12",
    readMinutes: 6,
    title: {
      en: "The AI skills that will matter in five years",
      hu: "Az AI-s képességek, amelyek öt év múlva fontosak lesznek",
    },
    summary: {
      en: "Not coding. Not math. The skills that compound over time.",
      hu: "Nem kódolás. Nem matematika. Az idővel összeadódó képességek.",
    },
    body: {
      en: `Every few months, someone announces the next "must-learn AI skill." Usually it is wrong. Here is what actually matters in five years.

## 1. Thinking like a researcher

Not running experiments. But knowing what a good question is, when to trust data, when to be skeptical. This is how you avoid hype and spot the real breakthroughs.

## 2. Judgment about context

The same AI tool is transformative in one context and useless in another. A chatbot is excellent for brainstorming, terrible for legal advice. Judgment is knowing which is which, and why.

## 3. Explaining AI to non-AI people

As AI spreads into every role, the bottleneck becomes communication. Can you explain what a language model does to your CEO, your customer, your parent? If yes, you are valuable.

## 4. Finding the small, solvable problems

The people who build lasting value with AI are not the ones chasing moonshots. They are the ones finding the small friction points in their team, their industry, or their daily work, and solving them with AI.

## 5. Knowing what you do not know

The field moves fast. The humility to say "I do not know, but here is how I would find out" is more valuable than pretending certainty. This is how you stay relevant as the landscape shifts.

## The test

In five years, if you have these five, you can learn whatever tool exists then. If you have only the tools, you are out of a job.`,
      hu: `Néhány havonta valaki a következő "tanulni kell" AI-s képességet jelenti be. Általában téves. Íme, ami valóban fontosabb öt év múlva.

## 1. Kutató gondolkodásmód

Nem kísérletek futtatása. De tudás arról, mi a jó kérdés, mikor bízzon az adatban, mikor legyen szkeptikus. Így kerüli el a túlzottságot, és látja meg az igazi áttöréseket.

## 2. Ítélet a kontextusról

Ugyanaz az AI eszköz az egyik kontextusban átalakító, a másikban haszontalan. A chatbot kiváló az ötletrohamhoz, szörnyű a jogi tanácshoz. Az ítélet az, hogy tudod, melyik melyik, és miért.

## 3. AI magyarázata nem AI embereknek

Ahogy az AI terjedni kezd minden szerepbe, a szűk keresztmetszet a kommunikáció. Tudod elmagyarázni, mi az a nyelvmodell az igazgatódnak, az ügyfélnek, a szüleidnek? Ha igen, értékes vagy.

## 4. Kis, megoldható problémák keresése

Azok az emberek, akik tartós értéket építenek az AI-val, nem azok, akik a nagy álmokat üldözik. Azok, akik az apró súrlódási pontokat találják meg a csapatukban, az iparágukban, a napi munkájukban, és azokat az AI-val oldják meg.

## 5. Tudás arról, hogy mit nem tudsz

A terület gyorsan mozog. A szerénység mondani: „Nem tudom, de így találnám meg" értékesebb, mint az bizonyosság színlele. Így maradsz releváns, ahogy a tájkép változik.

## A teszt

Öt év múlva, ha van ezt az öt, tanulni tudod azt az eszközt, ami akkor létezik. Ha csak az eszközöd van, munka nélkül vagy.`,
    },
  },
];

export type EventItem = {
  id: string;
  date: string; // ISO yyyy-mm-dd
  time: string;
  title: LocalizedString;
  description: LocalizedString;
  location: LocalizedString;
};

export const events: EventItem[] = [
  {
    id: "e1",
    date: "2026-05-08",
    time: "18:00",
    title: { en: "Prompt Lab #04: workplace prompts", hu: "Prompt Lab #04: munkahelyi promptok" },
    description: {
      en: "Hands-on session: bring one task from your week, leave with a prompt that does it.",
      hu: "Gyakorlati alkalom: hozz egy heti feladatot, vidd haza a promptot, ami megoldja.",
    },
    location: { en: "Loffice, Budapest", hu: "Loffice, Budapest" },
  },
  {
    id: "e2",
    date: "2026-05-22",
    time: "19:00",
    title: { en: "Mentor Circle: switching into AI roles", hu: "Mentorkör: váltás AI-os szerepekbe" },
    description: {
      en: "Three Hungarian women share how they transitioned into AI engineering, product, and research.",
      hu: "Három magyar nő meséli el, hogyan váltottak AI mérnöki, termék- és kutatói szerepekbe.",
    },
    location: { en: "Online (Zoom)", hu: "Online (Zoom)" },
  },
  {
    id: "e3",
    date: "2026-06-12",
    time: "10:00",
    title: { en: "Beginner Brunch: your first chatbot", hu: "Kezdő Brunch: az első chatbotod" },
    description: {
      en: "Coffee, croissants, and your first working AI assistant by lunchtime. No code.",
      hu: "Kávé, croissant, és az első működő AI asszisztensed ebédig. Kód nélkül.",
    },
    location: { en: "Massolit Books, Budapest", hu: "Massolit Books, Budapest" },
  },
  {
    id: "e4",
    date: "2026-06-26",
    time: "18:30",
    title: { en: "Ethics Salon: AI and the labour market", hu: "Etika Szalon: AI és a munkaerőpiac" },
    description: {
      en: "A moderated conversation with an economist, a labour lawyer, and an HR director.",
      hu: "Moderált beszélgetés közgazdásszal, munkajogásszal és HR igazgatóval.",
    },
    location: { en: "Aurora, Budapest", hu: "Aurora, Budapest" },
  },
  {
    id: "e5",
    date: "2026-01-30",
    time: "18:00",
    title: { en: "New Year Kickoff & community dinner", hu: "Évindító és közösségi vacsora" },
    description: {
      en: "Looking back at the first year, looking forward to the next. With dinner.",
      hu: "Visszatekintés az első évre, előretekintés a következőre. Vacsorával.",
    },
    location: { en: "Csendes Vintage, Budapest", hu: "Csendes Vintage, Budapest" },
  },
];

export type Resource = {
  category: "guides" | "tools" | "paths";
  title: LocalizedString;
  description: LocalizedString;
  url: string;
};

export const resources: Resource[] = [
  {
    category: "guides",
    title: { en: "Your first week with ChatGPT", hu: "Az első hét a ChatGPT-vel" },
    description: { en: "A 7-day routine to build a habit.", hu: "7 napos rutin a szokás kialakításához." },
    url: "#",
  },
  {
    category: "guides",
    title: { en: "Prompting basics, in Hungarian", hu: "Prompt alapok, magyarul" },
    description: { en: "The four moves every prompt needs.", hu: "Négy mozdulat, amire minden promptnak szüksége van." },
    url: "#",
  },
  {
    category: "guides",
    title: { en: "Reading AI news without panic", hu: "AI hírek olvasása pánik nélkül" },
    description: { en: "How to filter signal from noise.", hu: "Hogyan szűrd a jelet a zajból." },
    url: "#",
  },
  {
    category: "tools",
    title: { en: "ChatGPT", hu: "ChatGPT" },
    description: { en: "The most-used general assistant.", hu: "A legtöbbet használt általános asszisztens." },
    url: "https://chat.openai.com",
  },
  {
    category: "tools",
    title: { en: "Claude", hu: "Claude" },
    description: { en: "Excellent for long documents and writing.", hu: "Kiváló hosszú dokumentumokhoz és íráshoz." },
    url: "https://claude.ai",
  },
  {
    category: "tools",
    title: { en: "Midjourney", hu: "Midjourney" },
    description: { en: "Image generation with strong aesthetics.", hu: "Képgenerálás erős esztétikával." },
    url: "https://midjourney.com",
  },
  {
    category: "tools",
    title: { en: "Otter / Whisper", hu: "Otter / Whisper" },
    description: { en: "Transcription that actually understands Hungarian.", hu: "Átirat, ami valóban érti a magyart." },
    url: "#",
  },
  {
    category: "paths",
    title: { en: "Curious beginner — 4 weeks", hu: "Kíváncsi kezdő — 4 hét" },
    description: { en: "From zero to confident daily user.", hu: "Nulláról magabiztos napi felhasználóig." },
    url: "#",
  },
  {
    category: "paths",
    title: { en: "Working professional — 6 weeks", hu: "Dolgozó szakember — 6 hét" },
    description: { en: "Automate one workflow per week.", hu: "Egy munkafolyamat automatizálása hetente." },
    url: "#",
  },
  {
    category: "paths",
    title: { en: "Aspiring builder — 12 weeks", hu: "Leendő építő — 12 hét" },
    description: { en: "Ship a working AI tool of your own.", hu: "Szállíts egy saját, működő AI eszközt." },
    url: "#",
  },
];
