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
    readMinutes: 8,
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

The women in our community who get the most out of AI are not the ones with computer science degrees. They are the ones who picked one annoyance in their week and asked: could a chatbot help with this? That is the entire mindset.

## Three small wins to try this week

First, dictate instead of type. On any modern phone, the microphone button on the keyboard now transcribes you in Hungarian with near-perfect accuracy. A two-minute voice note becomes a structured email in seconds. Try it on your next reply: speak the message as if you were leaving a voicemail to a friend, then ask a chatbot to "rewrite this as a polite professional email in Hungarian." You'll save fifteen minutes and sound more like yourself, not less.

Second, use a chatbot as your patient explainer. Paste a contract, an insurance letter, or a school notice and ask: "Explain this to me in simple Hungarian, and tell me what I should pay attention to." It will not replace a lawyer, but it will sharpen the questions you ask one. The same trick works for medical leaflets, tax forms, and the small print on a phone plan.

Third, batch your decisions. Once a week, open a chatbot and dump the small things — meal plan, gift ideas, packing list, week-ahead schedule. Treat it as a thinking partner, not an oracle. The point is not that the AI's first answer is perfect. The point is that staring at a blank page is the hard part, and a half-decent draft unlocks you.

## A worked example: the Sunday reset

One member of our community runs what she calls a "Sunday reset" with ChatGPT. It takes twelve minutes. She tells it: here is my calendar for the week, here is what's in my fridge, here are the three things I need to get done. It comes back with a meal plan that uses what she has, a shopping list for the gaps, and a suggested order for her tasks based on her energy patterns. She edits maybe a third of it. The other two thirds she would have spent an hour figuring out herself.

That is the shape of useful AI. Not magical, not mysterious — just a steady reduction in the number of small decisions you have to make alone.

## Why this matters

