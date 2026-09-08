import { Link } from "react-router-dom";
import { SEO, pageSEO } from "../components/SEO";

const OPEN_ROLES: {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}[] = [];

const buttonLinkClass =
  "inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const outlineLinkClass =
  "inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-8 text-sm font-bold text-white transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const BENEFITS = [
  {
    icon: "query_stats",
    title: "Hard Utility Problems",
    description:
      "Work on theft detection, non-technical loss reduction, risk scoring, and revenue assurance for real utilities.",
  },
  {
    icon: "model_training",
    title: "Applied AI",
    description:
      "Build machine learning systems that combine meter data, customer history, GIS, and operational records.",
  },
  {
    icon: "map",
    title: "Field Impact",
    description:
      "Turn analytics into inspection priorities, evidence, routes, and reports that field teams can use.",
  },
  {
    icon: "public",
    title: "Africa-First Mission",
    description:
      "Help utilities protect revenue so they can invest in stronger grids and more reliable electricity access.",
  },
];

const VALUES = [
  {
    title: "Evidence Over Guesswork",
    description:
      "We build products that help utility teams make decisions from data, not assumptions.",
  },
  {
    title: "Operational Discipline",
    description:
      "We care about reliability, privacy, deployment quality, and the realities of field operations.",
  },
  {
    title: "Utility Empathy",
    description:
      "We design around the pressures distribution companies face: revenue leakage, service reliability, and inspection capacity.",
  },
  {
    title: "Measured Impact",
    description:
      "We measure success through loss reduction, recovered revenue, better prioritization, and stronger grid outcomes.",
  },
];

const FUTURE_TEAMS = [
  "Machine Learning and Data Science",
  "Utility Analytics",
  "GIS and Location Intelligence",
  "Field Operations Technology",
  "Revenue Assurance",
  "Product Engineering",
];

export const Careers = () => {
  const hasOpenRoles = OPEN_ROLES.length > 0;

  return (
    <div className="flex flex-col gap-16 pb-16">
      <SEO {...pageSEO.careers} />

      <section className="container mx-auto max-w-7xl px-4 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Careers at EDT
          </p>
          <h1 className="mb-6 text-4xl font-black md:text-5xl">
            Build AI systems that stop power theft and protect utility revenue.
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            We are building a focused utility intelligence company for emerging
            electricity markets. Our work connects AI, meter analytics, GIS,
            revenue assurance, and field operations.
          </p>
          <a href="#open-roles" className={buttonLinkClass}>
            View Open Positions
          </a>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Join EDT?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-lg bg-white/[0.04] p-6 text-center transition-colors hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex justify-center text-primary">
                <span className="material-symbols-outlined text-4xl">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-white/[0.04] p-8 md:p-12">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {VALUES.map((value, index) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/20">
                  <span className="text-lg font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Teams We Are Building
            </p>
            <h2 className="text-3xl font-bold">
              EDT needs builders across data, product, utility operations, and
              field technology.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {FUTURE_TEAMS.map((team) => (
              <div
                key={team}
                className="rounded-md bg-white/5 px-4 py-3 text-sm font-semibold"
              >
                {team}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="open-roles"
        className="container mx-auto max-w-7xl scroll-mt-24 px-4"
      >
        <h2 className="mb-4 text-center text-3xl font-bold">Open Positions</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          {hasOpenRoles
            ? "Explore our current openings and find the role that matches your utility intelligence experience."
            : "We do not have public openings right now, but we are building relationships with people interested in AI for utility revenue protection."}
        </p>

        {hasOpenRoles ? (
          <div className="space-y-4">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="group cursor-pointer rounded-lg bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {role.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-md bg-primary/20 px-3 py-1 text-xs text-primary">
                        {role.department}
                      </span>
                      <span className="rounded-md bg-white/10 px-3 py-1 text-xs">
                        {role.location}
                      </span>
                      <span className="rounded-md bg-white/10 px-3 py-1 text-xs">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <Link to="/contact" className={buttonLinkClass}>
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg bg-white/[0.04] p-12 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-4xl text-primary">
                work
              </span>
            </div>
            <h3 className="mb-4 text-2xl font-bold">
              No Open Roles Right Now
            </h3>
            <p className="mx-auto mb-8 max-w-md text-muted-foreground">
              If your work sits at the intersection of AI, power utilities,
              meter analytics, GIS, or revenue assurance, reach out and tell us
              how you can contribute.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className={buttonLinkClass}>
                Send Your Profile
              </Link>
              <Link to="/products" className={outlineLinkClass}>
                View Platform
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-primary/10 p-8 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-bold">Have Questions?</h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Want to learn more about building with EDT? Reach out and start a
            focused conversation about utility intelligence and revenue
            protection.
          </p>
          <Link to="/contact" className={buttonLinkClass}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};
