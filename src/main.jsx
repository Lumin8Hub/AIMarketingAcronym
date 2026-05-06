import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, Home, Maximize2, Menu, X } from 'lucide-react';
import './styles.css';

const slides = [
  {
    "number": 1,
    "title": "Title Slide",
    "section": "0 — OPENING",
    "headline": "The State of AI for Marketing in 2026",
    "subhead": "From Experimental Adoption to the AI-Native Operating System",
    "visual": "Dark navy full-bleed background. Large title in Georgia 60pt white. Subhead in 24pt ice blue. Single small coral square in lower-left as the visual motif anchor. No accent lines.",
    "note": "Set the frame: this is not a hype deck. This is a synthesis of where marketing actually is in May 2026 — what's working, what's failing, and what to do about it.",
    "content": [
      "Prepared May 2026",
      "Set the frame: this is not a hype deck. This is a synthesis of where marketing actually is in May 2026 — what's working, what's failing, and what to do about it."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 2,
    "title": "Why This Deck Exists",
    "section": "0 — OPENING",
    "headline": "The margin for error has collapsed",
    "subhead": "",
    "visual": "Right-side chart — a simple two-bar comparison: \"Traditional Organic Conversion\" vs. \"AI-Referred Conversion\" with the AI bar 4.4× taller, in coral. Source attribution in 10pt below the chart.",
    "note": "Less traffic, dramatically higher quality. The scoreboard has changed; budgets and tactics haven't caught up at most companies.",
    "content": [
      "93% of Google AI Mode sessions end with zero clicks",
      "Organic CTR on AI Overview queries down 34.5–61%",
      "But: AI-referred visitors convert at 4.4× the rate of traditional organic",
      "Less traffic, dramatically higher quality. The scoreboard has changed; budgets and tactics haven't caught up at most companies."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 3,
    "title": "How to Read This Deck",
    "section": "0 — OPENING",
    "headline": "Twelve domains. One operating system.",
    "subhead": "",
    "visual": "12 small rounded cards, each with a numbered chip in coral and a 1-line descriptor. Acts as a deck map.",
    "note": "These aren't twelve workstreams — they're the connected components of the AI-native marketing operating system. Each section ends with a \"Do this Monday\" action.",
    "content": [
      "A 3×4 grid of section icons + labels:",
      "These aren't twelve workstreams — they're the connected components of the AI-native marketing operating system. Each section ends with a \"Do this Monday\" action."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 4,
    "title": "Section Divider: The Strategic Model",
    "section": "1 — THE STRATEGIC MODEL",
    "headline": "01 — The AI-Native Marketing Operating System",
    "subhead": "From task assistants to systemic orchestration",
    "visual": "Dark navy background. Large numeral \"01\" in coral, 200pt, low-opacity behind the title. Subhead in 20pt ice blue.",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 5,
    "title": "The Agentic Leap",
    "section": "1 — THE STRATEGIC MODEL",
    "headline": "Marketing crossed from \"AI tools\" to \"AI operating system\"",
    "subhead": "",
    "visual": "A horizontal arrow flowing left to right under the columns. Below: a 1-line callout in italic coral — *\"This shift is what unlocks the reported up to 340% Y1 ROI for mature implementations.\"*",
    "note": "The \"agentic leap\" is structural. It changes who does what — not just which tools are used.",
    "content": [
      "Left — 2023–2024 (Experimental): Standalone copy generators, ad-hoc image tools, prompt libraries shared in Slack, \"AI sloppiness\" widely tolerated.",
      "Right — 2026 (Agentic): AI orchestrates end-to-end workflows; humans set boundaries and supply context; centralized governance + decentralized execution.",
      "The \"agentic leap\" is structural. It changes who does what — not just which tools are used."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 6,
    "title": "From Prompt Engineering to Context Architecture",
    "section": "1 — THE STRATEGIC MODEL",
    "headline": "The prestige role isn't \"Prompt Engineer.\" It's \"Context Engineer.\"",
    "subhead": "",
    "visual": "Left side: a \"context architecture\" diagram — five labeled inputs (CRM, Product Feed, Brand Voice Doc, Performance History, Customer Research) flowing arrows into a central \"LLM/Agent\" node, which then flows out to \"Channels.\"",
    "note": "If your AI sounds generic, you don't have a model problem. You have a context architecture problem.",
    "content": [
      "A two-row comparison card:",
      "Row 1 — Prompt Engineering (commoditized): Clever queries → generic outputs → audiences ignore them.",
      "Row 2 — Context Architecture (the new bar): Pipelines connecting CRM, product feeds, historical performance, and brand voice docs directly into the model → outputs grounded in proprietary truth.",
      "If your AI sounds generic, you don't have a model problem. You have a context architecture problem."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 7,
    "title": "The Four Repurposed Pillars of Marketing",
    "section": "1 — THE STRATEGIC MODEL",
    "headline": "Every foundational pillar got rewired",
    "subhead": "",
    "visual": "Each card has a small coral icon (database, paint palette, gear, target) in a navy circle, top-left.",
    "note": "This is the four-line mental model for everything that follows.",
    "content": [
      "A 2×2 grid of \"before → after\" cards:",
      "Data: Retroactive reporting → real-time predictive fuel for bidding and routing",
      "Creative: Static finished assets → dynamic variables tested in millions of permutations",
      "Automation: Trigger-based rules → predictive next-best-action workflows",
      "Targeting: Manual demographic toggles → audience signals fed to algorithmic discovery",
      "This is the four-line mental model for everything that follows."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 8,
    "title": "Section Takeaway: Strategic Model",
    "section": "1 — THE STRATEGIC MODEL",
    "headline": "Do this Monday",
    "subhead": "",
    "visual": "Three numbered chip cards, each with a tight 2-sentence action.",
    "note": "",
    "content": [],
    "isDivider": false,
    "isAction": true
  },
  {
    "number": 9,
    "title": "Section Divider: Discoverability",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "02 — Generative Engine Optimization",
    "subhead": "Optimizing to be cited, not just ranked",
    "visual": "Dark navy with large \"02\" in coral, low-opacity.",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 10,
    "title": "The Zero-Click Economy in One Chart",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "The traffic equation has inverted",
    "subhead": "",
    "visual": "Below the stats, a stacked bar showing \"Traffic Volume\" (down) vs. \"Conversion Quality\" (up) in a clear visual inversion. Caption in 12pt italic: *\"The winners get a smaller, much higher-quality clickstream.\"*",
    "note": "This is the single most important slide. The economics of organic have flipped — fewer clicks, but those clicks are gold.",
    "content": [
      "Three large stat callouts in a row (60–72pt numerals):",
      "93% — Google AI Mode sessions ending with no click",
      "4.4× — Conversion lift from AI-referred visitors vs. traditional organic",
      "35% — Organic CTR boost for pages cited inside AI Overviews",
      "This is the single most important slide. The economics of organic have flipped — fewer clicks, but those clicks are gold."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 11,
    "title": "Share of Model: The New North Star",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Stop measuring rank. Start measuring \"Share of Model.\"",
    "subhead": "",
    "visual": "",
    "note": "Most CMOs cannot tell you their SoM today. By Q4 2026, it will be a board-level metric.",
    "content": [
      "Definition box at top — *\"Share of Model (SoM): the frequency and prominence with which your brand is cited in AI-generated responses, relative to competitors, across the foundation models.\"*",
      "A simulated \"Share of Model\" dashboard mockup — a horizontal bar chart showing 5 competitor brands, with citation rates across ChatGPT, Gemini, Perplexity, and Claude as 4 stacked color segments.",
      "Most CMOs cannot tell you their SoM today. By Q4 2026, it will be a board-level metric."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 12,
    "title": "The Four Pillars of GEO",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Move through the AI visibility funnel: discover → understand → recognize → cite",
    "subhead": "",
    "visual": "Funnel narrows left to right. Each column has a small icon and a 1-line \"fail mode\" in coral underneath: (\"blocked in robots.txt\" / \"buried in JS\" / \"weak schema\" / \"no third-party validation\").",
    "note": "Most teams are working on pillar 2 only. The big wins are on 1 and 4.",
    "content": [
      "Four-column funnel diagram (each column is a pillar):",
      "Most teams are working on pillar 2 only. The big wins are on 1 and 4."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 13,
    "title": "Pillar 1: Technical GEO",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Three crawler types — block one, lose visibility forever",
    "subhead": "",
    "visual": "",
    "note": "This is the single highest-leverage technical fix in the deck. A 15-minute robots.txt audit can recover citation share within weeks.",
    "content": [
      "Below table — callout in coral: *\"~70% of lost ChatGPT citations come from sites that blocked training bots and accidentally blocked user bots too.\"*",
      "This is the single highest-leverage technical fix in the deck. A 15-minute robots.txt audit can recover citation share within weeks."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 14,
    "title": "Pillar 1 (continued): The Curl Test",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "If your homepage renders as `<div id=\"root\"></div>` to a curl request, you're invisible",
    "subhead": "",
    "visual": "A side-by-side \"browser view vs. curl view\" mockup. Left shows a rich product page; right shows an empty HTML shell.",
    "note": "This single slide will trigger an emergency conversation with your dev team. That's the point.",
    "content": [
      "Left — The Problem: AI user bots operate under tight latency budgets. They don't render JavaScript. SPAs, dynamic accordions, and JS-loaded pricing tables are functionally invisible.",
      "Right — The Fix: Server-Side Rendering (SSR). Critical content in raw HTML. TTFB < 600ms. HTML payload < 1MB. Response < 3 seconds.",
      "This single slide will trigger an emergency conversation with your dev team. That's the point."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 15,
    "title": "Pillar 2: Content GEO — Anatomy of a Citation",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Front-load. Structure. Repeat.",
    "subhead": "",
    "visual": "A vertical rectangle representing a webpage with the three zones color-coded and percentages overlaid. Tactile and immediately intuitive.",
    "note": "",
    "content": [
      "A diagram of an \"ideal\" citable page, broken into zones:",
      "Top 30% (44.2% of all citations come from here): TL;DR + direct answer",
      "Middle 30% (31.1%): Supporting evidence, data tables",
      "Bottom 30% (24.7%): Context, exceptions, related entities",
      "Side callouts:",
      "68.7% of cited pages use strict H1→H3 hierarchy",
      "30–40% visibility lift from structured lists & tables",
      "2.1× more citations for pages with claim-rich intros"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 16,
    "title": "Pillar 2 (continued): The Sub-Query Strategy",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "AI doesn't search for keywords. It fans queries out.",
    "subhead": "",
    "visual": "A single prompt bubble at the top, three branching arrows, three sub-query bubbles, all flowing into a single \"answer\" bubble at the bottom.",
    "note": "",
    "content": [
      "A flow diagram:",
      "User prompt (avg. 23 words): \"Most secure cloud storage for European medical data in 2026\"",
      "Splits into fan-out sub-queries:",
      "\"cloud storage encryption standards\"",
      "\"European healthcare data sovereignty laws 2026\"",
      "\"medical data compliance platforms\"",
      "Final answer: Synthesized from sources covering all three sub-queries",
      "*\"Win the cluster, not the keyword. Build semantic cocoons, not pages.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 17,
    "title": "Pillar 2 (continued): The Multipliers",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Four content levers with measurable citation impact",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Four stat cards in a 2×2 grid:",
      "4.3× — Visibility multiplier for content over 20,000 characters",
      "3.2× — Citation multiplier from a 30-day refresh cycle",
      "2.8× — Citations on product pages with original benchmarks",
      "+40% — Domain visibility lift from proprietary data (Princeton GEO Framework)",
      "Below, italic line: *\"AI-cited content averages 25.7% fresher than traditional organic results.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 18,
    "title": "Pillar 3: Entity GEO",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Make the machine understand exactly what you are",
    "subhead": "",
    "visual": "A small JSON-LD code snippet on the left showing `@type: Organization` schema; a concept map on the right linking the brand entity to industry, geography, and category nodes.",
    "note": "",
    "content": [
      "Two-column:",
      "Left — Schema markup as a machine overlay: 61% of AI-cited pages use comprehensive schema. Organization, Article, FAQPage, Dataset, Product schemas all matter.",
      "Right — Entity clarity: Use precise entity names, roles, locations, and relationships consistently across your content. Example: *\"Toronto Business Development Centre (TBDC) is a non-profit accelerator in Toronto, Ontario focused on government-funded entrepreneurship programs.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 19,
    "title": "Pillar 4: Brand Authority GEO (Multiplier Marketing)",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Off-page signals decide whether AI trusts you enough to cite",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "A circular diagram of the \"external validation graph\" with the brand at the center and spokes labeled:",
      "Wikipedia / Wikidata",
      "High-authority listicles (\"best of,\" \"top tools\")",
      "Reddit threads (heavily moderated subs)",
      "LinkedIn thought leadership",
      "Crunchbase / G2 / Capterra",
      "Major digital publishers",
      "Podcast mentions",
      "*\"Your PR strategy IS your AI strategy now. Earned mentions train the models that will recommend you.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 20,
    "title": "Section Takeaway: Discoverability",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Do this Monday",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": false,
    "isAction": true
  },
  {
    "number": 21,
    "title": "Section Divider: Paid Search",
    "section": "3 — PAID SEARCH",
    "headline": "03 — Paid Search Is Now Algorithmic Media Buying",
    "subhead": "Surrender control. Engineer the inputs.",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 22,
    "title": "The Inversion: Inputs > Levers",
    "section": "3 — PAID SEARCH",
    "headline": "The paid search job changed",
    "subhead": "",
    "visual": "A coral \"do not touch\" tape graphic across the bottom of the \"old job\" column.",
    "note": "",
    "content": [
      "Two-column comparison:",
      "Old job: Manual keyword bids, demographic toggles, hourly tweaks, granular campaign segmentation",
      "New job: Asset diversity, audience signals, value-based bidding, clean conversion data, *resist tinkering*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 23,
    "title": "The 30-Conversion Rule and the Consolidation Imperative",
    "section": "3 — PAID SEARCH",
    "headline": "Over-segmentation is the #1 reason Performance Max underperforms",
    "subhead": "",
    "visual": "",
    "note": "Most underperforming PMax setups have 8–15 micro-campaigns. Consolidation alone often unlocks 15–30% performance gains.",
    "content": [
      "Three large stat callouts:",
      "30+ — Minimum monthly conversions per campaign for the algorithm to exit learning",
      "20–30 — Recommended PMax/AI Max consolidation floor",
      "15% — Maximum bid/budget change per few-day window once stable",
      "A small visual showing \"10 fragmented campaigns → 3 consolidated campaigns\" with arrows.",
      "Most underperforming PMax setups have 8–15 micro-campaigns. Consolidation alone often unlocks 15–30% performance gains."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 24,
    "title": "Feeding the Algorithm Real Conversions",
    "section": "3 — PAID SEARCH",
    "headline": "Junk in, junk out — at machine scale",
    "subhead": "",
    "visual": "",
    "note": "If your AI is being trained on bot fills and tire-kickers, it will go find more of them — fast.",
    "content": [
      "Funnel diagram:",
      "Top: Form fills (mixed quality)",
      "Middle: Qualified leads (CRM-validated)",
      "Bottom: Closed-won revenue",
      "Around the funnel: Three callouts:",
      "\"Optimize toward Target ROAS or Conversion Value, not Target CPA\"",
      "\"Send closed-won data back via offline conversion tracking (OCT)\"",
      "\"Implement enhanced conversions and CAPI for first-party signal pass-back\"",
      "If your AI is being trained on bot fills and tire-kickers, it will go find more of them — fast."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 25,
    "title": "Section Divider: Paid Social",
    "section": "4 — PAID SOCIAL",
    "headline": "04 — Creative Is the New Targeting",
    "subhead": "Meta Advantage+, TikTok Smart+, LinkedIn Accelerate",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 26,
    "title": "Creative Velocity Has Replaced Audience Strategy",
    "section": "4 — PAID SOCIAL",
    "headline": "When the algorithm picks the audience, your creative library is your edge",
    "subhead": "",
    "visual": "A small \"creative testing matrix\" graphic — a 4×4 grid of thumbnail placeholders in different formats (UGC, founder-led, static carousel, polished production) with green/red performance overlays.",
    "note": "",
    "content": [
      "Three large stat callouts:",
      "15–50 — Active creative variants per Advantage+ campaign",
      "+18% — Average ROAS lift from AI chat signal targeting on Meta",
      "11–22% — Reported ROAS range for advertisers fully embracing automation"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 27,
    "title": "The CAPI Non-Negotiable",
    "section": "4 — PAID SOCIAL",
    "headline": "Without server-side conversion data, the AI is flying blind",
    "subhead": "",
    "visual": "",
    "note": "If you remember nothing else from this section: CAPI is no longer optional.",
    "content": [
      "Diagram showing two paths:",
      "Path A (broken): Browser-side pixel only → cookie loss, ATT impact, signal degradation → AI optimizes against shadows",
      "Path B (correct): Server-side CAPI + offline conversions → privacy-compliant business signal → AI optimizes against actual revenue",
      "If you remember nothing else from this section: CAPI is no longer optional."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 28,
    "title": "B2B on LinkedIn: Account-Influence, Not Persona-Targeting",
    "section": "4 — PAID SOCIAL",
    "headline": "LinkedIn became an account-level intent activation channel",
    "subhead": "",
    "visual": "A small \"buying group\" diagram — six avatar circles connected to a single account node.",
    "note": "",
    "content": [
      "Three best-practice cards:",
      "Buying group, not buyer: Design for the entire 6–10 person committee",
      "Intent-triggered: Activate based on real research behavior + third-party intent, not calendar",
      "Coordinated: Sync ad exposure with SDR outbound and direct mail for omnipresence"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 29,
    "title": "Section Divider: Organic & Community",
    "section": "5 — ORGANIC SOCIAL & COMMUNITY",
    "headline": "05 — Where Humans Win",
    "subhead": "Authenticity as a competitive moat in an AI-saturated feed",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 30,
    "title": "The Paradox: AI Buys the Ads, Humans Carry the Brand",
    "section": "5 — ORGANIC SOCIAL & COMMUNITY",
    "headline": "Audiences are fatigued by synthetic content — and they can tell",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Two-column:",
      "Left — What's losing: Polished corporate posts, fully synthetic avatars, generic AI-written captions",
      "Right — What's winning: Founder-led video, employee advocacy, lo-fi UGC, expert POV carousels, substantive Reddit/community participation",
      "*\"Employee posts on LinkedIn receive ~2× the engagement of company pages.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 31,
    "title": "Social Platforms ARE Search Engines",
    "section": "5 — ORGANIC SOCIAL & COMMUNITY",
    "headline": "Gen Z and Millennials search TikTok, Instagram, and YouTube for products before Google",
    "subhead": "",
    "visual": "A vertical phone mockup on the right showing a TikTok-style frame with annotations pointing to each optimization zone.",
    "note": "",
    "content": [
      "Three-column tactical guide:",
      "Verbalize keywords in the first 3 seconds — AI transcribes spoken audio",
      "Embed keyword-rich text overlays — AI parses on-screen text",
      "Write descriptive long-form captions and alt text — Powers native social search ranking"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 32,
    "title": "The AI Ranking Signal Cheat Sheet by Platform",
    "section": "5 — ORGANIC SOCIAL & COMMUNITY",
    "headline": "Each platform's algorithm rewards a different primary signal",
    "subhead": "",
    "visual": "",
    "note": "Same content, different cuts per platform — that's the workflow.",
    "content": [
      "Same content, different cuts per platform — that's the workflow."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 33,
    "title": "Section Divider: Content",
    "section": "6 — CONTENT MARKETING",
    "headline": "06 — Defeating \"AI Slop\"",
    "subhead": "AI-assisted, not AI-generated",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 34,
    "title": "The 80/20 Content Workflow",
    "section": "6 — CONTENT MARKETING",
    "headline": "AI does 80% of the lifting. Humans deliver the last 20% — where the value lives.",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Horizontal workflow diagram with 6 stages:",
      "*\"Teams running this workflow report 60–80% reductions in publishing time — without losing originality.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 35,
    "title": "The Originality Premium",
    "section": "6 — CONTENT MARKETING",
    "headline": "What earns AI citations is what earns human readers: original signal",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Three card stack:",
      "Proprietary research — Surveys, cohort analyses, anonymized customer data",
      "Practitioner POV — First-person experience, contrarian takes, named expert quotes",
      "Original benchmarks — Performance comparisons, structured data tables LLMs can pull cleanly",
      "*\"Generic summaries lose to original data — in search, in social, and in AI answer engines.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 36,
    "title": "Section Divider: Lifecycle",
    "section": "7 — LIFECYCLE, EMAIL, SMS",
    "headline": "07 — Predictive Lifecycle Marketing",
    "subhead": "Klaviyo, Braze, HubSpot, Iterable, Customer.io — all running on embedded AI",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 37,
    "title": "Predictive Segmentation, Not Calendar Sends",
    "section": "7 — LIFECYCLE, EMAIL, SMS",
    "headline": "RFM is now multiplied by AI predictive scoring",
    "subhead": "",
    "visual": "A simple line chart showing two send strategies — \"Calendar Drops\" (flat revenue) vs. \"AI-Triggered\" (rising revenue) over a 90-day window.",
    "note": "",
    "content": [
      "Two-column:",
      "Left — What AI predicts in real time: Churn risk, next-purchase likelihood, channel preference, ideal send window, cross-sell affinity",
      "Right — What changes operationally: Workflows trigger on individual statistical receptivity — not the marketing calendar",
      "*\"Klaviyo data shows 18–45% higher revenue per recipient for brands using AI-driven segments.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 38,
    "title": "Privacy as a Lifecycle Constraint",
    "section": "7 — LIFECYCLE, EMAIL, SMS",
    "headline": "Less volume. More relevance. Zero-party data wins.",
    "subhead": "",
    "visual": "A small \"send frequency\" chart showing volume going down while revenue per recipient goes up — the inverse correlation that defines the modern lifecycle program.",
    "note": "",
    "content": [
      "Three principles:",
      "Zero-party first: Information the customer explicitly volunteers > inferred behavior",
      "Quality over volume: Fewer sends, higher-impact moments",
      "Channel optimization: AI dynamically picks email vs. SMS vs. RCS per user, per moment"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 39,
    "title": "Section Divider: CRM & RevOps",
    "section": "8 — CRM, SALES, REVOPS",
    "headline": "08 — Marketing and Sales Have Merged",
    "subhead": "AI dissolved the SLA wars",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 40,
    "title": "The Death of Manual Lead Scoring",
    "section": "8 — CRM, SALES, REVOPS",
    "headline": "Point-based scoring is gone. Behavior-based AI scoring is in.",
    "subhead": "",
    "visual": "A small 2×2 matrix — \"Fit Score\" on the X-axis, \"Intent Score\" on the Y-axis, with quadrants labeled (Hot, Nurture, Disqualify, Educate).",
    "note": "",
    "content": [
      "Two-column comparison:",
      "Old: \"+5 points for whitepaper download\" — human-assigned, biased, stale",
      "New: AI models trained on the last 50 closed-won/closed-lost deals — separates ICP \"fit\" from behavioral \"intent\""
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 41,
    "title": "AI Pipeline Builders and the Coordinated Response",
    "section": "8 — CRM, SALES, REVOPS",
    "headline": "When intent fires, everything activates at once",
    "subhead": "",
    "visual": "",
    "note": "This is what \"marketing-sales unified\" actually looks like in practice in 2026 — not a meeting, an automated system.",
    "content": [
      "Trigger-and-response diagram:",
      "Trigger: Account hits intent threshold (6sense, Apollo, Unify)",
      "Simultaneous response:",
      "Display ads activate against the buying group",
      "Personalized email sequence fires to multiple personas",
      "SDR alert with full context drops in the rep's CRM",
      "Direct mail trigger to top 2 buyers",
      "This is what \"marketing-sales unified\" actually looks like in practice in 2026 — not a meeting, an automated system."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 42,
    "title": "AI Sales Enablement: Gong, Lavender, and CRM Agents",
    "section": "8 — CRM, SALES, REVOPS",
    "headline": "AI listens, summarizes, drafts, updates — closed-loop data finally works",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Four-card row:",
      "Listen: Call analysis, deal-risk detection",
      "Summarize: Auto-generated meeting notes, CRM field updates",
      "Draft: Personalized follow-ups, proposal scaffolds",
      "Feed back: Real conversion data flows to ad platforms for optimization"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 43,
    "title": "Conversational AI: From Cost Center to Growth Channel",
    "section": "9 — CONVERSATIONAL AI AS MARKETING",
    "headline": "Support conversations are an unmined first-party data goldmine",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Two-column:",
      "Left — What changed: Modern agents are grounded in the proprietary knowledge base. They resolve, return, troubleshoot — and escalate gracefully.",
      "Right — What it unlocks: Sentiment analysis on tickets surfaces objections marketing can address upstream. AI agents recognize cross-sell moments mid-conversation.",
      "*\"The Chevy dealership that 'sold' a car for $1: what happens when you skip context architecture and escalation guardrails.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 44,
    "title": "Section Divider: Measurement",
    "section": "10 — MEASUREMENT",
    "headline": "09 — The Suite of Truth",
    "subhead": "MTA is dead. Long live the triangulated measurement stack.",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 45,
    "title": "The Three Legs of Modern Measurement",
    "section": "10 — MEASUREMENT",
    "headline": "No single method is sufficient. Triangulate.",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Triangle diagram with three labeled vertices:",
      "MMM (Marketing Mix Modeling): Macro view, cross-channel impact, accounts for seasonality. AI made it dynamic and always-on.",
      "Incrementality Testing: The causal \"would this have happened anyway?\" gold standard. Geo-lift, holdouts, micro-experiments.",
      "Server-Side Digital Attribution: CAPI, enhanced conversions — feeds the algorithms, not the boardroom.",
      "Italic line below: *\"Together: the Suite of Truth. Apart: misleading vanity metrics.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 46,
    "title": "KPI Benchmarks: B2B vs. B2C (May 2026)",
    "section": "10 — MEASUREMENT",
    "headline": "Anchor your performance to the current bar",
    "subhead": "",
    "visual": "",
    "note": "Use this slide as a sanity check for your own dashboard. If you're an outlier, it's either a strategic advantage or a measurement bug.",
    "content": [
      "Use this slide as a sanity check for your own dashboard. If you're an outlier, it's either a strategic advantage or a measurement bug."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 47,
    "title": "Section Divider: Governance",
    "section": "11 — GOVERNANCE & RISK",
    "headline": "10 — The Compliance Cliff",
    "subhead": "EU AI Act enforcement: August 2, 2026",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 48,
    "title": "The August 2, 2026 Deadline",
    "section": "11 — GOVERNANCE & RISK",
    "headline": "Mandatory disclosure of AI-generated content for any brand touching EU users",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Three-column requirements grid:",
      "Mark synthetic content in machine-readable format (audio, image, video, text)",
      "Disclose deepfakes and certain AI content to end users with prominent labels — not buried metadata",
      "Applies extraterritorially — US/global brands marketing to EU citizens are in scope regardless of HQ location",
      "*\"State-level laws in California and New York extend similar requirements to synthetic performers and AI likeness rights.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 49,
    "title": "The \"Shadow AI\" Problem",
    "section": "11 — GOVERNANCE & RISK",
    "headline": "Your team is using AI tools you haven't approved",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Four-pillar AI Acceptable Use Policy:",
      "*\"This is the lowest-difficulty, highest-risk-mitigation action in the entire deck.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 50,
    "title": "Section Divider: Org Design",
    "section": "12 — ORG DESIGN & STACK",
    "headline": "11 — The AI-Native Marketing Org",
    "subhead": "Centralize the foundation. Decentralize the creativity.",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 51,
    "title": "The Hybrid Org Model",
    "section": "12 — ORG DESIGN & STACK",
    "headline": "Two distinct poles, working in concert",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Two-column diagram:",
      "Left — Centralized AI Governance Core (RevOps/MOps): Owns CRM data hygiene, brand voice doc, product knowledge, compliance, vendor procurement",
      "Right — Decentralized Execution (channel marketers): Deploy AI agents inside the sandbox; rapid local iteration without breaking governance",
      "Center role highlight (coral box): *\"The Context Engineer / Agent Orchestrator — the 2026 prestige role. Not a prompt writer; a data pipeline architect.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 52,
    "title": "The Recommended Tech Stack (2026)",
    "section": "12 — ORG DESIGN & STACK",
    "headline": "Four interoperable layers — and what to avoid in each",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 53,
    "title": "Section Divider: Roadmap",
    "section": "13 — ROADMAP & ACTION",
    "headline": "12 — The Path Forward",
    "subhead": "90 days, 12 months, and what to do Monday",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": true,
    "isAction": false
  },
  {
    "number": 54,
    "title": "The 90-Day Pilot Roadmap",
    "section": "13 — ROADMAP & ACTION",
    "headline": "Three phases. Real outcomes. No moonshots.",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Three-column timeline:",
      "Days 1–30 — Groundwork & Governance: Stack audit, AI committee, AUP published, brand voice locked, single AI content platform connected to CMS",
      "Days 31–60 — Pilot Execution: ONE high-friction workflow (e.g., predictive lead scoring on one product line). Test with historical data. Measure against baseline.",
      "Days 61–90 — Review & Scale: Compare to baseline. Refine context architecture. Expand the proven workflow to adjacent channels."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 55,
    "title": "The 12-Month Maturity Roadmap",
    "section": "13 — ROADMAP & ACTION",
    "headline": "From AI literacy to a self-sustaining engine",
    "subhead": "",
    "visual": "Each segment has a small icon and a color gradient deepening from light ice blue → navy across the timeline.",
    "note": "",
    "content": [
      "Horizontal 4-segment timeline:",
      "Months 1–3 — Adoption & Literacy: Productivity gains, safe workflow automation, prompting fundamentals",
      "Months 4–6 — Optimization & Architecture: Static prompts → context architecture; manual targeting → algorithmic bidding",
      "Months 7–9 — Predictive Orchestration: Full lifecycle predictive segmentation; MMM + incrementality unified measurement",
      "Months 10–12 — Self-Sustaining Engine: Brand memory persistence; 3–5× content scale; cited 340% Y1 ROI ceiling for top performers"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 56,
    "title": "Prioritized Action Matrix",
    "section": "13 — ROADMAP & ACTION",
    "headline": "Triage by impact and difficulty",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 57,
    "title": "Good vs. Bad in the Wild",
    "section": "13 — ROADMAP & ACTION",
    "headline": "Two case studies. Same technology. Opposite outcomes.",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Two columns:",
      "✓ Good — Mango \"Sunset Dream\" (2024): Proprietary garment photography → bespoke generative model trained on brand IP → human art directors at every step. Solved a real production bottleneck. Brand-safe, cohesive, profitable.",
      "✗ Bad — The Chevy Dealership Bot: Unsupervised public-facing chatbot with no escalation guardrails. Manipulated into \"agreeing\" to sell a vehicle for $1. Viral embarrassment. Legal exposure.",
      "*\"The technology is identical. The architecture, oversight, and incentives are not.\"*"
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 58,
    "title": "Closing: The Mandate",
    "section": "13 — ROADMAP & ACTION",
    "headline": "Translate brand value into machine-readable logic — or face permanent exclusion",
    "subhead": "",
    "visual": "Dark navy background, large white headline, principles in ice blue, single coral square anchor mirroring the title slide.",
    "note": "The brands that win 2027 are the ones that look at this slide and start moving on Monday.",
    "content": [
      "Three concise principles, large type:",
      "The brands that win 2027 are the ones that look at this slide and start moving on Monday."
    ],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 59,
    "title": "Q&A / Discussion",
    "section": "13 — ROADMAP & ACTION",
    "headline": "Questions",
    "subhead": "Where would you start?",
    "visual": "Dark navy background. A single coral square in the lower-right corner. Minimal — leaves the room to the audience.",
    "note": "",
    "content": [],
    "isDivider": false,
    "isAction": false
  },
  {
    "number": 60,
    "title": "Sources & Further Reading",
    "section": "13 — ROADMAP & ACTION",
    "headline": "Sources",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Two columns of grouped citations from the underlying research, organized by section (Strategic Model, GEO/AIO, Paid Media, Lifecycle, Measurement, Governance). Use small 9pt text. List only the ~15 most-cited primary sources from the research documents (BCG, PwC, Stanford HAI, Princeton GEO Framework, Search Engine Land, Conductor, Semrush, Klaviyo, etc.).",
      "\"Compiled May 2026 from primary research and industry benchmarks.\"",
      "Section dividers: large numbered chip (\"01\" through \"12\") in coral at low opacity",
      "All stat callouts: 60–72pt numerals in coral on light slides, in white on dark slides",
      "All tables: navy header row, alternating ice blue / white body rows, 14pt body text",
      "All \"Do This Monday\" slides: numbered chips 1, 2, 3 in coral circles, identical layout",
      "Slide 2: Conversion comparison bar chart (traditional vs. AI-referred)",
      "Slide 10: Traffic vs. quality inversion stacked bar",
      "Slide 11: Share of Model competitor dashboard mockup",
      "Slide 15: Citation distribution by page zone (44.2% / 31.1% / 24.7%)",
      "Slide 17: 2×2 multiplier card grid",
      "Slide 37: Calendar vs. AI-triggered revenue line chart",
      "Slide 38: Inverse-correlation send frequency chart",
      "Coral on navy passes contrast for headings only (≥36pt). Use white for body text on dark backgrounds.",
      "Every chart needs an alt-text speaker note describing the data verbally for visually impaired audiences."
    ],
    "isDivider": false,
    "isAction": false
  }
];

const sectionLabels = [...new Set(slides.map((slide) => slide.section))];

function normalize(text = '') {
  return text.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/→/g, '->').replace(/×/g, 'x');
}

function statParts(line) {
  const match = normalize(line).match(/^([~+\-]?[0-9][0-9.,]*(?:–[0-9][0-9.,]*)?%?|[0-9][0-9.,]*x|[0-9]+\+?)\s*[—-]\s*(.*)$/);
  return match ? { value: match[1], label: match[2] } : null;
}

function isTable(slide) {
  return slide.content.some((line) => /table|grid|matrix|cheat sheet|benchmarks/i.test(line));
}

function cleanLine(line) {
  return normalize(line).replace(/\s+/g, ' ').replace(/^[-•]\s*/, '').replace(/^✓\s*/, 'Good: ').replace(/^✗\s*/, 'Bad: ');
}

function SectionRail({ active, onSelect }) {
  return (
    <aside className="section-rail" aria-label="Deck sections">
      {sectionLabels.map((section, index) => {
        const first = slides.findIndex((slide) => slide.section === section);
        return (
          <button key={section} className={slides[active].section === section ? 'active' : ''} onClick={() => onSelect(first)}>
            <span>{String(index).padStart(2, '0')}</span>
            {section.replace(/^\d+\s+—\s+/, '')}
          </button>
        );
      })}
    </aside>
  );
}

function StatCards({ lines }) {
  const stats = lines.map(statParts).filter(Boolean).slice(0, 4);
  if (!stats.length) return null;
  return <div className="stat-grid">{stats.map((stat, i) => <article className="stat-card" key={i}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div>;
}

function Comparison({ lines }) {
  const candidates = lines.filter((line) => /old|new|left|right|2023|2026|good|bad|centralized|decentralized/i.test(line)).slice(0, 4);
  if (candidates.length < 2) return null;
  return <div className="comparison-grid">{candidates.map((line, i) => <article key={i}><b>{cleanLine(line).split(':')[0]}</b><p>{cleanLine(line).includes(':') ? cleanLine(line).split(':').slice(1).join(':').trim() : cleanLine(line)}</p></article>)}</div>;
}

function DataViz({ slide }) {
  const title = slide.headline + ' ' + slide.title;
  if (/Share of Model/i.test(title)) {
    const brands = ['Acronym', 'Northstar', 'Orbit', 'Signal', 'Legacy'];
    return <div className="som-chart">{brands.map((brand, i) => <div className="som-row" key={brand}><span>{brand}</span><i style={{ width: (88 - i * 12) + '%' }} /><em>{88 - i * 12}%</em></div>)}</div>;
  }
  if (/triangle|Three Legs|Measurement/i.test(title)) return <div className="triangle"><span>MMM</span><span>Incrementality</span><span>Server-Side Attribution</span></div>;
  if (/roadmap|timeline|90-Day|12-Month/i.test(title)) return <div className="timeline">{['Groundwork','Pilot','Scale','Engine'].map((x,i)=><span key={x}><b>{i+1}</b>{x}</span>)}</div>;
  if (/funnel|GEO|query|crawl|citation|traffic|conversion|lifecycle|send/i.test(title)) return <div className="signal-bars"><i/><i/><i/><i/></div>;
  return null;
}

function ContentSlide({ slide }) {
  const lines = slide.content.map(cleanLine).filter(Boolean);
  const stats = lines.filter((line) => statParts(line));
  const rest = lines.filter((line) => !statParts(line)).slice(0, 9);
  return (
    <section className="slide-body">
      <StatCards lines={stats} />
      <Comparison lines={rest} />
      {isTable(slide) && <div className="table-panel">{rest.slice(0, 6).map((line, i) => <div key={i}><b>{String(i + 1).padStart(2, '0')}</b><span>{line}</span></div>)}</div>}
      {!isTable(slide) && <div className="content-grid">{rest.slice(0, 6).map((line, i) => <article key={i}><span>{String(i + 1).padStart(2, '0')}</span><p>{line}</p></article>)}</div>}
      <DataViz slide={slide} />
      {slide.note && <p className="speaker-note">{cleanLine(slide.note)}</p>}
    </section>
  );
}

function DividerSlide({ slide }) {
  const numeral = (slide.headline.match(/^(\d+)/) || slide.section.match(/^(\d+)/) || ['', '00'])[1];
  return <section className="divider-slide"><div className="watermark">{numeral}</div><p>{slide.section}</p><h1>{slide.headline}</h1>{slide.subhead && <h2>{slide.subhead}</h2>}</section>;
}

function ActionSlide({ slide }) {
  const actions = slide.content.filter((line) => !/Body|numbered list/i.test(line)).slice(0, 3);
  const fallback = ['Audit one workflow where context is fragmented.', 'Pick one measurable pilot with clean baseline data.', 'Publish the guardrails before scaling usage.'];
  return <section className="action-slide"><h1>{slide.headline}</h1><div className="action-list">{(actions.length ? actions : fallback).map((action, i) => <article key={i}><b>{i + 1}</b><p>{cleanLine(action)}</p></article>)}</div></section>;
}

function TitleSlide({ slide }) {
  return <section className="title-slide"><div className="mark">A</div><h1>{slide.headline}</h1><h2>{slide.subhead}</h2><p>Prepared May 2026</p><span className="corner" /></section>;
}

function Slide({ slide }) {
  const dark = slide.number === 1 || slide.number === 59 || slide.isDivider;
  return (
    <main className={dark ? 'slide dark' : 'slide'}>
      {slide.number === 1 ? <TitleSlide slide={slide} /> : slide.isDivider ? <DividerSlide slide={slide} /> : slide.isAction ? <ActionSlide slide={slide} /> : (
        <>
          <header className="slide-header"><p>{slide.section}</p><h1>{slide.headline}</h1>{slide.subhead && <h2>{slide.subhead}</h2>}</header>
          <ContentSlide slide={slide} />
        </>
      )}
    </main>
  );
}

function App() {
  const [active, setActive] = useState(0);
  const [railOpen, setRailOpen] = useState(true);
  const progress = useMemo(() => ((active + 1) / slides.length) * 100, [active]);
  const go = (next) => setActive(Math.max(0, Math.min(slides.length - 1, next)));
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') go(active + 1);
      if (event.key === 'ArrowLeft') go(active - 1);
      if (event.key === 'Home') go(0);
      if (event.key === 'End') go(slides.length - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);
  return (
    <div className="app-shell">
      {railOpen && <SectionRail active={active} onSelect={setActive} />}
      <div className="stage">
        <Slide slide={slides[active]} />
        <footer className="controls">
          <button onClick={() => setRailOpen(!railOpen)} aria-label="Toggle sections">{railOpen ? <X /> : <Menu />}</button>
          <button onClick={() => go(0)} aria-label="First slide"><Home /></button>
          <button onClick={() => go(active - 1)} disabled={active === 0}><ArrowLeft /> Previous</button>
          <div className="progress"><span style={{ width: progress + '%' }} /></div>
          <strong>{active + 1} / {slides.length}</strong>
          <button onClick={() => go(active + 1)} disabled={active === slides.length - 1}>Next <ArrowRight /></button>
          <button onClick={() => document.documentElement.requestFullscreen?.()} aria-label="Fullscreen"><Maximize2 /></button>
        </footer>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
