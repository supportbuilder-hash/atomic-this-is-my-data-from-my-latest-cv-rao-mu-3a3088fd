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
        <section className="relative overflow-hidden bg-mesh pt-28 pb-24 md:pt-36 md:pb-32">
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
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
                className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl"
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
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t("home.hero.primaryCta")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
        <section id="summary" className="bg-background px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("home.summary.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {t("home.summary.title")}
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{t("home.summary.description")}</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">{h.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* EXPERTISE */}
      <Reveal>
        <section id="expertise" className="bg-muted/40 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("home.expertise.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
                <span className="text-gradient">{t("home.expertise.title")}</span>
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{t("home.expertise.subtitle")}</p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {expertiseItems.map((item, i) => {
                const Icon = EXPERTISE_ICONS[i % EXPERTISE_ICONS.length] ?? Terminal;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* PROJECTS PREVIEW */}
      <Reveal>
        <section id="projects-preview" className="bg-background px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {t("home.projects.eyebrow")}
                </span>
                <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  {t("home.projects.title")}
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                {t("home.projects.viewAllLabel")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">{project.role}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{project.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <p className="mt-4 text-xs font-medium text-muted-foreground">{project.stack}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* CREDENTIALS */}
      <Reveal>
        <section id="credentials" className="relative overflow-hidden bg-mesh px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                {t("home.credentials.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
                <span className="text-gradient">{t("home.credentials.title")}</span>
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                  <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                  {t("home.credentials.certificationsTitle")}
                </h3>
                <div className="mt-6 space-y-4">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                  <Star className="h-5 w-5 text-primary" aria-hidden="true" />
                  {t("home.credentials.awardsTitle")}
                </h3>
                <div className="mt-6 space-y-4">
                  {awards.map((award, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
                    >
                      <Star className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{award}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT CTA */}
      <Reveal>
        <section id="contact" className="bg-background px-6 py-20 md:py-28">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-brand bg-primary px-6 py-16 text-center text-primary-foreground shadow-glow md:px-16 md:py-20">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              {t("home.contact.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-primary-foreground/80">
              {t("home.contact.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t("home.contact.emailLabel")}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-strong inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                {t("home.contact.linkedinLabel")}
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
