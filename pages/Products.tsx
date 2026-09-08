import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { SEO, pageSEO } from "../components/SEO";

const linkClass =
  "inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const outlineLinkClass =
  "inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const detectionSignals = [
  "Meter bypass",
  "Meter tampering",
  "Energy diversion",
  "Suspicious consumption behavior",
  "Illegal connections",
  "Billing irregularities",
];

const platformCapabilities = [
  {
    icon: "electric_bolt",
    title: "Theft Detection Engine",
    description:
      "Identifies abnormal consumption, meter bypass, meter tampering, energy diversion, and illegal connection patterns.",
  },
  {
    icon: "percent",
    title: "Customer Risk Scoring",
    description:
      "Scores every customer by theft probability so utilities can focus inspections on the highest-risk accounts.",
  },
  {
    icon: "assignment_turned_in",
    title: "Smart Inspection Prioritization",
    description:
      "Ranks priority customers, high-risk locations, and estimated recoverable revenue before field visits.",
  },
  {
    icon: "paid",
    title: "Revenue Leakage Analytics",
    description:
      "Shows where revenue leakage is occurring, how much is at risk, and how losses trend by area or asset.",
  },
  {
    icon: "travel_explore",
    title: "GIS-Based Theft Mapping",
    description:
      "Visualizes theft hotspots, high-loss feeders, transformer-level losses, and inspection outcomes on a map.",
  },
  {
    icon: "space_dashboard",
    title: "Utility Dashboard",
    description:
      "Monitors energy delivered, energy billed, revenue collected, loss percentage, and high-risk customers.",
  },
];

const futureModules = [
  {
    name: "EDT TheftAI",
    label: "Machine Learning Power Theft Detection System",
    description:
      "Uses consumption patterns, meter readings, customer history, weather data, and transformer data to predict likely theft before inspections occur.",
  },
  {
    name: "EDT GridWatch",
    label: "Distribution Network Monitoring Platform",
    description:
      "Provides feeder monitoring, transformer monitoring, outage intelligence, and asset visibility for distribution networks.",
  },
  {
    name: "EDT MeterVision",
    label: "Computer Vision for Meter Inspection",
    description:
      "Allows inspectors to capture meter images, detect tampering, verify installations, and generate reports automatically.",
  },
  {
    name: "EDT Inspector",
    label: "Mobile App for Utility Field Teams",
    description:
      "Supports GPS verification, inspection workflows, image capture, digital reports, and offline field operations.",
  },
];

const dashboardMetrics = [
  "Energy delivered",
  "Energy billed",
  "Revenue collected",
  "Loss percentages",
  "High-risk customers",
  "Inspection outcomes",
];

export const Products = () => {
  return (
    <div className="flex flex-col gap-16 pb-10">
      <SEO {...pageSEO.products} />

      <section className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div
            className="min-h-[360px] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 8, 18, 0.25), rgba(4, 8, 18, 0.65)), url("https://images.unsplash.com/photo-1516820827855-3ea1bd6f79ea?auto=format&fit=crop&w=1600&q=80")`,
            }}
          />
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Main Product
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-5xl">
              EDT Revenue Protection Platform
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              An AI-powered platform for detecting electricity theft and
              reducing non-technical losses. It combines smart meter analytics,
              machine learning, geospatial intelligence, and utility operational
              data to prioritize revenue recovery.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className={linkClass}>
                Request Demo
              </Link>
              <Link to="/contact" className={outlineLinkClass}>
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 max-w-3xl">
          <h2 className="mb-3 text-3xl font-bold">
            Built to detect the signals utilities already fight every day.
          </h2>
          <p className="text-muted-foreground">
            The platform turns meter, customer, network, billing, and inspection
            data into clear action for revenue protection teams.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {detectionSignals.map((signal) => (
            <div
              key={signal}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold"
            >
              {signal}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold">Platform Capabilities</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platformCapabilities.map((item) => (
            <Card
              key={item.title}
              className="border-white/10 bg-white/[0.04] transition-colors hover:bg-white/[0.07]"
            >
              <CardContent className="flex gap-4 pt-6">
                <span className="material-symbols-outlined shrink-0 text-3xl text-primary">
                  {item.icon}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-16">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-background/70 p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Example Workflow
            </p>
            <h2 className="mb-6 text-2xl font-bold">
              Score customers, prioritize inspections, recover revenue.
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Analyze consumption and meter data",
                  text: "The system detects abnormal usage patterns, billing gaps, and suspicious meter behavior.",
                },
                {
                  step: "02",
                  title: "Generate theft probability scores",
                  text: "Customers and locations are ranked by risk level and likely revenue recovery value.",
                },
                {
                  step: "03",
                  title: "Dispatch field teams with evidence",
                  text: "Inspectors receive prioritized cases, mapped locations, and recommended actions.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-sm font-black text-primary">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-background/70 p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Utility Dashboard
            </p>
            <h2 className="mb-6 text-2xl font-bold">
              Operational visibility for revenue protection teams.
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {dashboardMetrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-md bg-white/5 px-4 py-3 text-sm font-semibold text-white/90"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Future Product Modules
          </p>
          <h2 className="text-3xl font-bold">
            Extending revenue protection into broader grid intelligence.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {futureModules.map((module) => (
            <div
              key={module.name}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                {module.name}
              </p>
              <h3 className="mt-2 text-xl font-bold">{module.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-lg bg-primary/10 p-8 text-center md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold">
            Ready to reduce non-technical losses?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            EDT helps utilities move from broad loss estimates to prioritized,
            evidence-backed revenue recovery.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className={linkClass}>
              Request Demo
            </Link>
            <Link to="/about" className={outlineLinkClass}>
              Learn About EDT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
