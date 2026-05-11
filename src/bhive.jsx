import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesColumn,
  ChevronRight,
  ClipboardCheck,
  Factory,
  FileText,
  Gauge,
  Globe2,
  Home,
  Mail,
  Maximize2,
  Megaphone,
  Menu,
  Palette,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  Video,
  Workflow,
  X,
} from 'lucide-react';
import './bhive.css';

const icons = {
  search: Search,
  brain: BrainCircuit,
  users: UsersRound,
  chart: ChartNoAxesColumn,
  clipboard: ClipboardCheck,
  file: FileText,
  palette: Palette,
  globe: Globe2,
  pen: PenLine,
  video: Video,
  megaphone: Megaphone,
  calendar: CalendarDays,
  mail: Mail,
  gauge: Gauge,
  truck: Truck,
  factory: Factory,
  shield: ShieldCheck,
  sparkles: Sparkles,
  workflow: Workflow,
};

const slides = [
  {
    number: '01',
    kicker: 'PURPOSE',
    section: 'Executive Frame',
    title: 'BHive AI Program',
    emphasis: 'Marketing Strategy, Brand & Marketing Deployment',
    subhead: 'Prepared for Executive Review | Toronto Business Development Centre | May 2026',
    body: 'A working session to align roles, support, and shared execution.',
    quote: 'We’re here to support and extend the work — not replace it.',
    layout: 'title',
  },
  {
    number: '02',
    kicker: 'LAUNCH CONTEXT',
    section: 'Opportunity',
    title: 'A high-potential program',
    emphasis: 'with a real launch window',
    subhead: 'BHive AI is moving toward Cohort 1 with meaningful momentum — and a launch timeline that benefits from coordinated execution.',
    items: [
      ['5,700+', 'SMBs in Brampton', 'A large local audience with a widening AI adoption gap'],
      ['5', 'Priority sectors', 'Healthcare, manufacturing, construction, transportation, and professional services'],
      ['30', 'Day program model', 'Designed to move SMBs from awareness to implementation and ROI'],
      ['Late Q2 / Early Q3', 'Target launch window', 'Brand, CRM, vendor, and outreach readiness gates before launch'],
    ],
    closing: 'The program opportunity, sector focus, and launch path are already defined. Our role is to support execution where added capacity helps most.',
    layout: 'stats',
  },
  {
    number: '03',
    kicker: 'STRATEGIC GAP',
    section: 'Market Need',
    title: 'Brampton’s SMBs know AI matters.',
    emphasis: 'They don’t know where to start.',
    subhead: 'Awareness is high. Implementation is low. That is the gap BHive AI was built for.',
    quotes: [
      'We know AI matters. We just don’t know where to start.',
      'I can’t afford to waste time or money on the wrong solution.',
      'We’re already stretched. Who’s actually going to implement this?',
    ],
    closing: 'Most regional AI programs deliver education and walk away. BHive AI delivers implementation — vendor-matched, ROI-validated, deployment initiated within 30 days.',
    layout: 'quotes',
  },
  {
    number: '04',
    kicker: 'DELIVERY MODEL',
    section: 'Program Differentiator',
    title: 'Implementation over education.',
    emphasis: 'ROI over theory.',
    subhead: 'Participants leave the 30-day sprint with four things in hand — not four things still to figure out.',
    items: [
      ['USE CASE', 'A validated use case', 'Sector-specific, scoped, ROI-projected'],
      ['VENDOR', 'A matched vendor commitment', 'From the BHive Verified Vendor Network'],
      ['DEPLOYMENT', 'A deployment already underway', 'Not a plan, an active implementation'],
      ['FUNDING', 'A funding pathway', 'Grant funding to de-risk implementation cost'],
    ],
    closing: 'Every marketing asset, message, and channel reinforces this structural differentiator.',
    layout: 'cards',
  },
  {
    number: '05',
    kicker: 'WHAT’S ALREADY BUILT',
    section: 'Foundation',
    title: 'Strong program work',
    emphasis: 'is already underway',
    subhead: 'Before discussing support, we want to acknowledge the strong foundation the BHive team has already built.',
    items: [
      ['search', 'Market research complete', 'Brampton SMB landscape mapped, peer programs benchmarked, and priority sectors selected.'],
      ['brain', '40 AI use cases mapped', 'Use cases developed across sectors with enough specificity for SMB implementation.'],
      ['users', 'Vendor network developing', 'Early conversations are underway and selection criteria are being formalized.'],
      ['chart', '42 KPIs defined', 'Measures mapped across the program journey with owners and tracking needs.'],
      ['clipboard', 'Launch plan developed', 'Pre-launch workstreams and readiness gates are already in motion toward Cohort 1.'],
      ['file', 'Content workflow forming', 'A real social and approvals process is taking shape, including FedDev timing constraints.'],
    ],
    closing: 'We are not coming in to redo this foundation — we want to plug into it and help it scale.',
    layout: 'iconGrid',
  },
  {
    number: '06',
    kicker: 'PITCH HOOKS',
    section: 'Messaging System',
    title: 'Three hooks.',
    emphasis: 'One conversation.',
    subhead: 'Every marketing asset, sales call, and outreach campaign uses the same three value drivers — adapted to the language of each priority sector.',
    items: [
      ['01', 'Time & Cost', 'Most SMBs are losing time and money to manual processes. BHive AI gives them a structured path to capture operational gains in 30 days.'],
      ['02', 'Vendor Access & Grant Funding', 'Get matched with a qualified AI vendor who delivers a technical diagnostic and scoped quote. Grant funding offsets implementation cost.'],
      ['03', 'Speed & Structure', 'A 30-day sprint with a defined outcome. Not a six-month course. Participants leave with implementation already underway.'],
    ],
    closing: 'Manufacturing: “Downtime costs everything. Predict it before it happens.” Transportation: “Stop re-keying. Start scaling.”',
    layout: 'stack',
  },
  {
    number: '07',
    kicker: 'ICP',
    section: 'Audience',
    title: 'The ICP is narrow',
    emphasis: 'on purpose.',
    subhead: 'Operational leaders at established, profitable Peel Region SMBs — not tech startups, not pre-revenue businesses.',
    columns: [
      ['WHO THEY ARE', ['Brampton & Peel Region SMBs, 1–500 employees', '$250K–$5M revenue, established and stable', 'Manufacturing, logistics, healthcare, professional services', 'Decision-maker at the table — owner or C-suite', 'AI-curious but stuck']],
      ['WHO THEY ARE NOT', ['Tech startups or pre-revenue businesses', 'Satellite offices of larger companies', 'Companies without an engaged decision-maker', 'Audiences seeking education without implementation intent']],
    ],
    closing: 'This audience speaks a fundamentally different language than founders. The brand voice and message register reflect that.',
    layout: 'twoColumns',
  },
  {
    number: '08',
    kicker: 'ECOSYSTEM FLYWHEEL',
    section: 'Regional Value',
    title: 'Every successful implementation',
    emphasis: 'makes the next one easier.',
    subhead: 'BHive AI sits inside a self-reinforcing ecosystem. Cohort momentum compounds.',
    items: [
      ['SMEs adopt AI', 'Generate case studies and demand for AI talent and tools'],
      ['Students produce use cases', 'Fill talent gaps and become AI-capable hires'],
      ['Startups deploy solutions', 'Commercialize in real environments and scale'],
      ['Ecosystem credibility', 'PR, government, vendors, funding, and reach attract more SMEs'],
    ],
    closing: 'Compounding regional capability, not a one-time program.',
    layout: 'flywheel',
  },
  {
    number: '09',
    kicker: 'SECTOR FOCUS 01',
    section: 'Transportation',
    title: 'Your operations move fast.',
    emphasis: 'Your paperwork shouldn’t slow them down.',
    subhead: 'Transportation & Trucking',
    sectorIcon: 'truck',
    columns: [
      ['Messaging themes', ['Faster invoice-to-cash cycles', 'Document automation', 'Dispatcher efficiency', 'Workflow visibility']],
      ['Sample messaging', ['Stop re-keying. Start scaling.', 'Get paid faster with AI-powered workflows.', 'Less paperwork. More movement.']],
      ['Key use cases', ['BOL & POD automation', 'Dispatch copilots', 'Route optimization', 'Automated invoicing workflows']],
    ],
    layout: 'sector',
  },
  {
    number: '10',
    kicker: 'SECTOR FOCUS 02',
    section: 'Manufacturing',
    title: 'Downtime costs everything.',
    emphasis: 'Predict it before it happens.',
    subhead: 'Advanced Manufacturing',
    sectorIcon: 'factory',
    columns: [
      ['Messaging themes', ['Predictive maintenance', 'Production stability', 'OEE improvement', 'Downtime prevention']],
      ['Sample messaging', ['Downtime costs everything. Predict it.', 'Catch failures before they hit the line.', 'From reactive maintenance to predictive operations.']],
      ['Key use cases', ['Predictive maintenance', 'Computer vision inspection', 'Production scheduling optimization', 'Equipment monitoring']],
    ],
    layout: 'sector',
  },
  {
    number: '11',
    kicker: 'BRAND IDENTITY',
    section: 'Brand Direction',
    title: 'A visual identity that signals modern AI infrastructure',
    emphasis: 'built for operators, not theorists.',
    subhead: 'Three finalist concepts under review. Final selection: today.',
    items: [
      ['Helix', 'Hex-portal concept with AI-and-human-connected motif and a strong tech-forward signal'],
      ['AI Stack', 'Hex-screw concept tied directly to advanced manufacturing and practical infrastructure'],
      ['B^AI (BeNext)', 'Evolution of the existing BHive brand with strong continuity'],
    ],
    closing: 'Final selection: today’s review meeting.',
    layout: 'brand',
  },
  {
    number: '12',
    kicker: 'RESOURCE POOL',
    section: 'Marketing Capabilities',
    title: 'TBDC Marketing as',
    emphasis: 'a resource pool',
    subhead: 'A complete set of marketing capabilities that can plug into the BHive launch plan where added capacity is helpful.',
    note: 'Not a replacement layer. A support layer.',
    items: [
      ['palette', 'Brand & identity', 'Naming, logo, visual system, launch assets'],
      ['globe', 'Web & landing pages', 'Site build, UX, SEO, launch updates'],
      ['pen', 'Copy & content', 'Messaging, blogs, thought leadership, social copy'],
      ['video', 'Video production', 'Filming, editing, packaging, launch storytelling'],
      ['megaphone', 'Paid media', 'LinkedIn, Meta, Google, retargeting, campaign support'],
      ['calendar', 'Social management', 'Scheduling, publishing support, analytics'],
      ['mail', 'CRM & automation', 'Workflows, email, forms, reporting systems'],
      ['gauge', 'Dashboards & insights', 'Performance visibility and campaign reporting'],
    ],
    closing: 'The central marketing team is best positioned as a shared execution resource — ready to support, extend, and amplify what BHive is already building.',
    layout: 'capabilities',
  },
  {
    number: '13',
    kicker: 'OPERATING STRUCTURE',
    section: 'Team',
    title: 'Ten people.',
    emphasis: 'Clear lanes. No overlap.',
    subhead: 'Hours allocated by where the work actually lives — execution capacity concentrated in design, social, and operations.',
    rows: [
      ['Strategic Guidance & Approvals', 'Dharti', '~7'],
      ['Marketing Lead — Execution Management', 'Dan', '~50'],
      ['Ops, CRM & Partnerships', 'Jaspinder', '~75'],
      ['Design & Content Manager', 'Gurpreet', '~95'],
      ['Head of Design & Brand', 'Yehor', '~10'],
      ['Web Development Lead', 'James', '~18'],
      ['Technical & Web Dev Support', 'Derrick', '~10'],
      ['Video Content Lead', 'Nix', '~20'],
      ['Social Media Implementation', 'Mustafa', '~95'],
      ['FedDev Program Review', 'Ira', '~5'],
    ],
    closing: 'Dharti and Ira are intentionally low-allocation. The bulk of execution capacity sits with Gurpreet, Mustafa, and Jaspinder.',
    layout: 'team',
  },
  {
    number: '14',
    kicker: 'ROADMAP',
    section: 'Launch Plan',
    title: 'Five phases.',
    emphasis: 'Each one gated by the last.',
    subhead: 'May 11 → July 7. Aligned to Cohort 1 readiness.',
    items: [
      ['May 11–12', 'Brand and Strategy Gating', 'Name confirmed, brand direction approved, creative work unblocked'],
      ['May 13–24', 'Foundational Base', 'Logo system, sector research, templates, CRM configuration, LinkedIn shell live'],
      ['May 25–June 4', 'Go-to-Market Assets', 'Landing page live, paid creative built, content calendar locked, budget approved'],
      ['June 1–25', 'Launch & Outreach', 'Paid campaigns, SMB dinner, mini-sessions across Brampton'],
      ['June 25–July 7', 'Cohort 1 Kickoff Support', 'Assets finalized, video team on-site, case study process live'],
    ],
    layout: 'timeline',
  },
  {
    number: '15',
    kicker: 'WEBSITE LAUNCH PLAN',
    section: 'Web',
    title: 'Two to three pages live by June 6–7.',
    emphasis: 'Full site by July 7.',
    subhead: 'The BHive AI program lives within thebhive.ca — structured the same way Horizon lives within TBDC.',
    columns: [
      ['JUNE 6–7 — INITIAL LAUNCH', ['Landing page — program positioning, three pitch hooks, sector intro', 'Vendor page — verified vendor network preview and selection criteria', 'Transportation sector page — use cases and ROI examples']],
      ['JULY 7 — FULL SITE', ['Manufacturing, Healthcare, Professional Services sector pages', 'Enrollment portal — AI readiness assessment and intake forms', 'Impact Dashboard — live KPI tracking', 'Success Stories focused on operational outcomes', 'About, Vendor Network, Funding Pathways, FAQs']],
    ],
    closing: 'Thebhive.ca homepage also slated for visual refresh to align with the new BHive AI tone and identity.',
    layout: 'twoColumns',
  },
  {
    number: '16',
    kicker: 'CONTENT & CHANNELS',
    section: 'Demand',
    title: 'Show, don’t tell.',
    emphasis: 'Brampton’s AI story is already in our portfolio.',
    subhead: 'The anchor content track for the next eight weeks is portfolio company storytelling — 30+ AI startups already supported through BHive GEIP and BNext.',
    columns: [
      ['Primary content track', ['Weekly portfolio company spotlights from existing BHive AI startup base', '3 posts per week across LinkedIn, Instagram, Facebook', 'Establishes credibility before Cohort 1 launch', 'Mustafa-led under Ira’s supervision']],
      ['Channel mix', ['LinkedIn organic — primary credibility-building channel', 'LinkedIn paid — sector-targeted at COO and operations leadership', 'Email nurture — workshop attendees and partner referrals', 'Workshops & roundtables — trust-building, lead generation', 'Local business media — Insauga, Canadian SME, Brampton Guardian']],
    ],
    closing: 'Tactical implementation is addressed in the follow-on implementation brief.',
    layout: 'twoColumns',
  },
  {
    number: '17',
    kicker: 'CAPACITY MULTIPLIER',
    section: 'How We Operate',
    title: 'The team works at 1.5x through tools',
    emphasis: 'not through headcount.',
    subhead: 'Same proof point that delivered the TBDC rebrand and website in six weeks now applies to BHive AI.',
    items: [
      ['Content & Design Acceleration', 'Claude-powered drafting, Canva + AI templates, and AI-assisted scout report design'],
      ['CRM & Workflow Automation', 'Zoho Flow pipelines, automated lead capture, segmented email sequences, survey-to-CRM automation'],
      ['Knowledge & Reporting', 'AI-enabled internal knowledge base, executive weekly snapshots, automated meeting summaries'],
    ],
    closing: 'Detailed tooling, license requirements, and budget implications addressed in the implementation brief.',
    layout: 'cards',
  },
  {
    number: '18',
    kicker: 'GOVERNANCE',
    section: 'Approvals',
    title: 'Every marketing asset clears',
    emphasis: 'four gates before deployment.',
    subhead: 'Approval flow is sequential. No materials deploy publicly without all four signatures.',
    items: [
      ['Internal BHive review', 'Senior Marketing Director / CMO'],
      ['Legal & compliance review', 'Kaj'],
      ['City of Brampton co-brand review', 'Municipal alignment check'],
      ['FedDev approval', 'Funder approval before public deployment'],
    ],
    rows: [
      ['Monday 10 AM', 'Dan + Dharti strategic decisions, blockers, budget'],
      ['Tuesday 2 PM', 'Marketing team weekly planning'],
      ['Wednesday', 'Dan + Rahim program sync'],
      ['Friday 4 PM', 'Dan → Dharti weekly summary'],
      ['First Friday', 'All stakeholders strategic review'],
    ],
    layout: 'gates',
  },
  {
    number: '19',
    kicker: 'ALIGNMENT',
    section: 'Executive Decisions',
    title: 'What we need',
    emphasis: 'to align on today',
    subhead: 'The goal is to leave this meeting with clear roles, shared visibility, and no duplicated effort.',
    items: [
      ['01', 'Support priorities', 'Which launch workstreams need TBDC Marketing support first?'],
      ['02', 'Existing workflows', 'What BHive systems, trackers, and approval steps should we plug into rather than recreate?'],
      ['03', 'FedDev timing', 'How should the approval cadence shape the content calendar and launch timeline?'],
      ['04', 'Lead-list ownership', 'Who maintains the SME target list and how do ICP definitions stay aligned?'],
      ['05', 'Weekly cadence', 'What cross-team rhythm gives visibility without adding unnecessary process?'],
      ['06', 'June 15 readiness', 'What must be complete by the brand deadline, and what follows after launch?'],
    ],
    closing: 'Success = a launch plan where each team contributes where it is strongest.',
    layout: 'alignment',
  },
  {
    number: '20',
    kicker: 'CLOSING FRAME',
    section: 'Next Steps',
    title: 'Less AI theory.',
    emphasis: 'More operational impact.',
    subhead: 'This is the positioning, and it is also how we will work.',
    body: 'BHive AI moves Brampton’s SMBs from awareness to active implementation in 30 days. The program is built. The team is staffed. The launch path is gated. What we are aligning on today is the cross-team rhythm that gets us cleanly to Cohort 1.',
    steps: ['Vic approval today', 'Brand finalization May 11–12', 'Phase 2 kickoff May 13', 'Cohort 1 launch July 1'],
    layout: 'closing',
  },
];

