# Portfolio entry guide (`data/`)

This is the reference for anyone (human or agent) adding or editing entries on Winnie's portfolio. Every visible entry on the site comes from a TypeScript file in this folder. Read the section for the file you are touching, follow its field rules, and match the voice described below.

**Ground rules for all entries**

- Never invent facts. No made-up metrics, awards, testimonials, team sizes, links, dates or results (see `PRODUCT.md`: "No testimonials, client claims, or performance claims should be invented"). If Winnie didn't give you a detail, leave the optional field out or ask.
- Keep the existing code style: 2-space indent, double quotes, trailing commas are fine, one object per entry inside the exported array.
- Commented-out fields (`// role: ...`, `// highlight: ...`) are deliberate. Winnie hides text she isn't happy with instead of deleting it. Don't uncomment, delete, or "clean up" those lines unless asked.
- Put images in `public/` and reference them from the site root (`/project/foo.png`, `/life/foo.jpg`), never with `public/` in the path.
- After editing, run `npm run build` (or at least `npx tsc --noEmit`) so a typo in a union type or a missing required field gets caught.

| File | What it drives | Order on the page |
| --- | --- | --- |
| `projects.ts` | `/projects` grid, `/projects/[slug]` case-study pages | Array order (most important / newest first) |
| `experience.ts` | `/experience` growth map, home page preview | Page sorts by `startDate`; home preview shows the **first 4 in array order**, so keep the array newest first too |
| `life.ts` | `/life` photo mosaic + "something on my mind.." notes | Array order, newest first |
| `home.ts` | Home page featured projects (by slug) and music embed | Array order |
| `contact.ts` | Email/links/resume and the "technical shelf" skill groups | Array order |

---

## Two voices

The site deliberately mixes two registers. Getting the register right matters more than any single field.

1. **Professional voice** for `projects.ts`, `experience.ts` and `contact.ts`. Clear, plain, recruiter-readable. Mostly third-person-implied sentences with no "I" ("Worked on dataset cleaning...", "Coordinated supervisor and volunteer communication..."). Concrete nouns (the dataset name, the framework, the audience). Modest claims: "Contributed to", "Helped shape", "Supported", "Explored". No hype words ("revolutionary", "cutting-edge", "passionate"), no emoji.
2. **Personal voice** for `life.ts`. Casual, warm, first person, often lowercase, short. Emoticons and playful punctuation are welcome (`:D`, `:3`, `:<`, `~~`, `♡`, "lol", "Sooo cute"). Can be a single word ("stars", "stargazing."). Gratitude and growth show up a lot ("so so grateful", "hope to keep learning and growing"). Do not polish these into professional prose, and do not fix casual grammar Winnie wrote on purpose.

---

## `projects.ts`

### Type

```ts
type Project = {
  id: string;            // short internal id, e.g. "meow", "iot", "recod-ai"
  slug: string;          // URL: /projects/<slug>, kebab-case, descriptive
  title: string;         // product name or plain project name
  subtitle: string;      // one-line "what it is"
  cardSummary?: string;  // one sentence, past tense, "Built/Designed/Implemented ..."
  description: string;   // 1 sentence: "A <kind of> project/system/app that ..."
  problem?: string;      // 1-3 sentences on why it matters
  solution?: string;     // 1-2 sentences on the approach
  role?: string;         // Winnie's own contribution, verb-first
  techStack: string[];   // concrete tools; first 5 show on the card
  tags: string[];        // from projectTags; tags[0] shows on the card
  features?: string[];
  challenges?: string[];
  insights?: string[];
  startDate?: string;    // "June 2026" or "2026"
  endDate?: string;
  status?: "Completed" | "In Progress" | "Prototype";
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;     // card fallback image if no media image
  media?: ProjectMediaItem[];
  featured: boolean;
};
```

### Where each field shows up

- **Card** (`components/projects/ProjectCard.tsx`): first image in `media`, else a video `poster`, else `imageUrl`; `tags[0]`; `title`; `description`; first 5 of `techStack`. `subtitle` and `cardSummary` are currently not rendered on the card, but still fill them in.
- **Detail page** (`app/projects/[slug]/page.tsx`): Overview (`description`), "My role" (`role`), tech stack, Timeline (`startDate` — `endDate`), Status, media carousel, Problem / Solution, "Key Features", "Challenges" and "Insights". Any empty optional field simply hides its section, so it's fine to omit what you don't know.
- **Home page** shows the projects listed by slug in `home.ts` → `homeProjectHighlights`.

### Field-by-field style

