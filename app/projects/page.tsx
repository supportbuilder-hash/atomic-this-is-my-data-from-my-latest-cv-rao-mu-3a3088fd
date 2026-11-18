"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2 as Github, ArrowRight, Layout, Star, Activity, FileCode } from 'lucide-react';
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

const ADDITIONAL_IMAGES: Record<string, string> = {
  "E-commerce Regression Suite": "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/9eed3146eaee4c1c87e446a617633eca.jpg",
  "API Contract Testing Framework": "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/43d9d75fc64547ee98b1449ffd61d05c.jpg",
  "Mobile QA Automation Pipeline": "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/6a92eb028a334f7db8711bc931340394.jpg",
  "Performance Load Testing Dashboard": "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/df4b8282c11e4537bc78776b2da504ab.jpg",
  "Defect Analytics Dashboard": "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/c7c0422183df463c8084c424f67807ae.jpg",
};

export default function ProjectsPage() {
  const t = useTranslations();

  const rawItems = t.raw("projects.details.items");
  const ADDITIONAL_PROJECTS: ProjectItem[] = Array.isArray(rawItems)
    ? (rawItems as ProjectItem[]).map((item) => ({
        ...item,
        image: item.image || ADDITIONAL_IMAGES[item.title] || "/images/software-testing-workstation.jpg",
      }))
    : [];

  const categories = ["All", ...Array.from(new Set(ADDITIONAL_PROJECTS.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? ADDITIONAL_PROJECTS
        : ADDITIONAL_PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory, ADDITIONAL_PROJECTS],
  );

  const veridatTechStack = t.raw("projects.featured.veridatai.techStack");
  const veridatTags: string[] = Array.isArray(veridatTechStack) ? (veridatTechStack as string[]) : [];
  const atomicTechStack = t.raw("projects.featured.atomicBuilder.techStack");
  const atomicTags: string[] = Array.isArray(atomicTechStack) ? (atomicTechStack as string[]) : [];

  return (
    <main className="bg-background text-foreground">
      {/* Page header */}
      <Reveal>
        <section className="relative overflow-hidden bg-mesh px-6 py-24 md:py-32">
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-foreground/80">
              {t("projects.header.eyebrow")}
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight md:text-6xl">
              <span className="text-gradient">{t("projects.header.title")}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/70">
              {t("projects.header.subtitle")}
            </p>
          </div>
        </section>
      </Reveal>

      {/* Featured projects */}
      <section id="featured-projects" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t("projects.featured.eyebrow")}
            </span>
          </Reveal>

          {/* VeridatAI - image left, text right */}
          <Reveal delay={0.05} className="mt-10">
            <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-border bg-card p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none md:grid-cols-2 md:p-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border"
              >
                <img
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/7250ad3662074f1ab558b6296d25900e.jpg"
                  alt="VeridatAI AI-powered test automation dashboard"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                  <Star className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("projects.featured.veridatai.badge")}
                </div>
              </motion.div>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {t("projects.featured.veridatai.name")}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {t("projects.featured.veridatai.description")}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {veridatTags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("projects.featured.veridatai.liveLabel")}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {t("projects.featured.veridatai.codeLabel")}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Atomic Builder - text left, image right */}
          <Reveal delay={0.1} className="mt-8">
            <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-border bg-card p-6 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none md:grid-cols-2 md:p-10">
              <div className="order-2 md:order-1">
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {t("projects.featured.atomicBuilder.name")}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {t("projects.featured.atomicBuilder.description")}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {atomicTags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {t("projects.featured.atomicBuilder.liveLabel")}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {t("projects.featured.atomicBuilder.codeLabel")}
                  </a>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative order-1 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border md:order-2"
              >
                <img
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/c4aa5f8eac6f40ad9cb092688eef4ed8.jpg"
                  alt="Atomic Builder component automation framework interface"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                  <FileCode className="h-3.5 w-3.5" aria-hidden="true" />
                  {t("projects.featured.atomicBuilder.badge")}
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Additional project details - filterable grid */}
      <section id="project-details" className="border-t border-border bg-card/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t("projects.details.eyebrow")}
              </span>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {t("projects.details.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {t("projects.details.subtitle")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none",
                    activeCategory === cat
                      ? "border-primary bg-primary text-primary-foreground shadow-glow"
                      : "border-border bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Layout className="h-3.5 w-3.5" aria-hidden="true" />
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                variants={fadeInUp}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(project.tags ?? []).slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors duration-300 ease-out hover:text-foreground"
                  >
                    {t("projects.details.viewLabel")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <Reveal>
        <section className="px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-brand p-10 text-center shadow-glow md:p-14">
            <Activity className="mx-auto h-8 w-8 text-primary-foreground" aria-hidden="true" />
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
              {t("projects.cta.title")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
              {t("projects.cta.subtitle")}
            </p>
            <Link
              href="/"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {t("projects.cta.button")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
