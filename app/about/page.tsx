"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Calendar, Check, FileCode, Layout, Sparkles, Star, User } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type MetricItem = { type: string; value: string; label: string };
type EducationItem = { degree: string; institution: string; period: string; description: string };
type AwardItem = { type: string; title: string; description: string; year: string };
type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  credentialLabel: string;
};

const METRIC_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  focus: Activity,
  projects: Sparkles,
  stack: Layout,
  delivery: Check,
};

const AWARD_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  star: Star,
  leadership: User,
  activity: Activity,
  sparkle: Sparkles,
};

export default function AboutPage() {
  const t = useTranslations();

  const metrics = (Array.isArray(t.raw("about.summary.metrics")) ? t.raw("about.summary.metrics") : []) as MetricItem[];
  const educationItems = (Array.isArray(t.raw("about.education.items")) ? t.raw("about.education.items") : []) as EducationItem[];
  const awardItems = (Array.isArray(t.raw("about.awards.items")) ? t.raw("about.awards.items") : []) as AwardItem[];
  const certItems = (Array.isArray(t.raw("about.certifications.items")) ? t.raw("about.certifications.items") : []) as CertificationItem[];

  // Asymmetric span pattern for the awards badge grid.
  const spanPattern = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-4", "md:col-span-3", "md:col-span-3"];

  return (
    <main className="bg-background">
      {/* Hero */}
      <Reveal>
        <section className="relative overflow-hidden bg-mesh px-6 py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-foreground/80">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              {t("about.hero.eyebrow")}
            </span>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight font-display md:text-6xl">
              {t("about.hero.titlePrefix")} <span className="text-gradient">{t("about.hero.titleHighlight")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/70">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </section>
      </Reveal>

      {/* Professional Summary */}
      <Reveal>
        <section id="summary" className="bg-background px-6 py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("about.summary.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight font-display md:text-4xl">
                {t("about.summary.title")}
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-foreground/70">{t("about.summary.bio1")}</p>
              <p className="mt-4 text-pretty leading-relaxed text-foreground/70">{t("about.summary.bio2")}</p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-4 lg:col-span-2"
            >
              {metrics.map((metric, i) => {
                const Icon = METRIC_ICONS[metric.type] ?? Sparkles;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <div className="mt-3 text-xl font-semibold tracking-tight font-display">{metric.value}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Education */}
      <Reveal>
        <section id="education" className="bg-muted/40 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("about.education.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight font-display md:text-4xl">
                {t("about.education.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {t("about.education.subtitle")}
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative mt-16 space-y-10 border-l border-border pl-8"
            >
              {educationItems.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative">
                  <span className="absolute -left-[2.35rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold tracking-tight font-display">{item.degree}</h3>
                      <span className="text-sm font-medium text-primary">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground/80">{item.institution}</p>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Awards & Leadership */}
      <Reveal>
        <section id="awards" className="relative overflow-hidden bg-mesh px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("about.awards.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight font-display md:text-4xl">
                {t("about.awards.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-foreground/70">{t("about.awards.subtitle")}</p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6"
            >
              {awardItems.map((award, i) => {
                const Icon = AWARD_ICONS[award.type] ?? Star;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`${spanPattern[i % spanPattern.length]} glass rounded-2xl p-6 text-foreground transition duration-300 ease-out hover:-translate-y-1 hover:shadow-glow motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-foreground/50">{award.year}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight font-display">{award.title}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/70">{award.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Certifications */}
      <Reveal>
        <section id="certifications" className="bg-muted/40 px-6 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("about.certifications.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight font-display md:text-4xl">
                {t("about.certifications.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {t("about.certifications.subtitle")}
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {certItems.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FileCode className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight font-display">{cert.name}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/80">{cert.issuer}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.date}</p>
                  <a
                    href={cert.credentialUrl}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {cert.credentialLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Closing CTA */}
      <Reveal>
        <section className="bg-background px-6 py-24 md:py-32">
          <div className="bg-gradient-brand mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-2xl px-8 py-14 text-center shadow-glow md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-balance text-2xl font-semibold tracking-tight font-display text-primary-foreground md:text-3xl">
                {t("about.cta.title")}
              </h2>
              <p className="mt-2 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
                {t("about.cta.subtitle")}
              </p>
            </div>
            <a
              href="/#contact"
              className="glass-strong inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
            >
              {t("about.cta.button")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