- **title**: the product name if there is one ("Meow", "LUNA", "Nook", "Ideal Ride"), otherwise a plain descriptive title ("IoT Network Intrusion Detection", "System Call File Manager"). Competition projects can lead with the org: "Recod.ai - Scientific Image Forgery Detection".
- **subtitle**: Title Case, noun phrase, no period. Says what the thing is. Examples: "AI Cat Detection and WhatsApp Alert System", "Lexer, Parser, Analyzer, and Evaluator for a Custom Language", "Furniture Trading Platform for UF Students", "C++ / SFML Game Project".
- **cardSummary**: one past-tense sentence starting with a verb. "Built a FastAPI-based cat detection system with model inference, detection history, and WhatsApp alerts." / "Designed a mobile AI concept that scans ingredient labels and turns dense text into readable summaries."
- **description**: one sentence, present tense, starting with "A/An ...". It is the card body, so keep it to roughly 15-35 words. "A full-stack AI system that detects cats from camera input and sends WhatsApp alerts through Twilio." / "A student-centered marketplace for buying, selling, and discovering furniture around the University of Florida community."
- **problem**: the real-world pain, from the user's or domain's perspective, not the code's. 1-3 sentences. "Ingredient labels can be difficult to parse quickly, especially when users are making health, allergy, or lifestyle decisions."
- **solution**: how the project answers the problem, naming the main pieces. Product names are used as the subject: "Meow combines a trained detection model, a FastAPI backend, SQLite storage, Hugging Face model hosting, and Twilio notifications so alerts can be sent automatically."
- **role**: only what Winnie personally did, verb-first, no "I". Be honest and scoped on team projects: "Designed UI/UX for the mobile flow." / "Worked on dataset cleaning and exploratory analysis for the TON_IoT dataset. Developed the Random Forest classification model". If you don't know her role, omit it.
- **techStack**: specific tools and libraries, most important first ("Python", "Pandas", "Scikit-learn", "FastAPI", "TensorFlow", "React Native", "Gemini API"). Concepts are acceptable for theory-heavy work ("Recursive Descent Parsing", "AST", "UNIX System Calls").
- **tags**: pick from `projectTags`: `"Full-Stack"`, `"AI / ML"`, `"Data"`, `"C++"`, `"Backend"`, `"Systems"`, `"Mobile"`, `"Cybersecurity"`, `"Team Project"`. Spelling must match exactly or the filter won't find it. Put the most representative tag first since `tags[0]` is the card label. Add `"Team Project"` last for group work.
- **features**: 4-7 short fragments, Sentence case, no trailing period. Mix of capability and implementation: "Camera-based cat detection pipeline", "SQLite detection history storage", "Uses SAM for segmentation-based analysis".
- **challenges**: 2-5 fragments, gerund-led where natural, no period: "Handling class imbalance between normal and malicious traffic categories", "Keeping recursive reveal behavior predictable", "Debugging edge cases in parser and evaluator tests". Terse is fine ("Data leakage").
- **insights**: 1-4 lessons as full-ish statements, no period: "Data cleaning and feature understanding shape model quality before training begins", "Building for a specific student audience made the product easier to scope and design", "Always validate model performance on unseen data". Some start with "Learned ..." / "Practiced ..." / "Gained ...".
- **startDate / endDate**: "June 2026" style (full or 3-letter month + year) or just "2026".
- **status**: exactly `"Completed"`, `"In Progress"` or `"Prototype"`.
- **featured**: `true` only if Winnie says so.
- **githubUrl / demoUrl / imageUrl**: empty strings `""` are tolerated in existing entries, but prefer leaving the field out when there's no value. Never guess a repo URL.

### media

```ts
type ProjectMediaItem = {
  type: "image" | "video" | "youtube" | "drive";
  src: string;      // "/project/x.png", "https://www.youtube.com/embed/<ID>", "https://drive.google.com/file/d/<ID>/preview"
  title?: string;   // short label, also used as alt text
  caption?: string; // short, lowercase-ish, explanatory; credit sources ("From https://...")
  poster?: string;  // for "video"
};
```

YouTube links must be the `/embed/` form. Image captions are informal and technical: `"Yolo get bounding box + sam get instance mask"`, `"self-supervised"`, `"CIFAR-10 dataset visualization in tSNE space generated by Euclidean distance"`. If the image comes from a paper or site, caption it `From <url>`.

### Full example (existing entry, trimmed)

