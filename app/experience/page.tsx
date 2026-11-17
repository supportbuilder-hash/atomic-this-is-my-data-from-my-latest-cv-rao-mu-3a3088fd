"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Terminal, FileCode, Activity, GitBranch, Star, Sparkles, ArrowRight, Check } from 'lucide-react';
import Reveal from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TimelineItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
};

type HighlightItem = {
  title: string;
  description: string;
};

const TIMELINE_ICONS = [Terminal, FileCode, Activity, GitBranch];
const HIGHLIGHT_ICONS = [Star, Sparkles, GitBranch, Activity, Terminal];

function TimelineRow({
  job,
  index,
}: {
  job: TimelineItem;
  index: number;
}) {
  const isLeft = index % 2 === 0;
  const RoleIcon = TIMELINE_ICONS[index % TIMELINE_ICONS.length] ?? Terminal;

  return (
    <Reveal delay={index * 0.1} className="relative">
      <span
        className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-glow ring-4 ring-background md:left-1/2"
        aria-hidden="true"
      />
      <div className="md:grid md:grid-cols-2 md:gap-12">
        <div
          className={cn(
            "pl-10 md:pl-0",
            isLeft ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
          )}
        >
          <div className="surface-elevated glass rounded-lg border border-border p-6 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none">
            <div
              className={cn(
                "mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground",
                isLeft ? "md:justify-end" : "md:justify-start"
              )}
            >
              <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{job.period}</span>
            </div>
            <div
              className={cn(
                "mb-1 flex items-center gap-2",
                isLeft ? "md:flex-row-reverse" : ""
              )}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <RoleIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {job.role}
              </h3>
            </div>
            <p className="mb-4 text-sm font-medium text-primary">{job.company}</p>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {job.summary}
            </p>
            <ul
              className={cn(
                "space-y-2 text-left text-sm text-muted-foreground",
                isLeft && "md:text-right"
              )}
            >
              {job.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className={cn(
                    "flex items-start gap-2",
                    isLeft && "md:flex-row-reverse"
                  )}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ExperiencePage() {
  const t = useTranslations();

  const timelineItems = (
    Array.isArray(t.raw("experience.timeline.items")) ? t.raw("experience.timeline.items") : []
  ) as TimelineItem[];

  const highlightItems = (
    Array.isArray(t.raw("experience.highlights.items")) ? t.raw("experience.highlights.items") : []
  ) as HighlightItem[];

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-mesh py-24 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {t("experience.meta.eyebrow")}
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {t("experience.meta.title")}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {t("experience.meta.subtitle")}
            </p>
          </div>
        </Reveal>
      </section>

      <section id="timeline" className="py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="text-xs font-medium uppercase tracking-wide text-primary">
              {t("experience.timeline.eyebrow")}
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("experience.timeline.title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("experience.timeline.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl px-6">
          <div
            className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <div className="space-y-12">
            {timelineItems.map((job, i) => (
              <TimelineRow key={job.company + job.role} job={job} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="highlights" className="bg-card/40 py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="text-xs font-medium uppercase tracking-wide text-primary">
              {t("experience.highlights.eyebrow")}
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("experience.highlights.title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("experience.highlights.subtitle")}
            </p>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlightItems.map((item, i) => {
            const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length] ?? Star;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="surface-elevated glass rounded-lg border border-border p-6 transition hover:shadow-lg motion-reduce:transition-none"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="py-20 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-lg bg-gradient-brand px-8 py-14 text-center shadow-glow md:px-16">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              {t("experience.cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
              {t("experience.cta.subtitle")}
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl motion-reduce:transition-none"
            >
              {t("experience.cta.button")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}