const sections = [...new Set(slides.map((slide) => slide.section))];

function BhiveLogo() {
  return (
    <div className="bhive-logo" aria-label="BHive">
      {['B', 'H', 'I', 'V', 'E'].map((letter, index) => (
        <span className={index === 1 || index === 3 ? 'filled' : ''} key={letter}>{letter}</span>
      ))}
    </div>
  );
}

function HexField() {
  return <div className="hex-field">{Array.from({ length: 9 }).map((_, index) => <i key={index} />)}</div>;
}

function Icon({ name }) {
  const Component = icons[name] || Sparkles;
  return <Component aria-hidden="true" />;
}

function Header({ slide }) {
  return (
    <header className="slide-top">
      <div>
        <BhiveLogo />
        <p>Brampton <strong>innovation</strong> District</p>
      </div>
      <span>{slide.number} &nbsp; {slide.kicker}</span>
    </header>
  );
}

function Title({ slide }) {
  return (
    <section className="title-layout">
      <div>
        <h1>{slide.title}</h1>
        <h2>{slide.emphasis}</h2>
        <h3>{slide.subhead}</h3>
        <p>{slide.body}</p>
        <blockquote>{slide.quote}</blockquote>
      </div>
      <div className="hero-mark">×</div>
      <div className="date-chip">May 2026</div>
    </section>
  );
}

