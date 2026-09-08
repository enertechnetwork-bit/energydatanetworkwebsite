import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { FormspreeForm } from "../components/FormspreeForm";
import { SEO, pageSEO } from "../components/SEO";

export const Contact = () => {
  return (
    <div className="flex flex-col gap-16 pb-10">
      <SEO {...pageSEO.contact} />

      <section className="container mx-auto max-w-7xl px-4 pt-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Contact EDT
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Request a utility intelligence demo.
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Talk to our team about power theft detection, non-technical loss
            reduction, revenue leakage analytics, GIS theft mapping, and field
            inspection prioritization.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Send a Message</h2>
            <FormspreeForm
              buttonText="Request Demo"
              buttonClassName="w-full sm:w-auto text-background-dark font-bold"
              successMessage="Thank you for reaching out. Our team will get back to you soon."
            >
              <input type="hidden" name="form_type" value="demo_request" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-white/5"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Work Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@utility.com"
                    required
                    className="bg-white/5"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium">
                  Utility or Organization
                </label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="Your DISCO, regulator, metering company, or partner organization"
                  className="bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Area of Interest
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Power theft detection, revenue protection, GIS mapping..."
                  required
                  className="bg-white/5"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  What problem are you trying to solve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your non-technical loss, theft detection, inspection, or revenue recovery goals."
                  required
                  rows={6}
                  className="flex w-full resize-none rounded-md border border-input bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </FormspreeForm>
          </div>

          <div className="space-y-8">
            <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>

            <div className="space-y-6">
              <Card className="border-white/10 bg-white/[0.04]">
                <CardContent className="flex items-start gap-4 pt-6">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    mail
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <a
                      href="mailto:info@energydatanetwork.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      info@energydatanetwork.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/[0.04]">
                <CardContent className="flex items-start gap-4 pt-6">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    location_on
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">Location</h3>
                    <p className="text-muted-foreground">
                      Lagos, Nigeria
                      <br />
                      Supporting utilities across Africa
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/[0.04]">
                <CardContent className="flex items-start gap-4 pt-6">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    bolt
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">Best Fit</h3>
                    <p className="text-muted-foreground">
                      DISCOs, mini-grid operators, regulators, smart metering
                      providers, and energy service companies.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-background"
                >
                  <span className="text-sm font-bold">X</span>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-background"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-background"
                >
                  <span className="text-sm font-bold">GH</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="rounded-lg bg-primary/10 p-8 md:p-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-center text-2xl font-bold">
              Partner With EDT
            </h2>
            <p className="mb-6 text-center text-muted-foreground">
              Interested in piloting power theft detection, integrating smart
              meter data, or partnering on utility revenue protection? Tell us
              what you are building.
            </p>
            <FormspreeForm
              buttonText="Submit Partnership Inquiry"
              buttonClassName="w-full text-background-dark font-bold"
              successMessage="Thank you for your interest in partnering with EDT. We will be in touch soon."
            >
              <input
                type="hidden"
                name="form_type"
                value="utility_partnership"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="partner_name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="partner_name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="partner_email"
                    className="text-sm font-medium"
                  >
                    Email Address
                  </label>
                  <Input
                    id="partner_email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-white/10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="partner_organization"
                  className="text-sm font-medium"
                >
                  Organization
                </label>
                <Input
                  id="partner_organization"
                  name="organization"
                  placeholder="Your company or organization"
                  className="bg-white/10"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="partner_message"
                  className="text-sm font-medium"
                >
                  How would you like to collaborate?
                </label>
                <textarea
                  id="partner_message"
                  name="message"
                  placeholder="Tell us about your utility, data, metering, field operations, or revenue protection partnership idea."
                  required
                  rows={4}
                  className="flex w-full resize-none rounded-md border border-input bg-white/10 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </FormspreeForm>
          </div>
        </div>
      </section>
    </div>
  );
};
