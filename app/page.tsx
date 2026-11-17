"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { Sparkles, Terminal, Check, ArrowRight, Download, Mail, Briefcase as Linkedin, Activity, GitBranch, FileCode, Settings, Layout, Star, Award } from 'lucide-react';
import Reveal from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectItem = {
  name: string;
  role: string;
  description: string;
  stack: string;
  image: string;
};

type ExpertiseItem = { title: string; description: string };

const EXPERTISE_ICONS = [Activity, GitBranch, FileCode, Settings, Layout, Terminal];

const EMAIL = "rao.muhammadali.qa@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/rao-muhammad-ali";

const floatA: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: [0, -14, 0],
    transition: { y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.6 } },
  },
};

const floatB: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: [0, 12, 0],
    transition: { y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, opacity: { duration: 0.6 } },
  },
};

export default function HomePage() {
  const t = useTranslations();

  const heroBadges = (Array.isArray(t.raw("home.hero.badges")) ? t.raw("home.hero.badges") : []) as string[];
  const heroLines = (Array.isArray(t.raw("home.hero.terminal.lines")) ? t.raw("home.hero.terminal.lines") : []) as string[];
  const highlights = (Array.isArray(t.raw("home.summary.highlights")) ? t.raw("home.summary.highlights") : []) as {
    label: string;
    description: string;
  }[];
  const projects = (Array.isArray(t.raw("home.projects.items")) ? t.raw("home.projects.items") : []) as ProjectItem[];
  const expertiseItems = (Array.isArray(t.raw("home.expertise.items")) ? t.raw("home.expertise.items") : []) as ExpertiseItem[];
  const certifications = (Array.isArray(t.raw("home.credentials.certifications")) ? t.raw("home.credentials.certifications") : []) as string[];
  const awards = (Array.isArray(t.raw("home.credentials.awards")) ? t.raw("home.credentials.awards") : []) as string[];

  return (
    <main className="overflow-x-clip">
      {/* HERO */}
      <Reveal>
        <section className="relative bg-mesh pt-28 pb-24 md:pt-36 md:pb-32">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
            <div>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                {t("home.hero.eyebrow")}
              </motion.span>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.08 }}
                className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl"
              >
                <span className="text-gradient">{t("home.hero.title")}</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.16 }}
                className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {t("home.hero.subtitle")}
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.24 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("home.hero.primaryCta")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t("home.hero.secondaryCta")}
                </a>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-2"
              >
                {heroBadges.map((badge, i) => (
                  <motion.span
                    key={i}
                    variants={i % 2 === 0 ? floatA : floatB}
                    className="rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              <motion.div
                animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="glass-strong rounded-2xl p-5 shadow-glow"
              >
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <Terminal className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold text-foreground">{t("home.hero.terminal.title")}</span>
                </div>
                <div className="mt-4 space-y-3 font-mono text-xs">
                  {heroLines.map((line, i) => (
                    <div key={i} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -right-6 -top-6 hidden rounded-xl p-3 shadow-glow sm:block"
              >
                <Activity className="h-5 w-5 text-primary" aria-hidden="true" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="glass absolute -bottom-5 -left-5 hidden rounded-xl p-3 shadow-glow sm:block"
              >
                <GitBranch className="h-5 w-5 text-primary" aria-hidden="true" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* PROFESSIONAL SUMMARY */}
      <Reveal>
        <section id="summary" className="bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                {t("home.summary.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t("home.summary.title")}
              </h2>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{t("home.summary.paragraph1")}</p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t("home.summary.paragraph2")}</p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {highlights.map((h, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="surface-elevated rounded-xl border border-border bg-card p-4">
                      <p className="text-sm font-semibold text-foreground">{h.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{h.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl border border-border shadow-glow ring-1 ring-border">
                <img
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/7b61ab0b9380492bbe10c86a33c5c7d6.jpg"
                  alt="QA engineer reviewing an automated test dashboard"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FEATURED PROJECTS */}
      <Reveal>
        <section id="projects-preview" className="bg-muted/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {t("home.projects.eyebrow")}
                </span>
                <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {t("home.projects.title")}
                </h2>
                <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  {t("home.projects.subtitle")}
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t("home.projects.cta")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {projects.map((project, i) => (
                <Reveal key={project.name} delay={i * 0.1}>
                  <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-glow motion-reduce:transition-none">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {project.role}
                        </span>
                      </div>
                      <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
                      <p className="mt-4 font-mono text-xs text-muted-foreground">{project.stack}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CORE EXPERTISE */}
      <Reveal>
        <section id="expertise" className="relative bg-mesh py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                {t("home.expertise.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t("home.expertise.title")}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{t("home.expertise.subtitle")}</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertiseItems.map((item, i) => {
                const Icon = EXPERTISE_ICONS[i % EXPERTISE_ICONS.length] ?? Activity;
                return (
                  <Reveal key={item.title} delay={i * 0.07}>
                    <div className="glass surface-elevated h-full rounded-2xl p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t("home.expertise.cta")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CREDENTIALS: EDUCATION, CERTIFICATIONS, AWARDS */}
      <Reveal>
        <section id="credentials" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                {t("home.credentials.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {t("home.credentials.title")}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{t("home.credentials.subtitle")}</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <Reveal>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("home.credentials.educationLabel")}
                  </h3>
                  <p className="mt-4 text-lg font-semibold text-foreground">{t("home.credentials.educationDegree")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t("home.credentials.educationInstitution")}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t("home.credentials.educationPeriod")}</p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("home.credentials.certificationsLabel")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {certifications.map((cert, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {t("home.credentials.awardsLabel")}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {awards.map((award, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <Star className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT */}
      <Reveal>
        <section id="contact" className="relative bg-gradient-brand py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              <Award className="h-4 w-4" aria-hidden="true" />
              {t("home.contact.eyebrow")}
            </span>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              {t("home.contact.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
              {t("home.contact.subtitle")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t("home.contact.emailLabel")}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                {t("home.contact.linkedinLabel")}
              </a>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">{t("home.contact.email")}</p>
          </div>
        </section>
      </Reveal>
    </main>
  );
}