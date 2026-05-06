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
    "isAction": false,
    "visualType": "title-card"
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
    "isAction": false,
    "visualType": "conversion-bars"
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
      "The deck is organized as twelve connected domains of the AI-native marketing operating system.",
      "Each section ends with a practical Monday action so strategy turns into operating change."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "deck-map"
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
      "Experimental era: standalone copy generators, ad-hoc image tools, prompt libraries in Slack, and tolerance for AI sloppiness.",
      "Agentic era: AI orchestrates end-to-end workflows while humans set boundaries, supply context, and govern execution.",
      "The agentic leap changes who does what — not just which tools are used."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "era-shift"
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
      "Prompt engineering: clever queries produce generic outputs that audiences ignore.",
      "Context architecture: CRM, product feeds, performance history, customer research, and brand voice feed the model directly.",
      "If your AI sounds generic, you do not have a model problem. You have a context architecture problem."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "context-architecture"
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
      "Data: retroactive reporting → real-time predictive fuel for bidding and routing.",
      "Creative: static finished assets → dynamic variables tested in millions of permutations.",
      "Automation: trigger-based rules → predictive next-best-action workflows.",
      "Targeting: manual demographic toggles → audience signals fed to algorithmic discovery.",
      "This is the four-line mental model for everything that follows."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "pillar-grid"
  },
  {
    "number": 8,
    "title": "Section Takeaway: Strategic Model",
    "section": "1 — THE STRATEGIC MODEL",
    "headline": "Do this Monday",
    "subhead": "",
    "visual": "Three numbered chip cards, each with a tight 2-sentence action.",
    "note": "",
    "content": [
      "Audit one workflow where AI output feels generic and identify the missing context sources.",
      "Create a single brand/context package: voice rules, product facts, customer proof, and compliance boundaries.",
      "Assign one owner for AI governance and one owner for workflow experimentation."
    ],
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
      "93% — Google AI Mode sessions ending with no click",
      "4.4× — Conversion lift from AI-referred visitors vs. traditional organic",
      "35% — Organic CTR boost for pages cited inside AI Overviews",
      "The economics of organic have flipped: fewer clicks, but the clicks you earn are higher-intent."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "traffic-quality-inversion"
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
      "Share of Model (SoM): how often and how prominently your brand is cited in AI-generated answers relative to competitors.",
      "Measure SoM across ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews — not just traditional rank.",
      "By Q4 2026, SoM will become a board-level visibility metric."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "share-of-model-dashboard"
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
      "Technical access: bots can crawl, fetch, and understand the site without broken rendering or blocked agents.",
      "Content structure: pages front-load answers, evidence, schema, and claim-rich summaries.",
      "Entity clarity: the brand, category, geography, products, and relationships are unambiguous to machines.",
      "Brand authority: third-party validation gives models confidence to cite you."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "geo-funnel"
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
      "Training bots shape future model memory; blocking them can reduce long-term visibility.",
      "User bots fetch live answers for AI products; blocking them can erase you from current recommendations.",
      "Search crawlers still matter because AI Overviews and model answers reuse indexed web signals.",
      "~70% of lost ChatGPT citations come from sites that blocked training bots and accidentally blocked user bots too.",
      "A 15-minute robots.txt audit can recover citation share within weeks."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "crawler-access-table"
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
      "Problem: AI user bots operate under tight latency budgets and often do not render JavaScript-heavy interfaces.",
      "Fix: serve critical content in raw HTML with SSR, TTFB under 600ms, HTML payload under 1MB, and response time under 3 seconds.",
      "This slide should trigger an emergency conversation with your dev team. That is the point."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "browser-vs-curl"
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
      "Top 30%: direct answer, TL;DR, and claim-rich intro. This zone drives 44.2% of citations.",
      "Middle 30%: supporting evidence, tables, examples, and entity-rich details. This zone drives 31.1% of citations.",
      "Bottom 30%: context, exceptions, related entities, and next-step links. This zone drives 24.7% of citations.",
      "68.7% of cited pages use strict H1→H3 hierarchy.",
      "Structured lists and tables produce a 30–40% visibility lift."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "citation-anatomy"
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
      "User prompt: “Most secure cloud storage for European medical data in 2026.”",
      "Fan-out query: cloud storage encryption standards.",
      "Fan-out query: European healthcare data sovereignty laws in 2026.",
      "Fan-out query: medical data compliance platforms.",
      "Final answer: synthesized from sources covering all three sub-queries.",
      "Win the cluster, not the keyword. Build semantic cocoons, not isolated pages."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "query-fanout"
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
      "4.3× — Visibility multiplier for content over 20,000 characters",
      "3.2× — Citation multiplier from a 30-day refresh cycle",
      "2.8× — Citations on product pages with original benchmarks",
      "+40% — Domain visibility lift from proprietary data",
      "AI-cited content averages 25.7% fresher than traditional organic results."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "citation-multipliers"
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
      "Schema markup creates a machine-readable overlay: Organization, Article, FAQPage, Dataset, and Product schemas all matter.",
      "Entity clarity depends on consistent names, roles, locations, categories, and relationships across every public surface.",
      "Example: Toronto Business Development Centre (TBDC) is a non-profit accelerator in Toronto, Ontario focused on government-funded entrepreneurship programs."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "entity-schema-map"
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
      "Wikipedia / Wikidata",
      "High-authority listicles and comparison pages",
      "Moderated Reddit threads and community discussions",
      "LinkedIn thought leadership and expert posts",
      "Crunchbase, G2, Capterra, and category directories",
      "Major digital publishers and podcast mentions",
      "Your PR strategy is your AI strategy now. Earned mentions train the models that will recommend you."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "authority-graph"
  },
  {
    "number": 20,
    "title": "Section Takeaway: Discoverability",
    "section": "2 — DISCOVERABILITY (GEO / AIO / LLMO)",
    "headline": "Do this Monday",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Run a robots.txt and server-rendering audit for your five highest-value pages.",
      "Rewrite one buying-intent page with a direct-answer intro, structured evidence, and entity-rich schema.",
      "Build an external validation list: five places where your brand should be cited, reviewed, or compared."
    ],
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
      "Old job: manual keyword bids, demographic toggles, hourly tweaks, and granular campaign segmentation.",
      "New job: asset diversity, audience signals, value-based bidding, clean conversion data, and disciplined restraint.",
      "The highest-leverage paid search work is now engineering better inputs for the algorithm."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "paid-search-inversion"
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
      "30+ — Minimum monthly conversions per campaign for the algorithm to exit learning",
      "20–30 — Recommended PMax/AI Max consolidation floor",
      "15% — Maximum bid or budget change per few-day window once stable",
      "Consolidate 10 fragmented campaigns into 3 signal-rich campaigns before judging performance.",
      "Most underperforming PMax setups have 8–15 micro-campaigns; consolidation often unlocks 15–30% gains."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "campaign-consolidation"
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
      "Form fills: mixed-quality volume that can mislead bidding algorithms.",
      "Qualified leads: CRM-validated signals that better predict pipeline.",
      "Closed-won revenue: the outcome AI should optimize toward.",
      "Optimize toward Target ROAS or Conversion Value, not Target CPA.",
      "Send closed-won data back via offline conversion tracking, enhanced conversions, and CAPI."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "conversion-quality-funnel"
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
      "15–50 — Active creative variants per Advantage+ campaign",
      "+18% — Average ROAS lift from AI chat signal targeting on Meta",
      "11–22% — Reported ROAS range for advertisers fully embracing automation",
      "Creative breadth is now the control surface: format, hook, proof, offer, and pacing all become testable variables."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "creative-testing-matrix"
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
      "Broken path: browser-side pixel only → cookie loss, ATT impact, signal degradation → AI optimizes against shadows.",
      "Correct path: server-side CAPI + offline conversions → privacy-compliant business signal → AI optimizes against actual revenue.",
      "If you remember nothing else from this section: CAPI is no longer optional."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "capi-signal-paths"
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
      "Buying group, not buyer: design for the full 6–10 person committee.",
      "Intent-triggered activation: launch based on real research behavior and third-party intent, not calendar timing.",
      "Coordinated omnipresence: sync ad exposure with SDR outbound and direct mail."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "linkedin-buying-group"
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
      "What is losing: polished corporate posts, synthetic avatars, and generic AI-written captions.",
      "What is winning: founder-led video, employee advocacy, lo-fi UGC, expert POV carousels, and substantive community participation.",
      "Employee posts on LinkedIn receive roughly 2× the engagement of company pages."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "human-brand-cards"
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
      "Verbalize keywords in the first 3 seconds so AI can transcribe the topic.",
      "Embed keyword-rich text overlays because platforms parse on-screen text.",
      "Write descriptive long-form captions and alt text to power native social search ranking."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "social-search-phone"
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
      "TikTok: watch time and replays reward a fast hook, spoken keywords, and visible on-screen text.",
      "Instagram: saves, shares, and topic relevance reward carousel utility and descriptive captions.",
      "YouTube: retention and session continuation reward search-aligned titles, chapters, and thumbnails.",
      "LinkedIn: dwell time and expert engagement reward first-person POV and credible comments.",
      "Reddit: thread depth and community trust reward transparent participation, not brand broadcasting."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "platform-cheat-sheet"
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
      "Research: gather audience questions, customer proof, and source material.",
      "Outline: structure the argument and identify the unique point of view.",
      "Draft: use AI for first-pass synthesis and variant generation.",
      "Expert edit: add judgment, examples, accuracy checks, and brand voice.",
      "Package: turn the final idea into article, social, email, and sales formats.",
      "Repurpose: refresh and redistribute based on performance signals.",
      "Teams using this workflow report 60–80% reductions in publishing time without losing originality."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "content-workflow"
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
      "Proprietary research: surveys, cohort analyses, anonymized customer data, and owned benchmarks.",
      "Practitioner POV: first-person experience, contrarian takes, and named expert quotes.",
      "Original benchmarks: performance comparisons and structured data tables LLMs can pull cleanly.",
      "Generic summaries lose to original data — in search, in social, and in AI answer engines."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "originality-stack"
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
      "What AI predicts in real time: churn risk, next-purchase likelihood, channel preference, ideal send window, and cross-sell affinity.",
      "What changes operationally: workflows trigger on individual statistical receptivity rather than the marketing calendar.",
      "Klaviyo data shows 18–45% higher revenue per recipient for brands using AI-driven segments."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "predictive-lifecycle-line"
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
      "Zero-party first: information the customer explicitly volunteers is more durable than inferred behavior.",
      "Quality over volume: fewer sends, higher-impact moments.",
      "Channel optimization: AI dynamically picks email, SMS, or RCS per user and per moment."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "privacy-relevance-chart"
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
      "Old scoring: +5 points for a whitepaper download — human-assigned, biased, and stale.",
      "New scoring: AI models trained on the last 50 closed-won and closed-lost deals separate ICP fit from behavioral intent.",
      "The best RevOps teams route by fit and intent together, not by arbitrary point totals."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "fit-intent-matrix"
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
      "Trigger: an account hits an intent threshold in 6sense, Apollo, or Unify.",
      "Display ads activate against the buying group.",
      "Personalized email sequences fire to multiple personas.",
      "SDR alert with full context drops in the rep’s CRM.",
      "Direct mail triggers for the top two buyers.",
      "Marketing-sales alignment becomes an automated system, not another meeting."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "pipeline-response"
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
      "Listen: call analysis and deal-risk detection.",
      "Summarize: auto-generated meeting notes and CRM field updates.",
      "Draft: personalized follow-ups and proposal scaffolds.",
      "Feed back: real conversion data flows to ad platforms for optimization."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "enablement-loop"
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
      "What changed: modern agents are grounded in the proprietary knowledge base and can resolve, return, troubleshoot, and escalate gracefully.",
      "What it unlocks: ticket sentiment reveals objections marketing can address upstream, and agents can recognize cross-sell moments mid-conversation.",
      "The Chevy dealership bot shows what happens when context architecture and escalation guardrails are skipped."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "conversational-ai-loop"
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
      "MMM: macro view of cross-channel impact, accounting for seasonality; AI made it dynamic and always-on.",
      "Incrementality testing: the causal gold standard for whether the conversion would have happened anyway.",
      "Server-side digital attribution: CAPI and enhanced conversions feed algorithms with better signals.",
      "Together they form the Suite of Truth. Apart, they produce misleading vanity metrics."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "suite-of-truth-triangle"
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
      "B2B sanity check: pipeline quality, sales-cycle velocity, account engagement, and opportunity conversion matter more than raw lead volume.",
      "B2C sanity check: contribution margin, repeat purchase rate, customer lifetime value, and revenue per recipient matter more than traffic volume.",
      "If your dashboard is an outlier, diagnose whether it reflects strategic advantage, measurement drift, or broken signal plumbing."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "benchmark-table"
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
      "Machine-readable disclosure: mark synthetic content in audio, image, video, and text formats.",
      "Prominent user disclosure: deepfakes and certain AI content must be labeled clearly, not hidden in metadata.",
      "Extraterritorial scope: global brands marketing to EU citizens are in scope regardless of headquarters location.",
      "California and New York extend similar requirements to synthetic performers and AI likeness rights."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "compliance-grid"
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
      "Approved tools: define which AI systems teams may use and for what tasks.",
      "Data boundaries: prohibit sensitive customer, employee, and proprietary data from unapproved tools.",
      "Disclosure rules: specify when AI assistance, synthetic media, or automation must be labeled.",
      "Escalation and audit path: create review checkpoints for legal, brand, and customer-impacting use cases.",
      "This is the lowest-difficulty, highest-risk-mitigation action in the deck."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "acceptable-use-policy"
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
      "Centralized AI Governance Core: RevOps and MOps own CRM hygiene, brand voice, product knowledge, compliance, and vendor procurement.",
      "Decentralized Execution Pods: channel marketers deploy AI agents inside the sandbox and iterate quickly without breaking governance.",
      "Context Engineer / Agent Orchestrator: the bridge role that turns brand truth and data pipelines into reliable AI workflows."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "hybrid-org-model"
  },
  {
    "number": 52,
    "title": "The Recommended Tech Stack (2026)",
    "section": "12 — ORG DESIGN & STACK",
    "headline": "Four interoperable layers — and what to avoid in each",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "Data and context layer: CRM, CDP, product catalog, knowledge base, brand memory, consent records.",
      "Orchestration layer: agent workflows, prompt/context templates, approval gates, and task routing.",
      "Channel execution layer: paid media, lifecycle, content, sales enablement, and conversational AI tools.",
      "Measurement and governance layer: MMM, incrementality, server-side attribution, compliance logs, and model monitoring.",
      "Avoid disconnected point tools that cannot share context or feed outcomes back into the system."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "tech-stack-layers"
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
      "Days 1–30 — Groundwork and Governance: audit the stack, form the AI committee, publish the AUP, lock brand voice, and connect one AI content platform to the CMS.",
      "Days 31–60 — Pilot Execution: choose one high-friction workflow, test with historical data, and measure against baseline.",
      "Days 61–90 — Review and Scale: compare to baseline, refine context architecture, and expand the proven workflow to adjacent channels."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "roadmap-90-day"
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
      "Months 1–3 — Adoption and Literacy: productivity gains, safe workflow automation, and prompting fundamentals.",
      "Months 4–6 — Optimization and Architecture: static prompts become context architecture; manual targeting becomes algorithmic bidding.",
      "Months 7–9 — Predictive Orchestration: lifecycle segmentation, MMM, incrementality, and unified measurement start working together.",
      "Months 10–12 — Self-Sustaining Engine: brand memory persists, content scales 3–5×, and top performers approach the 340% Y1 ROI ceiling."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "maturity-roadmap"
  },
  {
    "number": 56,
    "title": "Prioritized Action Matrix",
    "section": "13 — ROADMAP & ACTION",
    "headline": "Triage by impact and difficulty",
    "subhead": "",
    "visual": "",
    "note": "",
    "content": [
      "High impact / low difficulty: robots.txt audit, AI acceptable use policy, first-party signal pass-back, brand voice package.",
      "High impact / high difficulty: context architecture, MMM + incrementality stack, CAPI/OCT implementation, lifecycle predictive orchestration.",
      "Low impact / low difficulty: prompt libraries, lightweight content repurposing, caption/alt-text improvements.",
      "Low impact / high difficulty: bespoke agents without clean data, overbuilt dashboards, and broad automation before governance."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "action-matrix"
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
      "Good: Mango “Sunset Dream” used proprietary garment photography, a bespoke generative model trained on brand IP, and human art directors at every step.",
      "Bad: the Chevy dealership bot was unsupervised, public-facing, and lacked escalation guardrails; it was manipulated into agreeing to sell a vehicle for $1.",
      "The technology is similar. The architecture, oversight, and incentives are not."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "good-bad-cases"
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
      "Structure brand truth so machines can understand it.",
      "Govern AI workflows before they touch customers, budgets, or compliance risk.",
      "Measure business outcomes, not AI activity.",
      "The brands that win 2027 are the ones that start moving on Monday."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "closing-principles"
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
      "Strategic model: BCG and PwC research on AI operating models, workflow redesign, and productivity gains.",
      "Discoverability: Princeton GEO Framework, Search Engine Land, Conductor, Semrush, and AI Overview visibility studies.",
      "Paid media and lifecycle: Google Ads, Meta Advantage+, LinkedIn Accelerate, Klaviyo, Braze, and HubSpot benchmark materials.",
      "Measurement: MMM, incrementality, CAPI, enhanced conversions, and server-side attribution guidance from platform and analytics sources.",
      "Governance: Stanford HAI AI Index, EU AI Act guidance, and state-level synthetic media disclosure requirements.",
      "Compiled May 2026 from primary research and industry benchmarks."
    ],
    "isDivider": false,
    "isAction": false,
    "visualType": "sources-grid"
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

function splitParts(line) {
  const cleaned = cleanLine(line);
  const [label, ...rest] = cleaned.split(':');
  return rest.length ? { label, body: rest.join(':').trim() } : { label: '', body: cleaned };
}

function CardVisual({ slide, columns = 3 }) {
  const items = slide.content.map(cleanLine).filter(Boolean).slice(0, columns * 2);
  return <div className={`deck-visual card-visual cols-${columns}`}>{items.map((item, i) => { const { label, body } = splitParts(item); return <article key={i}><b>{label || String(i + 1).padStart(2, '0')}</b><p>{body}</p></article>; })}</div>;
}

function StatVisual({ slide }) {
  const stats = slide.content.map(statParts).filter(Boolean).slice(0, 4);
  if (!stats.length) return <CardVisual slide={slide} />;
  return <div className="deck-visual stat-visual">{stats.map((stat, i) => <article key={i}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div>;
}

function SplitVisual({ slide, labels = ['Before', 'After'] }) {
  const items = slide.content.map(cleanLine).filter(Boolean).slice(0, 2);
  return <div className="deck-visual split-visual">{items.map((item, i) => { const { label, body } = splitParts(item); return <article key={i}><b>{label || labels[i]}</b><p>{body}</p></article>; })}</div>;
}

function FlowVisual({ labels }) {
  return <div className="deck-visual flow-visual">{labels.map((label, i) => <React.Fragment key={label}><article><b>{String(i + 1).padStart(2, '0')}</b><span>{label}</span></article>{i < labels.length - 1 && <i aria-hidden="true" />}</React.Fragment>)}</div>;
}

function FunnelVisual({ labels }) {
  return <div className="deck-visual funnel-visual">{labels.map((label, i) => <article key={label} style={{ '--w': `${100 - i * 13}%` }}><b>{label}</b></article>)}</div>;
}

function DeckMapVisual() {
  const items = ['Strategic Model','Discoverability','Paid Search','Paid Social','Organic & Community','Content','Lifecycle','CRM & RevOps','Conversational AI','Measurement','Governance','Org Design'];
  return <div className="deck-visual deck-map-visual">{items.map((item, i) => <article key={item}><b>{String(i + 1).padStart(2, '0')}</b><span>{item}</span></article>)}</div>;
}

function ChartVisual({ type }) {
  if (type === 'conversion-bars') return <div className="deck-visual bar-visual"><article><span style={{ height: '32%' }} /><b>1×</b><p>Traditional organic</p></article><article><span style={{ height: '92%' }} /><b>4.4×</b><p>AI-referred</p></article></div>;
  if (type === 'traffic-quality-inversion') return <div className="deck-visual inversion-visual"><article><b>Traffic volume</b><span className="down" /></article><strong>Fewer clicks, better clicks</strong><article><b>Conversion quality</b><span className="up" /></article></div>;
  return <div className="deck-visual line-visual"><svg viewBox="0 0 760 260" role="img"><polyline points="40,135 210,140 380,134 550,139 720,136" /><polyline className="accent" points="40,205 210,178 380,138 550,94 720,55" /><text x="48" y="238">90 days</text><text x="560" y="72">AI-triggered</text><text x="565" y="130">Calendar</text></svg></div>;
}

function MatrixVisual({ type }) {
  if (type === 'creative-testing-matrix') return <div className="deck-visual creative-matrix">{Array.from({ length: 16 }).map((_, i) => <span key={i} className={i % 3 === 0 ? 'hot' : i % 3 === 1 ? 'warm' : ''} />)}</div>;
  const labels = type === 'fit-intent-matrix' ? ['Educate','Nurture','Disqualify','Hot'] : ['Low impact / easy','High impact / easy','Low impact / hard','High impact / hard'];
  return <div className="deck-visual matrix-visual">{labels.map((label) => <article key={label}>{label}</article>)}</div>;
}

function NetworkVisual({ type }) {
  if (type === 'suite-of-truth-triangle') return <div className="deck-visual triangle-visual"><article>MMM</article><article>Incrementality</article><article>Server-side attribution</article></div>;
  if (type === 'hybrid-org-model') return <div className="deck-visual org-visual"><article>Governance Core</article><b>Context Engineer</b><article>Execution Pods</article></div>;
  return <div className="deck-visual network-visual"><b>{type === 'authority-graph' ? 'Brand' : 'Signal'}</b>{['Wikipedia','Reddit','LinkedIn','G2','Publishers','Podcasts'].map((item) => <span key={item}>{item}</span>)}</div>;
}

function DataViz({ slide }) {
  const type = slide.visualType;
  if (!type || type === 'title-card') return null;
  if (type === 'deck-map') return <DeckMapVisual />;
  if (['conversion-bars','traffic-quality-inversion','predictive-lifecycle-line','privacy-relevance-chart'].includes(type)) return <ChartVisual type={type} />;
  if (type === 'citation-multipliers') return <StatVisual slide={slide} />;
  if (['era-shift','paid-search-inversion','human-brand-cards','good-bad-cases','capi-signal-paths','conversational-ai-loop'].includes(type)) return <SplitVisual slide={slide} />;
  if (['context-architecture','query-fanout','pipeline-response','content-workflow','roadmap-90-day','maturity-roadmap','tech-stack-layers','campaign-consolidation','enablement-loop'].includes(type)) {
    const flowLabels = {
      'context-architecture': ['CRM','Product feed','Brand voice','LLM / Agent','Channels'],
      'query-fanout': ['Prompt','Sub-query 1','Sub-query 2','Sub-query 3','Answer'],
      'pipeline-response': ['Intent trigger','Display ads','Email','SDR alert','Direct mail'],
      'content-workflow': ['Research','Outline','Draft','Expert edit','Package','Repurpose'],
      'roadmap-90-day': ['Days 1–30','Days 31–60','Days 61–90'],
      'maturity-roadmap': ['Months 1–3','Months 4–6','Months 7–9','Months 10–12'],
      'tech-stack-layers': ['Data + context','Orchestration','Channel execution','Measurement + governance'],
      'campaign-consolidation': ['10 fragmented campaigns','Signal merge','3 consolidated campaigns'],
      'enablement-loop': ['Listen','Summarize','Draft','Feed back']
    };
    return <FlowVisual labels={flowLabels[type]} />;
  }
  if (['geo-funnel','conversion-quality-funnel','citation-anatomy'].includes(type)) {
    const labels = type === 'geo-funnel' ? ['Technical access','Content structure','Entity clarity','Brand authority'] : type === 'conversion-quality-funnel' ? ['Form fills','Qualified leads','Closed-won revenue'] : ['Top 30%: 44.2%','Middle 30%: 31.1%','Bottom 30%: 24.7%'];
    return <FunnelVisual labels={labels} />;
  }
  if (['fit-intent-matrix','action-matrix','creative-testing-matrix'].includes(type)) return <MatrixVisual type={type} />;
  if (['authority-graph','suite-of-truth-triangle','hybrid-org-model'].includes(type)) return <NetworkVisual type={type} />;
  return <CardVisual slide={slide} columns={type === 'sources-grid' ? 2 : 3} />;
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
