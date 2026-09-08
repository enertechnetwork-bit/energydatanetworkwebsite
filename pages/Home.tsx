import { Link } from "react-router-dom";
import { SEO, pageSEO } from "../components/SEO";

const AccentLine = () => (
  <svg
    viewBox="0 0 80 14"
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-20 text-primary"
    aria-hidden="true"
  >
    <path
      d="M2 12 Q 40 2 78 12"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const primaryLinkClass =
  "inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const secondaryLinkClass =
  "inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const lossTypes = [
  "Meter bypass",
  "Illegal connections",
  "Meter tampering",
  "Energy diversion",
  "Billing irregularities",
  "Unmetered consumption",
  "Data manipulation",
  "Commercial losses",
];

const platformFeatures = [
  {
    icon: "electric_meter",
    title: "Theft Detection Engine",
    description:
      "Flags meter bypass, meter tampering, energy diversion, illegal connections, and suspicious consumption behavior.",
  },
  {
    icon: "speed",
    title: "Customer Risk Scoring",
    description:
      "Assigns every customer a theft probability score so revenue protection teams know where to act first.",
  },
  {
    icon: "route",
    title: "Inspection Prioritization",
    description:
      "Recommends high-risk locations, priority customers, and estimated recoverable revenue for field teams.",
  },
  {
    icon: "query_stats",
    title: "Revenue Leakage Analytics",
    description:
      "Shows where losses occur, how much revenue is leaking, and how theft trends change over time.",
  },
  {
    icon: "map",
    title: "GIS Theft Mapping",
    description:
      "Maps theft hotspots, high-loss feeders, transformer-level losses, and completed inspection locations.",
  },
  {
    icon: "dashboard",
    title: "Utility Dashboard",
    description:
      "Tracks energy delivered, energy billed, revenue collected, loss percentages, and high-risk customers.",
  },
];

const technologyPillars = [
  "Anomaly detection",
  "Machine learning",
  "Predictive analytics",
  "Meter data analytics",
  "GIS hotspot mapping",
  "Mobile inspection workflows",
];

const customerSegments = [
  "Electricity Distribution Companies",
  "Rural Electrification Agencies",
  "Mini-grid Operators",
  "Utility Regulators",
  "Smart Metering Providers",
  "Energy Service Companies",
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Revenue Protection",
    items: ["Power theft detection", "NTL reduction", "Utility intelligence"],
  },
  {
    phase: "Phase 2",
    title: "Network Visibility",
    items: ["Transformer intelligence", "Feeder analytics", "Outage prediction"],
  },
  {
    phase: "Phase 3",
    title: "AI Operations",
    items: ["Grid intelligence platform", "Asset monitoring", "AI operations center"],
  },
  {
    phase: "Phase 4",
    title: "Utility Operating System",
    items: ["Revenue assurance", "Meter analytics", "Customer intelligence"],
  },
];