```ts
{
  id: "meow",
  slug: "meow-cat-detector",
  title: "Meow",
  subtitle: "AI Cat Detection and WhatsApp Alert System",
  cardSummary:
    "Built a FastAPI-based cat detection system with model inference, detection history, and WhatsApp alerts.",
  description:
    "A full-stack AI system that detects cats from camera input and sends WhatsApp alerts through Twilio.",
  problem:
    "Pet owners and caretakers often need quick alerts when a cat appears in a camera feed, but manual monitoring is tedious and easy to miss.",
  solution:
    "Meow combines a trained detection model, a FastAPI backend, SQLite storage, Hugging Face model hosting, and Twilio notifications so alerts can be sent automatically.",
  techStack: ["FastAPI", "TensorFlow", "SQLite", "Twilio", "Railway", "Hugging Face"],
  tags: ["AI / ML", "Full-Stack", "Backend"],
  features: [
    "Camera-based cat detection pipeline",
    "Prediction endpoints for model inference",
    "SQLite detection history storage",
  ],
  challenges: ["Data leakage", "Balancing model response speed with usable detection confidence"],
  insights: ["Always validate model performance on unseen data"],
  startDate: "2026",
  status: "Completed",
  imageUrl: "/project/meow_ui.png",
  featured: true,
  media: [{ type: "youtube", src: "https://youtube.com/embed/kaF1jJNUAdU", title: "demo video" }]
},
```

The IoT entry (`id: "iot"`) is the most complete example of a long-form case study, with a full problem, solution, role, features, challenges and insights. Use it as the model when Winnie gives you a lot of detail; use Minesweeper or PLC Interpreter as the model for a lightweight entry (description, techStack, tags, features, challenges, status).

### Checklist for a new project

1. Add the object to `projects` in the position Winnie wants (default: top, as newest).
2. Unique `id` and `slug`; slug is kebab-case and describes the project.
3. `tags` only from `projectTags`; add a new tag to `projectTags` only if Winnie asks.
4. Images copied into `public/project/`.
5. If featured on the home page, add the slug to `homeProjectHighlights` in `home.ts`.
6. The card counter (`NN / total`) is computed from the list being shown, so it needs no manual update.

---

## `experience.ts`

### Type

```ts
type ExperienceType = "technical" | "leadership" | "program";

type Experience = {
  id: string;            // short kebab-case or org name: "ai4all", "amex", "esports-sub-instructor"
  title: string;         // official role title, Title Case
  organization: string;  // short org name as people say it: "AI4ALL", "American Express", "WiCSE"
  type: ExperienceType;
  startDate: string;     // "Mon YYYY", e.g. "Jun 2026"
  endDate?: string;      // "Mon YYYY" or "Present"
  location?: string;     // "Remote" or "City, ST"
  // highlight?: string; // retired field, kept as a comment
  description: string[]; // 1-2 bullets
  skills: string[];      // 2-3 chips
  link?: string;
};
```

### Rules and style

- **type**: `technical` for engineering/ML work and internships, `leadership` for officer, coordinator, teaching and committee roles, `program` for selective programs and summits.
- **startDate** is used for sorting via `Date.parse("1 " + startDate)`, so it must be a parseable month + year. Use the 3-letter month ("Jan", "Jun", "Oct") followed by the year. Only `startDate` and `location` are displayed.
- **description**: usually 1 bullet, at most 2. One sentence each, past tense for finished roles and present/continuous tense ("Working on...", "Collaborate with...") for ongoing ones. Start with a verb, no "I". Mention the concrete thing (dataset, audience, event) and a real number only if Winnie gave one ("publish 120+ posts").
  - "Coordinated supervisor and volunteer communication, role assignments, and event-day logistics for a student-run Science Olympiad tournament."
  - "Working on a machine learning project focused on classifying IoT network traffic as benign or malicious."
  - "Selected for a six-week pre-internship program, engaging directly with senior executives and industry leaders to gain insights into BNY's operations and competing in a coding business case challenge."
