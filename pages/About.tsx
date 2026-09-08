import { Link } from "react-router-dom";
import { SEO, pageSEO } from "../components/SEO";
import koladeImg from "@/images/founder/kolade.jpg";
import timiImg from "@/images/founder/timi.jpg";
import obafemiImg from "@/images/founder/obafemi.jpg";

const linkClass =
  "inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const outlineLinkClass =
  "inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const intelligenceCapabilities = [
  "Smart meter analytics",
  "Machine learning",
  "Geospatial intelligence",
  "Utility operational data",
  "Revenue assurance workflows",
  "Field inspection intelligence",
];

const missionOutcomes = [
  "Detect power theft",
  "Protect utility revenue",
  "Improve operational efficiency",
  "Strengthen energy access",
  "Support grid reliability",
  "Prioritize field investigations",
];

const targetUtilities = [
  "Ikeja Electric",
  "Eko Electricity Distribution Company",
  "Abuja Electricity Distribution Company",
  "Ibadan Electricity Distribution Company",
];

const values = [
  {
    title: "Utility Focus",
    description:
      "We build for distribution companies, regulators, and operators solving real non-technical loss problems.",
  },
  {
    title: "Evidence-Led Action",
    description:
      "We turn data into inspection priorities, risk scores, and recovery opportunities that field teams can act on.",
  },
  {
    title: "Operational Trust",
    description:
      "We treat utility data, customer risk models, and field workflows with discipline, security, and accountability.",
  },
  {
    title: "Africa-First Intelligence",
    description:
      "We design for emerging electricity markets where revenue leakage directly affects grid investment and reliability.",
  },
];

export const About = () => {
  return (
    <div className="flex w-full flex-col bg-background text-foreground">
      <SEO {...pageSEO.about} />

      <section className="relative flex min-h-[460px] w-full items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-4xl border-l-4 border-primary pl-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About EDT
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
              AI-Powered Utility Intelligence for Power Theft Detection and
              Revenue Protection
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
              Energy Data Technology develops advanced artificial intelligence
              solutions that help electricity distribution companies detect
              power theft, reduce energy losses, improve revenue collection, and
              strengthen grid reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1fr_0.9fr] md:py-24">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            What EDT Is Today
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A utility intelligence company focused on non-technical losses and
            revenue leakage.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            EDT combines smart meter analytics, machine learning, geospatial
            intelligence, and utility operational data to identify abnormal
            consumption patterns, detect illegal connections, prioritize field
            investigations, and recover lost revenue.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our current focus is clear: help electricity utilities detect power
            theft and recover lost revenue using AI.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {intelligenceCapabilities.map((capability) => (
            <div
              key={capability}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold"
            >
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-16 md:py-20">
        <div className="container mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-background/70 p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Vision
            </p>
            <h2 className="text-2xl font-bold leading-relaxed">
              To become Africa's leading AI-powered utility intelligence company
              helping electricity providers eliminate revenue losses and build
              financially sustainable power systems.
            </h2>
          </div>
          <div className="rounded-lg border border-white/10 bg-background/70 p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Mission
            </p>
            <h2 className="text-2xl font-bold leading-relaxed">
              To empower utilities with advanced data intelligence that detects
              power theft, protects revenue, improves operational efficiency,
              and strengthens energy access.
            </h2>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Outcomes We Build For
          </p>
          <h2 className="text-3xl font-bold">
            Utility intelligence is only useful when it changes field action and
            revenue recovery.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {missionOutcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-lg border border-primary/20 bg-primary/10 px-5 py-4 font-semibold"
            >
              {outcome}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Primary Market
            </p>
            <h2 className="text-3xl font-bold">
              Electricity Distribution Companies
            </h2>
            <p className="mt-4 text-muted-foreground">
              EDT is built for DISCOs and utility teams that need to reduce
              non-technical losses, improve collection, and direct inspections
              toward the highest-risk customers and locations.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {targetUtilities.map((utility) => (
              <div
                key={utility}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold"
              >
                {utility}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-3xl font-bold">How We Work</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-white/10 bg-background/70 p-6"
              >
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              EDN Nonprofit
            </p>
            <h2 className="mb-3 text-2xl font-bold">
              Talent, research, and community
            </h2>
            <p className="text-muted-foreground">
              EDN builds the talent and research ecosystem around AI in energy
              and utilities.
            </p>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              EDT Commercial
            </p>
            <h2 className="mb-3 text-2xl font-bold">
              Utility products and deployments
            </h2>
            <p className="text-muted-foreground">
              EDT builds and deploys AI products that solve utility problems,
              beginning with power theft detection and revenue protection.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold">Meet the Team</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {[
            {
              name: "Elijah Obafemi",
              role: "Lead Software Engineer",
              img: obafemiImg,
            },
            {
              name: "Liberty Rayesomo",
              role: "Head of Research",
              img: timiImg,
            },
            {
              name: "Kolade Atanseiye",
              role: "Lead Data Scientist",
              img: koladeImg,
            },
          ].map((person) => (
            <div key={person.name} className="flex flex-col items-center text-center">
              <img
                src={person.img}
                alt={person.name}
                className="mb-4 h-32 w-32 rounded-full object-cover ring-2 ring-primary/30"
              />
              <h3 className="text-lg font-bold">{person.name}</h3>
              <p className="text-sm text-primary">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-lg bg-primary/10 p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="mb-2 text-2xl font-bold">
              Talk to EDT about power theft detection.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              We work with utilities and partners focused on revenue protection,
              non-technical loss reduction, and stronger grid operations.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
            <Link to="/contact" className={linkClass}>
              Request Demo
            </Link>
            <Link to="/products" className={outlineLinkClass}>
              View Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
