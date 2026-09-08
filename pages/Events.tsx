import { useState } from "react";
import { SEO, pageSEO } from "../components/SEO";

const EVENTS_DATA = [
  {
    title: "Revenue Protection Demo Day",
    desc: "A product session for utility teams exploring AI-powered theft detection, customer risk scoring, and inspection prioritization.",
    details: "Demo | Upcoming | Virtual",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    category: "Product Demos",
  },
  {
    title: "Non-Technical Losses Roundtable",
    desc: "A focused conversation on meter bypass, illegal connections, revenue leakage, and utility recovery workflows.",
    details: "Roundtable | Upcoming | Lagos, Nigeria",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    category: "Utility Roundtables",
  },
  {
    title: "AI for Power Theft Detection Clinic",
    desc: "A practical session on anomaly detection, meter data analytics, GIS theft mapping, and field investigation design.",
    details: "Clinic | Upcoming | Virtual",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    category: "AI Clinics",
  },
  {
    title: "Field Inspection Workflow Workshop",
    desc: "A workshop for revenue protection and field operations teams using mobile workflows, GPS verification, and digital reports.",
    details: "Workshop | Upcoming | Virtual",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    category: "Workshops",
  },
];

const FILTERS = [
  "All Events",
  "Product Demos",
  "Utility Roundtables",
  "AI Clinics",
  "Workshops",
];

const buttonClass =
  "inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const Events = () => {
  const [filter, setFilter] = useState("All Events");
  const [showNoEvents, setShowNoEvents] = useState(false);

  const filteredEvents =
    filter === "All Events"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((event) => event.category === filter);

  return (
    <div className="flex flex-col gap-10 pb-10">
      <SEO {...pageSEO.events} />

      <section className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[1fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Events and Briefings
            </p>
            <h1 className="text-4xl font-black md:text-5xl">
              Utility intelligence sessions for revenue protection teams.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Join EDT product demos, NTL roundtables, AI clinics, and field
              workflow sessions for utilities working to detect power theft and
              recover lost revenue.
            </p>
            <button
              type="button"
              className={buttonClass}
              onClick={() => setShowNoEvents(true)}
            >
              Register Interest
            </button>
            {showNoEvents && (
              <p className="w-fit rounded-lg border border-amber-300/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-200/90">
                Registration is not open yet. Check back soon or contact our
                team for a private demo.
              </p>
            )}
          </div>
          <div
            className="aspect-video w-full rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 8, 18, 0.2), rgba(4, 8, 18, 0.65)), url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80")`,
            }}
          />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`h-9 rounded-md px-4 text-sm font-medium transition-colors ${
                filter === item
                  ? "bg-primary text-background"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div key={event.title} className="group">
              <div
                className="mb-4 aspect-[4/3] w-full rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url("${event.img}")` }}
              />
              <h3 className="mb-2 text-lg font-bold leading-tight">
                {event.title}
              </h3>
              <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
                {event.desc}
              </p>
              <p className="text-xs font-medium text-primary opacity-80">
                {event.details}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