Every minute AI saves you is a minute you keep. Multiply that by a year and the compounding is real. The goal is not to become a power user overnight — it is to find one tool that earns its place in your week, then add another. Start with the dictation trick on Monday. By Friday, you'll have your first small win.`,
      hu: `Amikor az emberek az AI-ra gondolnak, humanoid robotokat képzelnek el. Az igazság prózaibb — és hasznosabb. A 2026-os AI az az asszisztens, aki megírja az e-mailt, amit halogatsz, a kamera, ami megtalálja a hintázó kislányod fotóját anélkül, hogy tíz percig görgetnél, a naptár, ami időpontot javasol.

A közösségünkben azok a nők hozzák ki a legtöbbet az AI-ból, akiknek nincs informatikai diplomájuk. Hanem azok, akik kiválasztottak egy heti bosszúságot, és megkérdezték: tudna ebben egy chatbot segíteni? Ez az egész szemlélet.

## Három kis győzelem erre a hétre

Először: diktálj gépelés helyett. Minden modern telefon billentyűzetén a mikrofon gomb ma már szinte tökéletesen leírja a magyar beszédet. Egy két perces hangjegyzet másodpercek alatt strukturált e-maillé válik. Próbáld ki a következő válaszodnál: mondd el az üzenetet, mintha hangpostát hagynál egy barátnak, majd kérd meg a chatbotot, hogy „írd át udvarias, profi e-maillé magyarul". Tizenöt percet spórolsz, és inkább önmagadnak hangzol, nem kevésbé.

Másodszor: használd a chatbotot türelmes magyarázóként. Másolj be egy szerződést, biztosítási levelet vagy iskolai értesítőt, és kérdezd meg: „Magyarázd el egyszerű magyar nyelven, és mondd meg, mire figyeljek." Nem helyettesít ügyvédet, de élesíti a kérdéseidet. Ugyanez működik gyógyszer betegtájékoztatókkal, adóbevallással és a telefonszerződés apró betűivel.

Harmadszor: csoportosítsd a döntéseidet. Hetente egyszer nyiss meg egy chatbotot, és önts bele mindent — étrend, ajándékötletek, csomagolási lista, heti terv. Kezeld gondolkodó partnerként, ne jósként. A lényeg nem az, hogy az AI első válasza tökéletes. A lényeg, hogy a nehéz rész az üres lap, és egy félig jó vázlat megnyit.

## Egy konkrét példa: a vasárnapi újrakezdés

Egy közösségi tagunk „vasárnapi reset"-et csinál a ChatGPT-vel. Tizenkét perc. Megadja: itt a heti naptáram, itt van a hűtőben, itt a három dolog, amit el kell intéznem. Visszakap egy étrendet abból, ami van, bevásárlólistát a hiányzókra, és egy javasolt sorrendet a feladatokra az energiaszintje alapján. Talán a harmadát átírja. A másik kétharmadot egyébként egy órányi gondolkodással csinálta volna meg.

Ez a hasznos AI alakja. Nem mágikus, nem rejtélyes — csak állandó csökkentése azoknak a kis döntéseknek, amelyeket egyedül kell meghoznod.

## Miért számít ez

Minden percet, amit az AI megspórol neked, megtartasz. Szorozd be egy évvel, és a hatás valós. A cél nem az, hogy egyik napról a másikra szakértő legyél — hanem hogy találj egy eszközt, ami megérdemli a helyét a hetedben, aztán egy következőt. Kezdd a diktálási trükkel hétfőn. Péntekre meglesz az első kis győzelmed.`,
    },
  },
  {
    slug: "chatgpt-for-productivity",
    date: "2026-03-20",
    readMinutes: 9,
    title: {
      en: "ChatGPT for productivity: the prompts I use every day",
      hu: "ChatGPT a produktivitásért: a promptok, amiket naponta használok",
    },
    summary: {
      en: "Six prompt patterns that turn a chat window into a thinking partner, an editor, and a project manager.",
      hu: "Hat prompt-minta, amelyek a chat ablakot gondolkodó partnerré, szerkesztővé és projektmenedzserré teszik.",
    },
    body: {
      en: `A blank chat window is intimidating. The trick is to keep a small library of prompts you trust, and adapt them. Below are the six I reach for almost every day. Copy them, save them in a note, and edit them once you find the wording that feels like you.

Before the list, one principle: the best prompts give the AI a role, a constraint, and an example of what good looks like. "Edit my email" is weak. "Edit my email for clarity, keep my warm tone, and don't make it longer" is strong.

## 1. The editor

"Edit this text for clarity. Do not change the meaning. Keep my voice — I tend to be direct but warm. Suggest two stronger opening lines I can choose from."

Use it for: emails, LinkedIn posts, school notes, anything you wrote in a hurry.

## 2. The thinking partner

"I'm trying to decide between X and Y. Give me three arguments for each. Then ask me one question that would change your recommendation."

Use it for: job offers, big purchases, parenting trade-offs. The final question is the magic — it forces the AI to reveal what it's assuming about you.

## 3. The summariser

"Summarise this in five bullets, then in one sentence a child would understand."

Use it for: long articles, meeting transcripts, dense PDFs. The "child" version is a comprehension test for you, not the AI.

## 4. The project breakdown

"Here is a goal: [describe it]. Break it into the smallest meaningful next step I could do today in 20 minutes. Then list the next three steps after that."

Use it for: any project that has been on your list for too long. The 20-minute frame defeats perfectionism.

## 5. The translator-with-context

"Translate this to Hungarian. Use a professional but warm tone, the kind I would use with a colleague I respect. If a phrase doesn't translate naturally, give me two options and explain the difference."

Use it for: client emails, formal letters, anything where word choice carries weight.

## 6. The pre-mortem

"Imagine this plan failed in six months. List the five most likely reasons, ranked from most to least likely. For each, suggest one thing I could do this week to reduce the risk."

Use it for: launches, big decisions, anything reversible-but-costly. Pre-mortems catch the failure modes your optimism hides.

## Save these. Adapt them.

The pattern matters more than the exact words. Within a month of using these six daily, you'll start writing your own — and that's when AI stops being a novelty and starts being a tool.`,
      hu: `Egy üres chat ablak ijesztő. A trükk: tarts egy kis prompt-könyvtárat, amelyben bízol, és igazítsd a helyzethez. Itt van az a hat, amelyhez szinte naponta nyúlok. Másold át, mentsd el egy jegyzetbe, és szerkeszd át, amíg a megfogalmazás a tiéddé válik.

A lista előtt egy elv: a legjobb promptok adnak az AI-nak szerepet, korlátot és példát arra, hogy mi a jó. „Szerkeszd az e-mailem" gyenge. „Szerkeszd az e-mailem érthetőségre, tartsd meg a meleg hangom, és ne legyen hosszabb" erős.

## 1. A szerkesztő

„Szerkeszd ezt a szöveget az érthetőség kedvéért. Ne változtasd meg az értelmét. Tartsd meg a hangom — közvetlen, de meleg vagyok. Javasolj két erősebb nyitómondatot, amik közül választhatok."

Mire jó: e-mailek, LinkedIn posztok, iskolai üzenetek, bármi, amit kapkodva írtál.

## 2. A gondolkodó partner

„X és Y között döntök. Adj három érvet mindkettő mellett. Aztán tegyél fel egy kérdést, ami megváltoztatná az ajánlásodat."

Mire jó: állásajánlatok, nagy vásárlások, szülői dilemmák. A záró kérdés a varázslat — kényszeríti az AI-t, hogy felfedje, mit feltételez rólad.

## 3. Az összefoglaló

„Foglald össze öt pontban, majd egy mondatban, amit egy gyerek is megért."

Mire jó: hosszú cikkek, meeting-átiratok, sűrű PDF-ek. A „gyerek" verzió neked szól, nem az AI-nak — ez egy érthetőségi teszt.

## 4. A projektbontás

„Itt egy cél: [írd le]. Bontsd a legkisebb értelmes következő lépésre, amit ma 20 perc alatt megtehetek. Aztán sorold fel az utána következő három lépést."

Mire jó: bármi, ami túl régóta van a listádon. A 20 perces keret legyőzi a perfekcionizmust.

## 5. A kontextusos fordító

„Fordítsd magyarra. Profi, de meleg hang, ahogy egy tisztelt kollégával beszélnék. Ha egy kifejezés nem fordítható természetesen, adj két opciót és magyarázd el a különbséget."

Mire jó: ügyfél-emailek, hivatalos levelek, bármi, ahol a szóválasztás súlya nagy.

## 6. A pre-mortem

„Képzeld el, hogy ez a terv hat hónap múlva megbukott. Sorold fel az öt legvalószínűbb okot, valószínűség szerint rangsorolva. Mindegyikhez javasolj egy dolgot, amit ezen a héten tehetnék a kockázat csökkentésére."

Mire jó: indítások, nagy döntések, bármi, ami visszafordítható-de-drága. A pre-mortem elkapja a kudarcformákat, amiket az optimizmusod elrejt.

## Mentsd el. Igazítsd.

A minta fontosabb, mint a pontos szavak. Egy hónap napi használat után elkezded a sajátjaidat írni — és ekkor szűnik meg az AI újdonság lenni, és válik eszközzé.`,
    },
  },
  {
    slug: "ai-in-education",
    date: "2026-03-08",
    readMinutes: 8,
    title: {
      en: "AI in education: tutor, not crutch",
      hu: "AI az oktatásban: korrepetitor, nem mankó",
    },
    summary: {
      en: "How parents and learners can use AI to deepen understanding instead of skipping it.",
      hu: "Hogyan használhatják a szülők és a tanulók az AI-t a megértés mélyítésére a kihagyása helyett.",
    },
    body: {
      en: `The fear is reasonable: a student who asks a chatbot to write the essay learns nothing. But the same tool, used differently, becomes the patient tutor most schools cannot afford. The difference is one word: instead of "do," ask "explain."

We've watched this play out in our community's family workshops. The teenagers who use AI to skip the work plateau quickly — they learn how to disguise generated text, but not the subject. The teenagers who use AI as a tutor pull ahead. They are not smarter. They just have, for the first time, an infinitely patient explainer who never sighs when asked the same question twice.

## Three rules for learners

**Ask it to explain, not to write.** "Explain why the Hungarian Revolution of 1956 happened, as if I'm 14. Then ask me three questions to check if I really understood." The follow-up questions are what turn reading into learning.

**Ask it to quiz you.** "Give me ten questions on this chapter, then mark my answers and explain each one I got wrong. For the wrong ones, give me one more question on the same idea so I can prove I learned it." This is the closest thing most students will ever get to one-on-one tutoring.

**Ask it to find your blind spot.** "Here is my essay. Don't rewrite it. Tell me three things a teacher would mark down, in order of severity, and explain why." The "don't rewrite it" matters — without that line, the AI will helpfully steal the learning by fixing it for you.

## A note on hallucinations

AI sometimes invents facts confidently. For homework, this is a feature, not a bug — it teaches students to verify. Make a rule: any fact, date, or quote the AI gives you must be cross-checked with one other source before it goes in your essay. That single habit is more valuable than any AI literacy curriculum.

## For parents

Sit with your child for ten minutes. Show them the difference between "do my homework" and "help me understand my homework." Show them how to ask follow-up questions. Show them what it looks like when the AI gets something wrong, and how to catch it.

That conversation matters more than any school AI policy. Schools will spend the next decade arguing about what to ban. You can teach the better habit at the kitchen table tonight.

## For teachers in our community

The most effective assignment redesigns we've seen are not about banning AI — they're about making thinking visible. Ask for the messy first draft. Ask for a one-paragraph reflection on what the student changed and why. Ask students to argue with the AI's answer. The work that AI cannot fake is the work that shows the mind moving.`,
      hu: `A félelem érthető: a diák, aki megíratja a chatbottal a fogalmazást, semmit sem tanul. De ugyanaz az eszköz másképp használva azzá a türelmes korrepetitorrá válik, amit a legtöbb iskola nem engedhet meg magának. A különbség egy szó: „csináld" helyett „magyarázd".

Láttuk ezt a közösségünk családi műhelyein. A tinik, akik az AI-t a munka kihagyására használják, gyorsan beragadnak — megtanulják álcázni a generált szöveget, de nem a tárgyat. A tinik, akik korrepetitorként használják, előretörnek. Nem okosabbak. Egyszerűen most először van egy végtelenül türelmes magyarázójuk, aki soha nem sóhajt, ha kétszer kérdezed ugyanazt.

## Három szabály a tanulóknak

**Kérj magyarázatot, ne fogalmazást.** „Magyarázd el, miért tört ki az 1956-os forradalom, mintha 14 éves lennék. Aztán tegyél fel három kérdést, hogy ellenőrizd, valóban megértettem-e." A követő kérdések teszik az olvasást tanulássá.

**Kérdeztesd magadat.** „Tegyél fel tíz kérdést erről a fejezetről, majd javítsd ki a válaszaimat, és magyarázd el azt, amit elrontottam. A rosszakra adj még egy kérdést ugyanarról a gondolatról, hogy bebizonyíthassam, megtanultam." Ez a legközelebbi dolog, amit a legtöbb diák valaha is kap az egy-az-egy korrepetáláshoz.

**Kérd meg, hogy találja meg a vakfoltodat.** „Itt a fogalmazásom. Ne írd át. Mondd meg, mit jelölne meg egy tanár, súlyossági sorrendben, és magyarázd el, miért." A „ne írd át" számít — e mondat nélkül az AI segítőkészen ellopja a tanulást azzal, hogy kijavítja.

## Megjegyzés a hallucinációkról

Az AI néha magabiztosan kitalál tényeket. Házi feladatra ez előny, nem hiba — megtanítja a diákokat ellenőrizni. Tegyél szabályt: minden tényt, dátumot vagy idézetet, amit az AI ad, egy másik forrással kell ellenőrizni, mielőtt a fogalmazásba kerül. Ez az egy szokás többet ér, mint bármilyen AI-műveltségi tanterv.

## Szülőknek

Ülj le tíz percre a gyermekeddel. Mutasd meg neki a különbséget a „csináld meg a leckémet" és a „segíts megérteni a leckémet" között. Mutasd meg, hogyan tegyen fel követő kérdéseket. Mutasd meg, hogyan néz ki, amikor az AI téved, és hogyan kell ezt elkapni.

Az a beszélgetés többet ér, mint bármilyen iskolai AI-szabályzat. Az iskolák a következő évtizedet azzal töltik, hogy mit tiltsanak. Te a jobb szokást ma este megtaníthatod a konyhaasztalnál.

## A közösségünk tanárainak

A leghatékonyabb feladat-újratervezések, amiket láttunk, nem az AI tiltásáról szólnak — hanem arról, hogy a gondolkodás láthatóvá váljon. Kérd a kusza első vázlatot. Kérj egy bekezdéses reflexiót arról, mit változtatott a diák és miért. Kérd meg a diákokat, hogy vitatkozzanak az AI válaszával. Az a munka, amit az AI nem tud meghamisítani, az, ami megmutatja, ahogy az elme mozog.`,
    },
  },
  {
    slug: "ai-tools-for-beginners",
    date: "2026-02-22",
    readMinutes: 6,
    title: {
      en: "AI tools for beginners: where to actually start",
      hu: "AI eszközök kezdőknek: hol érdemes valóban elkezdeni",
    },
    summary: {
      en: "A short, opinionated map: one chat tool, one image tool, one transcription tool. That's enough.",
      hu: "Rövid, határozott térkép: egy chat eszköz, egy kép eszköz, egy átirat eszköz. Ennyi elég.",
    },
    body: {
      en: `Beginner overwhelm is real. There are thousands of "AI tools," a new one announced every Tuesday, and the FOMO is exhausting. Here is the unfashionable truth: you need three. Not thirty. Three.

## A chat assistant

Pick one — ChatGPT, Claude, or Gemini — and use only it for a month. They are all good enough for 95% of what a beginner needs. Switching between them in your first month is the productivity equivalent of trying to learn three languages at once.

How to choose: ChatGPT has the largest community and the best free tier for casual use. Claude is the most pleasant for long writing and document analysis. Gemini integrates deeply with Google Workspace if you live in Gmail and Docs. Pick based on which ecosystem you already use, not on benchmark charts.

## An image generator

Use one to make slides, blog headers, social posts, or moodboards. Treat it like a stock photo library you can describe instead of search. Midjourney is the artist's choice; ChatGPT and Gemini both have built-in image tools that are good enough for daily work.

The shift in mindset: stop searching for "the right image" and start describing the image you want. "Warm overhead photo of a wooden table with a cup of coffee, soft morning light, magazine editorial style" gets you something useful in seconds.

## A transcription tool

Whether built into your phone or a dedicated app (Otter, Whisper, Granola), transcribing meetings and voice notes is the productivity unlock most people overlook. The pattern: record the meeting with permission, get a transcript and summary in minutes, ask a chatbot to extract action items.

For Hungarian speakers specifically: the quality jumped sharply in 2025. What was unusable two years ago is now near-perfect. Try it again if you wrote it off before.

## That's it

Master these three before you add a fourth. The reason is simple: depth beats breadth. A person who knows ChatGPT well will get more done than one who has tried twenty tools shallowly. Once you've used your three for a month, you'll know what your fourth should be — and you'll know it from your own work, not from someone's newsletter.`,
      hu: `A kezdő túlterheltség valós. Több ezer „AI eszköz" van, minden kedden bejelentenek egy újat, és a lemaradástól való félelem kimerítő. Itt a divatjamúlt igazság: háromra van szükséged. Nem harmincra. Háromra.

## Egy chat asszisztens

Válassz egyet — ChatGPT, Claude vagy Gemini — és csak azt használd egy hónapig. Mindegyik elég jó a kezdők igényeinek 95%-ára. Az első hónapban váltogatni közöttük olyan, mintha három nyelvet akarnál egyszerre tanulni.

Hogyan válassz: a ChatGPT-nek a legnagyobb közössége van, és a legjobb ingyenes csomagja alkalmi használatra. A Claude a legkellemesebb hosszú íráshoz és dokumentum-elemzéshez. A Gemini mélyen integrálódik a Google Workspace-szel, ha Gmailben és Docsban élsz. Válassz az alapján, melyik ökoszisztémát használod már, ne benchmark-táblázatok alapján.

## Egy képgenerátor

Használd diákhoz, blogfejlécekhez, közösségi posztokhoz, moodboardokhoz. Tekintsd olyan stock fotó könyvtárnak, amit le tudsz írni, nem keresni. A Midjourney a művészek választása; a ChatGPT és a Gemini is rendelkezik beépített képeszközzel, ami elég jó a napi munkához.

A szemléletváltás: ne keresd „a megfelelő képet", hanem írd le a képet, amit akarsz. „Meleg felülnézeti fotó egy fa asztalról egy csésze kávéval, lágy reggeli fény, magazin szerkesztői stílusban" — másodpercek alatt használhatót kapsz.

## Egy átirat eszköz

Akár a telefonodba van építve, akár külön alkalmazás (Otter, Whisper, Granola) — a meetingek és hangjegyzetek átírása az a produktivitás-ugrás, amit a legtöbben kihagynak. A minta: vedd fel a meetinget engedéllyel, kapj átiratot és összefoglalót percek alatt, kérd meg a chatbotot, hogy emelje ki a teendőket.

Magyar beszélőknek külön: a minőség 2025-ben hirtelen ugrott. Ami két éve használhatatlan volt, most majdnem tökéletes. Próbáld újra, ha korábban leírtad.

## Ennyi

Sajátítsd el ezt a hármat, mielőtt hozzáadnál egy negyediket. Az ok egyszerű: a mélység veri a szélességet. Aki jól ismeri a ChatGPT-t, többet végez el, mint aki húsz eszközt próbált felületesen. Miután egy hónapig használtad a hármat, tudni fogod, melyiknek kell a negyediknek lennie — és a saját munkádból fogod tudni, nem valaki hírleveléből.`,
    },
  },
  {
    slug: "ethical-challenges-in-ai",
    date: "2026-02-05",
    readMinutes: 10,
    title: {
      en: "Ethical challenges in AI: a community reading list",
      hu: "AI etikai kihívásai: közösségi olvasmánylista",
    },
    summary: {
      en: "Bias, privacy, work, and the climate question — what every careful user should think about.",
      hu: "Elfogultság, magánélet, munka és a klímakérdés — amin minden tudatos felhasználónak gondolkodnia kell.",
    },
    body: {
      en: `If you use AI, you have a stake in how it is built. The conversations about AI ethics have largely been held by the people building the systems. We think the people using them — especially women, who are still under-represented in those rooms — have a right and a responsibility to shape the conversation too. Four questions to sit with.

## Bias

AI systems learn from the past. The past is unequal. A hiring tool trained on twenty years of resumes will quietly prefer the candidates who looked like the ones who got hired before. A medical model trained mostly on male patients will miss heart attack symptoms that present differently in women. A face recognition system trained on lighter skin will fail darker faces.

These are not hypotheticals. They have all happened, in production, at large companies. The question to ask of any AI tool you use, especially in a high-stakes setting: who was in the data, and who was missing? If you don't know, that's an answer too.

## Privacy

A free chatbot is rarely free. Read what the provider does with your conversations. Most major providers now let you turn off training on your data — find that setting and use it. Treat any prompt as if it could one day be public, because the legal landscape is still being written, and your screenshots are forever.

For sensitive work — legal documents, medical records, anything covered by GDPR — use a paid tier with a data processing agreement, or use a tool that runs locally. Convenience is not worth a data breach.

## Work

Some tasks will go away. Most jobs will not. The honest framing is not "will AI take my job" but "which parts of my job is AI good at, and what becomes more valuable when those parts are cheap?"

For most knowledge workers in 2026, the answer is: judgement, taste, relationship, and accountability become more valuable. The tasks that disappear are the ones we already disliked — formatting, summarising, drafting boilerplate. The tasks that grow are the ones that require a human to be in the room.

This is not consolation. It is a strategy. Spend more time on the parts of your work that require judgement, and less on the parts a chatbot can do for free.

## Climate

Training large models uses energy. So does every search. The numbers are real but often quoted out of context — a single image generation uses roughly the same energy as charging your phone halfway. The question is not to abstain. It is to use AI for the things that justify the cost, and not for the things a calculator already does.

The bigger climate question is upstream: which providers are buying clean energy, and which are not? This is a question we can ask collectively, with our money and our choice of tool, in a way no individual decision about whether to send one more prompt ever will.

## What we do as a community

We pick speakers who disagree. We read the people most affected, not only the people building the systems. We update our minds in public. And we resist two equal mistakes: the techno-optimism that says every concern is a bug to be fixed, and the techno-pessimism that says the only ethical position is to refuse the tool.

The honest position is harder. Use the tool. Notice its costs. Push for it to be better. That is the work.`,
      hu: `Ha AI-t használsz, részed van abban, ahogyan épül. Az AI etikájáról szóló beszélgetéseket nagyrészt azok folytatták, akik a rendszereket építik. Mi úgy gondoljuk, hogy a felhasználóknak — különösen a nőknek, akik még mindig alulreprezentáltak ezekben a termekben — joguk és felelősségük is, hogy formálják a beszélgetést. Négy kérdés, amin érdemes elidőzni.

## Elfogultság

Az AI rendszerek a múltból tanulnak. A múlt egyenlőtlen. Egy húsz év önéletrajzaira tanított felvételi eszköz csendben azokat fogja előnyben részesíteni, akik hasonlítanak a korábban felvettekhez. Egy főleg férfi betegeken tanított orvosi modell elszalasztja a szívinfarktus tüneteit, amelyek nőknél máshogy jelennek meg. Egy világosabb bőrön tanított arcfelismerő rendszer elbukik a sötétebb arcokon.

Ezek nem feltételezések. Mindegyik megtörtént, élesben, nagy cégeknél. A kérdés bármelyik használt AI eszközről, főleg nagy téttel: ki volt az adatban, és ki hiányzott? Ha nem tudod, az is válasz.

## Magánélet

Az ingyenes chatbot ritkán ingyenes. Olvasd el, mit csinál a szolgáltató a beszélgetéseiddel. A legtöbb nagy szolgáltató ma már engedi kikapcsolni az adataidon való tanítást — találd meg ezt a beállítást és használd. Minden promptot úgy kezelj, mintha egy nap nyilvános lehetne, mert a jogi környezet még most íródik, a képernyőképek pedig örökre megmaradnak.

Érzékeny munkához — jogi dokumentumok, orvosi adatok, bármi, amit a GDPR fed — használj fizetős csomagot adatfeldolgozási szerződéssel, vagy helyben futó eszközt. A kényelem nem ér egy adatszivárgást.

## Munka

Néhány feladat eltűnik. A legtöbb munkahely nem. Az őszinte kérdés nem az, hogy „elveszi-e az AI a munkámat", hanem hogy „mely részekben jó az AI, és mi válik értékesebbé, amikor azok olcsóvá válnak?"

A legtöbb tudásmunkás számára 2026-ban a válasz: ítélőképesség, ízlés, kapcsolat és felelősség válik értékesebbé. Az eltűnő feladatok azok, amiket úgyis utáltunk — formázás, összegzés, sablonszöveg írása. A növekvő feladatok azok, amelyek emberi jelenlétet igényelnek a teremben.

Ez nem vigasz. Ez stratégia. Tölts több időt a munkád ítélőképességet igénylő részein, és kevesebbet azokon, amiket egy chatbot ingyen megcsinál.

## Klíma

A nagy modellek tanítása energiát fogyaszt. Minden keresés is. A számok valósak, de gyakran kontextus nélkül idézik — egy képgenerálás durván annyi energiát használ, mint a telefonod félig feltöltése. A válasz nem a tartózkodás. Hanem hogy az AI-t azokra használjuk, ami megéri a költséget, és nem arra, amit egy számológép is megtesz.

A nagyobb klímakérdés feljebb van: melyik szolgáltatók vesznek tiszta energiát, és melyek nem? Ezt közösségileg, a pénzünkkel és az eszközválasztásunkkal tudjuk feltenni — úgy, ahogy egyetlen prompt-döntés sem.

## Amit közösségként teszünk

Olyan előadókat hívunk, akik vitáznak. Azokat olvassuk, akiket a leginkább érint, nem csak azokat, akik építik a rendszereket. Nyilvánosan változtatjuk a véleményünket. És ellenállunk két azonos hibának: a techno-optimizmusnak, amely szerint minden aggály csak javítandó hiba, és a techno-pesszimizmusnak, amely szerint az egyetlen etikus álláspont az eszköz elutasítása.

Az őszinte álláspont nehezebb. Használd az eszközt. Vedd észre a költségeit. Tedd a hangod, hogy jobb legyen. Ez a munka.`,
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
    url: "https://help.openai.com/en/articles/6783457-what-is-chatgpt",
  },
  {
    category: "guides",
    title: { en: "Prompting basics, in Hungarian", hu: "Prompt alapok, magyarul" },
    description: { en: "The four moves every prompt needs.", hu: "Négy mozdulat, amire minden promptnak szüksége van." },
    url: "https://www.promptingguide.ai/",
  },
  {
    category: "guides",
    title: { en: "Reading AI news without panic", hu: "AI hírek olvasása pánik nélkül" },
    description: { en: "How to filter signal from noise.", hu: "Hogyan szűrd a jelet a zajból." },
    url: "https://www.oneusefulthing.org/",
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
    url: "https://otter.ai",
  },
  {
    category: "paths",
    title: { en: "Curious beginner — 4 weeks", hu: "Kíváncsi kezdő — 4 hét" },
    description: { en: "From zero to confident daily user.", hu: "Nulláról magabiztos napi felhasználóig." },
    url: "https://www.deeplearning.ai/short-courses/",
  },
  {
    category: "paths",
    title: { en: "Working professional — 6 weeks", hu: "Dolgozó szakember — 6 hét" },
    description: { en: "Automate one workflow per week.", hu: "Egy munkafolyamat automatizálása hetente." },
    url: "https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/",
  },
  {
    category: "paths",
    title: { en: "Aspiring builder — 12 weeks", hu: "Leendő építő — 12 hét" },
    description: { en: "Ship a working AI tool of your own.", hu: "Szállíts egy saját, működő AI eszközt." },
    url: "https://www.coursera.org/specializations/machine-learning-introduction",
  },
];
