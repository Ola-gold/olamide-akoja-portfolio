export type CaseStudy = {
  slug: string;
  idx: string;
  title: string;
  img: string;
  role: string;
  year: string;
  tags: string[];
  summary: string;
  problem: string;
  constraints?: string;
  decisions: string[];
  outcome: string;
  reflection?: string;
};

export const CASES: CaseStudy[] = [
  {
    slug: "studio-os",
    idx: "01",
    title: "Studio OS",
    img: "/photos/work-1.jpg",
    role: "Product Manager · Parallel Lab",
    year: "June 2024 – Oct 2025",
    tags: ["Internal SaaS", "0→1", "Payments", "Roadmapping"],
    summary:
      "An internal SaaS system for bringing structure to studio operations — built toward external commercialisation.",
    problem:
      "Parallel Lab was running all client management through WhatsApp, shared documents, and informal conversations. As the studio grew, this was causing missed follow-ups, unclear payment tracking, and no single source of truth for project status. Studio OS was built to replace this — an internal client-management SaaS platform, with a roadmap toward external adoption and commercialisation.",
    constraints:
      "Team of one developer and one designer, both with competing client commitments. No external funding — the product had to be built without disrupting revenue-generating client work. Multi-currency requirements, role-based permissions, and payment integrations added significant technical complexity.",
    decisions: [
      "Compressed the delivery timeline from 8 weeks to 6 weeks across 3 sprints. The original estimate created too much schedule risk. Three focused sprints with clear milestone gates gave the team less room to drift and clearer checkpoints to catch problems early.",
      "Defined 10+ database entities before a line of code was written. Multi-currency support, payment splits, and role-based permissions were mapped into a structured technical schema with the developer before build started.",
      "Evaluated 5 African payment gateways before choosing a second integration. Paystack, Flutterwave, Monnify, Squad, and Stripe were assessed against API compatibility, currency coverage, settlement terms, and regulatory constraints.",
      "Authored a payment-abstraction architecture decision. Proposed an abstraction layer to support multiple payment providers without disrupting what was already live.",
      "Re-prioritised OTP/passwordless authentication as a Day 1 critical path dependency. Restructured the backlog once it was clear auth blocked nearly everything else.",
    ],
    outcome:
      "6-week delivery across 3 structured sprints. V2 feature set (team management, custom invoicing, manual payment reconciliation, mobile responsiveness) fully scoped with specs, sprint breakdowns, and risk/mitigation plans. Gating milestones and dogfooding criteria defined to validate feature readiness before release.",
    reflection:
      "This was the engagement where I learned the value of writing things down before building them. Every conversation with the developer that started with a document was faster and produced better output than every conversation that didn't. The PRD isn't overhead — it's the actual work.",
  },
  {
    slug: "squaredlab",
    idx: "02",
    title: "SquaredLAB Advisory",
    img: "/photos/work-3.jpg",
    role: "Product / Project Lead",
    year: "Dec 2025 – Feb 2026",
    tags: ["Web Presence", "Commercial Strategy", "HR"],
    summary:
      "Turning a professional services business into a clearer digital presence — multi-platform web + GTM strategy.",
    problem:
      "639 Holdings needed a multi-platform web presence for SquaredLAB Advisory, their HR consulting arm — a main site plus two programme subdomains. The challenge wasn't just building the sites; it was figuring out what the sites should say and how the brand should be positioned in a crowded Nigerian HR consulting market.",
    constraints:
      "Stakeholder vision was clear on ambition but vague on specifics — the brief needed to be extracted through discovery. Active live engagement with scope that kept evolving as the client's thinking evolved. Commercial terms needed to hold while the relationship and scope both grew.",
    decisions: [
      "Led competitive research to surface a differentiation strategy before design started. The gap found — most competitors compete on credentials rather than outcomes — became the core of SquaredLAB's value proposition.",
      "Defined a phased roadmap before committing to full scope. Initial platform first, brand identity and social media expansion second.",
      "Proactively routed out-of-scope requests through a formal pricing process.",
      "Identified and closed a ₦800K expansion through proactive account growth. The brand identity and social media work wasn't in the original brief — identified through the relationship and proposed as a natural next phase.",
    ],
    outcome:
      "Initial phase closed at ₦1.75M · ₦800K expansion closed through proactive account development. Go-to-market content strategy delivered: platform selection, content pillars, tone of voice, phased launch calendar. Structured evaluation of a new product concept the client proposed, with recommendation and phased validation approach.",
    reflection:
      "This engagement taught me that product discovery and commercial strategy aren't separate things. The research I did to define the product also defined what made the client's business worth investing in.",
  },
  {
    slug: "redapp",
    idx: "03",
    title: "Redapp — Heirs Technologies",
    img: "/photos/work-4.jpg",
    role: "UX Researcher",
    year: "Jan – Feb 2026",
    tags: ["UX Research", "Fintech", "Mixed-methods"],
    summary:
      "Research and decision-making for a major African bank's app redesign — 8 interviews, 3 field studies, 102-person survey in 3 weeks.",
    problem:
      "Heirs Technologies was leading the redesign of a major African bank's mobile application. Design decisions needed to be grounded in real user data — not internal assumptions — so that when stakeholders pushed back, the team had evidence to defend their choices.",
    constraints:
      "3-week engagement window with three formally approved milestones. Research had to cover both qualitative depth and quantitative validation. Findings needed to translate directly into product direction, not just observations.",
    decisions: [
      "Designed a mixed-methods research plan from the start. 8 moderated usability interviews, 3 contextual field studies with informal traders and POS operators, and a 102-person survey.",
      "Ran contextual field studies with traders and POS operators specifically. Underrepresented in the typical research pool but a significant share of the bank's actual customers.",
      "Benchmarked 5 competing fintech and banking apps — Kuda, Opay, PalmPay, GTBank, Zenith — to show where the bank's app was behind the category.",
      "Translated insights directly into design direction. The finding that users equate fewer steps with better usability became a specific argument for flattening the app's navigation.",
    ],
    outcome:
      "3 milestones delivered on schedule within a 3-week window. Leadership-ready research report, prioritised usability insights, IA recommendations, user flows, and wireframes — all traceable back to observed behaviour. Design team had data to defend decisions when challenged by stakeholders.",
    reflection:
      "Synthesis is the hardest part of research — not the interviews. Anyone can ask questions. The skill is converting a week of conversations and 102 survey responses into three or four insights that actually change what a team builds.",
  },
  {
    slug: "parallel-lab",
    idx: "04",
    title: "Parallel Lab",
    img: "/photos/work-5.jpg",
    role: "Co-founder · Venture / Studio",
    year: "2023 – Now",
    tags: ["Venture", "Studio", "Brand & Product"],
    summary:
      "A studio I co-run, working across brand, websites and digital products — product, business development, client communication and delivery.",
    problem:
      "Parallel Lab works with founders and small businesses doing $5K–100K/month who need their brand to actually look and sound like them — not a template. The work is brand, websites and digital products, but the real question is how to run a studio that can do all of that without becoming a factory.",
    constraints:
      "Small team, no outside funding, competing client commitments, and the need to sell, scope, design, build and support — often at the same time.",
    decisions: [
      "Defined the studio's positioning around founders and small businesses rather than competing on volume.",
      "Own business development, scoping and client communication — translating vague briefs into deliverables.",
      "Lead product thinking on client projects while coordinating design and development.",
      "Built Studio OS as an internal system to bring structure to operations — now being productized toward external commercialisation.",
    ],
    outcome:
      "Ongoing venture. Selected client work includes SquaredLAB Advisory and others. Studio operations now run through Studio OS with defined milestones and dogfooding criteria. Learning in public about what it means to build and operate a creative business.",
    reflection:
      "The interesting story isn't 'we made this website.' It's what it means to build and operate a creative business — selling, scoping, delivering, and learning.",
  },
  {
    slug: "mind2muscle",
    idx: "05",
    title: "Mind2Muscle Personal Training",
    img: "/photos/work-2.jpg",
    role: "Product Manager",
    year: "June 2025 – Aug 2025",
    tags: ["Web Build", "Fitness", "Scope Management"],
    summary:
      "Scoping and shipping under constraints — 5–6 page conversion site delivered in 6 weeks with zero scope creep.",
    problem:
      "Mind2Muscle is an international fitness and personal training brand. They needed a professional website built to convert visitors into coaching clients — but had no defined scope, no success metrics, and no clear process for how to get from brief to launch.",
    constraints:
      "Fixed 6-week delivery window with a cross-functional team of one designer and one developer. International client (different time zone) with strong opinions on brand but limited technical fluency. No prior website or content infrastructure to build from.",
    decisions: [
      "Defined measurable success criteria at kickoff. Before design started: 500+ monthly visits, client conversion from the site, and brand visibility in the client's target market.",
      "Built structured sign-off gates between phases. Discovery → IA → Design → Development each required formal client approval before moving forward.",
      "Ran a 2-week design sprint, then a 4-week development phase. Strictly sequential phases meant development built against a fully approved, stable design.",
    ],
    outcome:
      "Delivered a 5–6 page production website within the 6-week window. Full handover documentation and CMS training delivered. Zero scope creep — all mid-project requests evaluated against the original brief.",
    reflection:
      "The biggest lesson: a clearly defined success metric changes how a team makes every decision. When the designer knew the goal was conversion, not just aesthetics, every layout choice had a different frame.",
  },
];
export const LAB_EXPERIMENT = {
  slug: "ai-intake",
  title: "AI Client-Intake Automation",
  img: "/photos/pf-9.jpg",
  summary:
    "An experiment in using AI to turn an otherwise manual client-intake process into a more structured workflow.",
  meta: "Tally · Make · Gmail · Sheets · Kit · Calendly · 4 wks · ₦0",
  href: "/lab/ai-intake",
  problem:
    "Coaches and consultants are losing leads because their intake process is manual and slow. A potential client fills out a form, waits hours for a reply, goes cold. This system fixes that.",
  constraints:
    "No prior experience with Make.com or automation tooling. All tools had to be free tier — zero budget. Had to work end-to-end without manual intervention after setup.",
  decisions: [
    "Client fills a Tally intake form.",
    "Make.com triggers instantly — Gmail fires a welcome email within 2 seconds.",
    "Contact is logged in Google Sheets automatically.",
    "Contact is added to Kit with a tag, triggering a 48-hour follow-up email if they haven't booked.",
    "Calendly handles booking, confirmation, and reminders.",
    "Independently resolved 3 integration failures: Make couldn't see Tally fields until a live test ran; Kit's free tier locked the first email to a 1-day delay, so Email 1 was routed through Gmail instead; and a missing email mapping in the Kit module was diagnosed and remapped.",
  ],
  outcome:
    "Working, documented automation connecting 6 tools end-to-end. Packaged as a public case study and downloadable guide used as a lead-generation asset. Built and shipped in 4 weeks with zero budget.",
  reflection:
    "I wanted to understand AI workflow automation from the inside — not just know that it's possible, but have built it myself and fixed it when it broke.",
  builtWhile: "Built while learning AI automation.",
};

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