function SlideIntro({ slide }) {
  return (
    <div className="intro">
      <h1>{slide.title}<br /><em>{slide.emphasis}</em></h1>
      {slide.subhead && <p>{slide.subhead}</p>}
      {slide.note && <strong>{slide.note}</strong>}
    </div>
  );
}

function Stats({ slide }) {
  return <div className="stat-grid">{slide.items.map(([value, title, body]) => <article key={title}><b>{value}</b><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

function QuoteStack({ slide }) {
  return <div className="quote-stack">{slide.quotes.map((quote, index) => <article key={quote}><span>{String(index + 1).padStart(2, '0')}</span><p>{quote}</p></article>)}</div>;
}

function Cards({ slide }) {
  return <div className="card-grid">{slide.items.map(([badge, title, body]) => <article key={title}><span>{badge}</span><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

function IconGrid({ slide }) {
  return <div className="icon-grid">{slide.items.map(([icon, title, body]) => <article key={title}><div><Icon name={icon} /></div><h3>{title}</h3><p>{body}</p></article>)}</div>;
}

function Stack({ slide }) {
  return <div className="stack-list">{slide.items.map(([number, title, body]) => <article key={title}><b>{number}</b><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>;
}

function TwoColumns({ slide }) {
  return <div className="two-columns">{slide.columns.map(([title, lines], index) => <article key={title} className={index === 1 ? 'muted-column' : ''}><h3>{title}</h3>{lines.map((line) => <p key={line}>{line}</p>)}</article>)}</div>;
}

function Flywheel({ slide }) {
  return (
    <div className="flywheel">
      <div className="flywheel-core">BHive AI</div>
      {slide.items.map(([title, body], index) => <article style={{ '--i': index }} key={title}><b>{index + 1}</b><h3>{title}</h3><p>{body}</p></article>)}
    </div>
  );
}

function Sector({ slide }) {
  return (
    <div className="sector-layout">
      <div className="sector-icon"><Icon name={slide.sectorIcon} /></div>
      {slide.columns.map(([title, lines]) => <article key={title}><h3>{title}</h3>{lines.map((line) => <p key={line}>{line}</p>)}</article>)}
    </div>
  );
}

function Brand({ slide }) {
  return (
    <>
      <div className="brand-grid">{slide.items.map(([title, body]) => <article key={title}><div className="mini-logo"><span>{title[0]}</span></div><h3>{title}</h3><p>{body}</p></article>)}</div>
      <div className="swatches"><span>#F4C400</span><span>#1779FF</span><span>#050505</span><span>#FFFFFF</span></div>
    </>
  );
}

function Capabilities({ slide }) {
  return <div className="capability-grid">{slide.items.map(([icon, title, body], index) => <article key={title}><Icon name={icon} /><h3>{index + 1}. {title}</h3><p>{body}</p></article>)}</div>;
}

function Team({ slide }) {
  return <div className="team-table">{slide.rows.map(([role, owner, hours]) => <div key={role}><span>{role}</span><b>{owner}</b><strong>{hours}</strong></div>)}</div>;
}

function Timeline({ slide }) {
  return <div className="timeline">{slide.items.map(([date, title, body], index) => <article key={title}><span>{date}</span><h3>{title}</h3><p>{body}</p>{index < slide.items.length - 1 && <ChevronRight />}</article>)}</div>;
}

function Gates({ slide }) {
  return (
    <>
      <div className="gate-flow">{slide.items.map(([title, owner], index) => <article key={title}><b>{index + 1}</b><h3>{title}</h3><p>{owner}</p></article>)}</div>
      <div className="cadence">{slide.rows.map(([when, what]) => <div key={when}><b>{when}</b><span>{what}</span></div>)}</div>
    </>
  );
}

function Closing({ slide }) {
  return (
    <section className="closing-layout">
      <BhiveLogo />
      <h1>{slide.title}<br /><em>{slide.emphasis}</em></h1>
      <h2>{slide.subhead}</h2>
      <p>{slide.body}</p>
      <div>{slide.steps.map((step) => <span key={step}>{step}</span>)}</div>
    </section>
  );
}

function SlideBody({ slide }) {
  if (slide.layout === 'title') return <Title slide={slide} />;
  if (slide.layout === 'closing') return <Closing slide={slide} />;
  return (
    <>
      <SlideIntro slide={slide} />
      {slide.layout === 'stats' && <Stats slide={slide} />}
      {slide.layout === 'quotes' && <QuoteStack slide={slide} />}
      {slide.layout === 'cards' && <Cards slide={slide} />}
      {slide.layout === 'iconGrid' && <IconGrid slide={slide} />}
      {slide.layout === 'stack' && <Stack slide={slide} />}
      {slide.layout === 'twoColumns' && <TwoColumns slide={slide} />}
      {slide.layout === 'flywheel' && <Flywheel slide={slide} />}
      {slide.layout === 'sector' && <Sector slide={slide} />}
      {slide.layout === 'brand' && <Brand slide={slide} />}
      {slide.layout === 'capabilities' && <Capabilities slide={slide} />}
      {slide.layout === 'team' && <Team slide={slide} />}
      {slide.layout === 'timeline' && <Timeline slide={slide} />}
      {slide.layout === 'gates' && <Gates slide={slide} />}
      {slide.layout === 'alignment' && <Cards slide={slide} />}
      {slide.closing && <p className="closing-note">{slide.closing}</p>}
    </>
  );
}

function Slide({ slide }) {
  return (
    <main className={`slide slide-${slide.layout}`}>
      <Header slide={slide} />
      <HexField />
      <SlideBody slide={slide} />
      <footer className="site-mark">THE<span>BHIVE</span>.CA</footer>
    </main>
  );
}

function SectionRail({ active, onSelect }) {
  return (
    <aside className="section-rail" aria-label="Presentation sections">
      <BhiveLogo />
      {sections.map((section) => {
        const first = slides.findIndex((slide) => slide.section === section);
        return (
          <button className={slides[active].section === section ? 'active' : ''} key={section} onClick={() => onSelect(first)}>
            <span>{slides[first].number}</span>
            {section}
          </button>
        );
      })}
    </aside>
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
          <div className="progress" aria-label="Slide progress"><span style={{ width: `${progress}%` }} /></div>
          <strong>{active + 1} / {slides.length}</strong>
          <button onClick={() => go(active + 1)} disabled={active === slides.length - 1}>Next <ArrowRight /></button>
          <button onClick={() => document.documentElement.requestFullscreen?.()} aria-label="Fullscreen"><Maximize2 /></button>
        </footer>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