export const Home = () => {
  return (
    <div className="flex flex-col gap-16 pb-10">
      <SEO {...pageSEO.home} />

      <section className="relative w-full px-4 pt-4 md:px-6 md:pt-6">
        <div className="container mx-auto max-w-7xl">
          <div
            className="relative min-h-[560px] overflow-hidden rounded-lg bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(5, 10, 22, 0.96) 0%, rgba(5, 10, 22, 0.86) 48%, rgba(5, 10, 22, 0.28) 100%), url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=80")',
            }}
          >
            <div className="grid min-h-[560px] gap-8 p-6 md:grid-cols-[1.05fr_0.95fr] md:p-12">
              <div className="flex max-w-3xl flex-col justify-center gap-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  AI-Powered Utility Intelligence
                </p>
                <div className="space-y-4">
                  <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                    Stop Power Theft. Protect Revenue. Strengthen the Grid.
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                    Energy Data Technology helps electricity providers detect
                    power theft, reduce non-technical losses, and recover lost
                    revenue using artificial intelligence, smart meter
                    analytics, and utility intelligence systems.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className={primaryLinkClass}>
                    Request Demo
                  </Link>
                  <Link to="/contact" className={secondaryLinkClass}>
                    Talk to Our Team
                  </Link>
                </div>
              </div>

              <div className="hidden items-end md:flex">
                <div className="w-full max-w-md rounded-lg border border-white/15 bg-slate-950/80 p-5 shadow-2xl backdrop-blur">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                        Revenue Protection
                      </p>
                      <h2 className="text-lg font-bold text-white">
                        Theft Risk Monitor
                      </h2>
                    </div>
                    <span className="rounded-md bg-red-500/15 px-3 py-1 text-xs font-bold text-red-200">
                      NTL Alert
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["92%", "Customer A"],
                      ["84%", "Customer C"],
                      ["15%", "Customer B"],
                    ].map(([score, label]) => (
                      <div
                        key={label}
                        className="rounded-md border border-white/10 bg-white/5 p-3"
                      >
                        <p className="text-2xl font-black text-white">
                          {score}
                        </p>
                        <p className="text-xs text-white/60">{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ["Feeder loss concentration", "78%"],
                      ["Inspection priority confidence", "91%"],
                      ["Estimated recoverable revenue", "High"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-sm"
                      >
                        <span className="text-white/70">{label}</span>
                        <span className="font-bold text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              The Core Problem
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Utilities lose revenue when delivered electricity is not billed,
              collected, or accounted for.
            </h2>
            <AccentLine />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Non-technical losses weaken utility profitability, reduce
              infrastructure investment, and make reliable power harder to
              sustain. EDT exists to help utilities find those losses faster and
              recover revenue with evidence-led field action.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {lossTypes.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white/90"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Main Product
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            EDT Revenue Protection Platform
          </h2>
          <AccentLine />
          <p className="text-lg text-muted-foreground">
            An AI-powered platform for detecting electricity theft, reducing
            non-technical losses, and guiding revenue protection teams toward
            the cases with the highest recovery potential.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="material-symbols-outlined mb-4 text-3xl text-primary">
                {feature.icon}
              </span>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-16">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="rounded-lg border border-white/10 bg-background/70 p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Customer Risk Scoring
            </p>
            <h2 className="mb-6 text-2xl font-bold">
              Focus inspections where they matter most.
            </h2>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Customer</th>
                    <th className="px-4 py-3 font-semibold">Risk Score</th>
                    <th className="px-4 py-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Customer A", "92%", "Inspect first"],
                    ["Customer B", "15%", "Monitor"],
                    ["Customer C", "84%", "Schedule visit"],
                  ].map(([customer, score, action]) => (
                    <tr key={customer} className="bg-white/[0.03]">
                      <td className="px-4 py-3 text-white/85">{customer}</td>
                      <td className="px-4 py-3 font-bold text-primary">
                        {score}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-background/70 p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Technology Behind EDT
            </p>
            <h2 className="mb-6 text-2xl font-bold">
              AI, utility analytics, geospatial intelligence, and field
              operations in one workflow.
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {technologyPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-md bg-white/5 px-4 py-3 text-sm font-semibold text-white/90"
                >
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Target Customers
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for electricity providers and the organizations that
              support them.
            </h2>
            <AccentLine />
            <p className="text-lg text-muted-foreground">
              EDT is designed for distribution companies, utility operators,
              regulators, metering providers, and energy service teams working
              to reduce theft and protect revenue in emerging electricity
              markets.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {customerSegments.map((segment) => (
              <div
                key={segment}
                className="rounded-lg border border-primary/20 bg-primary/10 px-5 py-4 font-semibold"
              >
                {segment}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Long-Term Roadmap
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From theft detection to a full utility operating system.
          </h2>
          <AccentLine />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                {phase.phase}
              </p>
              <h3 className="mt-2 text-xl font-bold">{phase.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {phase.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              EDT
            </p>
            <h2 className="mb-3 text-2xl font-bold">
              Commercial utility intelligence products
            </h2>
            <p className="text-muted-foreground">
              EDT builds and deploys AI products that solve utility problems,
              beginning with power theft detection and revenue protection.
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              EDN
            </p>
            <h2 className="mb-3 text-2xl font-bold">
              Talent and research ecosystem
            </h2>
            <p className="text-muted-foreground">
              EDN supports the nonprofit talent, research, and community
              ecosystem around AI in energy and utilities.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-lg bg-primary/10 p-8 text-center md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold">
            We help electricity utilities detect power theft and recover lost
            revenue using AI.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Talk to EDT about non-technical loss reduction, theft hotspot
            mapping, customer risk scoring, and inspection prioritization.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className={primaryLinkClass}>
              Request Demo
            </Link>
            <Link to="/products" className={secondaryLinkClass}>
              View Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