- **skills**: 2-3 short Title Case chips, mixing technical and soft skills: `["Data Analysis", "Machine Learning", "Python"]`, `["Teaching", "Communication", "Student Support"]`, `["Content Strategy", "Community Outreach"]`.
- Add a `// highlight: "..."` comment line with a one-sentence summary, matching existing entries (it's not rendered, but Winnie keeps it for reference).
- Insert new entries at the top of the array (newest first), since the home page preview uses the first 4 items as written.

### Example

```ts
{
  id: "ai4all",
  title: "AI4ALL Ignite Fellow",
  organization: "AI4ALL",
  type: "technical",
  startDate: "May 2026",
  endDate: "Present",
  location: "Remote",
  // highlight: "Building ML models for IoT network intrusion detection.",
  description: [
    "Working on a machine learning project focused on classifying IoT network traffic as benign or malicious.",
    "Explored the TON_IoT dataset through feature analysis.",
  ],
  skills: ["Data Analysis", "Machine Learning", "Python"],
},
```

---

## `life.ts`

### Type

```ts
type LifeEntry = {
  id: string;        // snake_case or kebab-case, often a playful nickname: "bun_cat", "louse_kill_me", "melon_me"
  title: string;     // short caption-title
  date: string;      // "Mon YYYY" / "Month YYYY"; fuzzy is fine for old photos ("2008?", "idk")
  category: string;  // "View" | "Animals" | "People" | "STEM" | "Memory"
  imageUrl: string;  // "/life/<file>.jpg"
  thought: string;   // the caption, in Winnie's personal voice
  tags: string[];    // 1-3 lowercase-ish tags
};
```

### Rules and style

- Every life entry needs a photo in `public/life/`. Ask Winnie for it if it isn't provided. The `title` is used as the image alt text.
- Order is the display order: add new entries at the top, keeping the array newest first by `date`.
- **category**: reuse an existing one. `View` (places, sky, museums), `Animals` (Louise the cat, other pets), `People` (friends, family, clubs, celebrations), `STEM` (competitions, conferences, programs, volunteering), `Memory` (childhood photos). Category is not shown on the page today, but keep it consistent.
- **title**: short and natural, any case. Places can use `@`: "Stargazing @Paynes Praireie Preserve State Park", "Optics @UF State Tournament". Can be a joke or a feeling: "She looks annoyed but she loves me (I think)", "a little softie", "Aww".
- **thought**: the heart of the entry. First person, conversational, short (one word to about three sentences). Things that show up often:
  - one-word or near-empty captions: "stars", "stargazing.", "night sky."
  - affectionate jokes about her cat Louise: "She loves me right? I think she does. I hope she does..."
  - quiet reflection: "I like places where everything slows down for a second. The museum is definitely one of those."
  - gratitude and growth: "first conference in my life! So glad I was able to go with friends and connected with excellent individuals. I hope to keep learning and growing in this field."
  - emoticons and soft symbols: ":D", ":3", ":<", "~~", "♡", "lol"
  - cross-links to other parts of the site: "More details about Nook in the project page :D"
  Don't turn these into polished or professional sentences, and don't add facts Winnie didn't mention. If she gives you a caption, use it verbatim.
- **tags**: 1-3 short tags, mostly lowercase, reused across entries: `cat`, `dog`, `stars`, `quiet`, `travel`, `friend`, `family`, `life`, `memory`, `college`, `gratitude`, `career`. School-era tags use `HS` and `STEM`. Free-form tags are fine when they fit ("end of a chapter", "cafe").

### Examples

```ts
{
  id: "museum-note",
  title: "The Met Museum",
  date: "June 2026",
  category: "View",
  imageUrl: "/life/met.jpg",
  thought: "I like places where everything slows down for a second. The museum is definitely one of those.",
  tags: ["design", "quiet"]
},
{
  id: "bun_cat",
  title: "a little softie",
  date: "June 2026",
  category: "Animals",
  imageUrl: "/life/bun_cafe.jpg",
  thought: "Doesn't she looks like a screaming bun. Sooo cute ~~",
  tags: ["cat", "quiet", "cafe"]
},
{
  id: "optics",
  title: "Optics @UF State Tournament",
  date: "Apr 2024",
  category: "STEM",
  imageUrl: "/life/optics.jpg",
  thought: "2nd/final year of science olympiad, placed 5th in state for optics. truely learned alot and grateful for my teammates and coaches ♡",
  tags: ["STEM", "HS"]
},
```

### `diaryNotes`

Short strings shown as numbered cards under "something on my mind..". Mix of quotes, mottos, and small jokes about herself or the site: "Live Laugh Love LeetCode... 🫠", "There is a crack in everything, that's how the light gets in.", "GHC 2026...". Append new ones at the end; keep each to one line.

---

## `home.ts` and `contact.ts`

- `homeProjectHighlights`: array of project **slugs** (not ids) shown on the home page. Every slug must exist in `projects.ts`.
- `musicPicks`: Spotify embed URLs (`https://open.spotify.com/embed/...`) with a short casual `note` ("Background music for this page :D"). The floating music player is a signature feature, so don't remove it.
- `contact`: email, GitHub, LinkedIn, resume link. Only change these when Winnie gives the new value.
- `skills`: groups shown as the "technical shelf" on `/experience` and `/about`. Categories are "Languages", "Frontend", "Backend & Data", "AI / ML". Add a tool to an existing group rather than creating a new group, and only list tools she has actually used (a good signal is that it appears in a project's `techStack`).

---

## Quick "do / don't"

| Do | Don't |
| --- | --- |
| Use only facts Winnie provided | Invent metrics, awards, links or teammates |
| Keep professional copy modest and concrete | Use buzzwords, exclamation marks or emoji in projects/experience |
| Keep life captions casual, first person, emoticons welcome | Rewrite her casual captions into formal prose |
| Omit optional fields you can't fill | Fill fields with guesses |
| Leave commented-out lines alone | Delete or uncomment hidden text without being asked |
| Use exact tag/type/status values | Introduce new categories or tag spellings on your own |
