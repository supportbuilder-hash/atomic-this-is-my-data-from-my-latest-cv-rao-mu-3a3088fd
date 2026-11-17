"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Terminal, GitBranch, Settings, Activity, GitFork, FileText, Sparkles, ArrowRight, Circle, type LucideIcon } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SkillCategory = { category: string; skills: string[] };
type ToolItem = { name: string; category: string };
type ProficiencyItem = { label: string; value: number };

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Test Automation": Terminal,
  "API & Backend Testing": GitBranch,
  "CI/CD & DevOps": Settings,
  "Programming & Scripting": FileText,
  "Performance & Security": Activity,
  "Quality Practices": Sparkles,
};

const TOOL_CATEGORY_ICONS: Record<string, LucideIcon> = {
  Automation: Terminal,
  "API Testing": GitBranch,
  "CI/CD": Settings,
  "Cloud & Containers": Activity,
  "Version Control": GitFork,
  "Test Management": FileText,
};

const barVariant: Variants = {
  hidden: { width: 0 },
  visible: (value: number) => ({
    width: `${value}%`,
    transition: { duration: 1.1, ease: "easeOut" },
  }),
};

function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm text-card-foreground transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">
      {label}
    </span>
  );
}

export default function SkillsPage() {
  const t = useTranslations();

  const skillCategories = (
    Array.isArray(t.raw("skillsPage.skillsGrid.categories"))
      ? t.raw("skillsPage.skillsGrid.categories")
      : []
  ) as SkillCategory[];

  const tools = (
    Array.isArray(t.raw("skillsPage.tools.items")) ? t.raw("skillsPage.tools.items") : []
  ) as ToolItem[];

  const proficiencies = (
    Array.isArray(t.raw("skillsPage.proficiencies.items"))
      ? t.raw("skillsPage.proficiencies.items")
      : []
  ) as ProficiencyItem[];

  const radarPoints = proficiencies.map((p, i) => {
    const angle = (Math.PI * 2 * i) / Math.max(proficiencies.length, 1) - Math.PI / 2;
    const radius = (Math.max(0, Math.min(100, p.value)) / 100) * 42;
    return {
      label: p.label,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
      labelX: 50 + 48 * Math.cos(angle),
      labelY: 50 + 48 * Math.sin(angle),
    };
  });
  const radarPolygon = radarPoints.map((p) => `${p.x},${p.y}`).join(" ");
  const radarRings = [0.25, 0.5, 0.75, 1];

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <Reveal>
        <section className="relative overflow-hidden bg-mesh">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {t("skillsPage.hero.eyebrow")}
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight md:text-6xl">
              <span className="text-gradient">{t("skillsPage.hero.titleAccent")}</span>{" "}
              {t("skillsPage.hero.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {t("skillsPage.hero.subtitle")}
            </p>
          </div>
        </section>
      </Reveal>

      {/* Skills grid */}
      <Reveal>
        <section id="skills-grid" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t("skillsPage.skillsGrid.eyebrow")}
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              {t("skillsPage.skillsGrid.title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("skillsPage.skillsGrid.subtitle")}
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {skillCategories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.category] ?? Circle;
              return (
                <motion.div
                  key={cat.category}
                  variants={fadeInUp}
                  className="surface-elevated rounded-2xl border border-border bg-card p-6 transition duration-300 ease-out hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                    {cat.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(cat.skills ?? []).map((skill) => (
                      <SkillTag key={skill} label={skill} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </Reveal>

      {/* Tools */}
      <Reveal>
        <section id="tools" className="bg-card/40">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t("skillsPage.tools.eyebrow")}
              </span>
              <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
                {t("skillsPage.tools.title")}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {t("skillsPage.tools.subtitle")}
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            >
              {tools.map((tool) => {
                const Icon = TOOL_CATEGORY_ICONS[tool.category] ?? Circle;
                return (
                  <motion.div
                    key={tool.name}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="glass flex flex-col items-start gap-3 rounded-2xl border border-border p-5 shadow-glow transition duration-300 ease-out"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold tracking-tight">
                        {tool.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{tool.category}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Reveal>

      {/* Proficiencies */}
      <Reveal>
        <section id="proficiencies" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t("skillsPage.proficiencies.eyebrow")}
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              {t("skillsPage.proficiencies.title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("skillsPage.proficiencies.subtitle")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              {proficiencies.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className="text-muted-foreground">{item.value}%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <motion.div
                      custom={item.value}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-60px" }}
                      variants={barVariant}
                      className="h-full rounded-full bg-gradient-brand"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl border border-border p-6 shadow-glow">
              <svg viewBox="0 0 100 100" className="mx-auto h-auto w-full max-w-md" role="img" aria-label={t("skillsPage.proficiencies.title")}>
                {radarRings.map((r) => (
                  <circle
                    key={r}
                    cx="50"
                    cy="50"
                    r={42 * r}
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="0.4"
                  />
                ))}
                {radarPoints.map((p) => (
                  <line
                    key={p.label}
                    x1="50"
                    y1="50"
                    x2={50 + 42 * (p.x - 50) / (p.x - 50 || 1) * 0 + (p.x - 50) * (42 / 42)}
                    y2={50 + (p.y - 50)}
                    stroke="hsl(var(--border))"
                    strokeWidth="0.4"
                  />
                ))}
                {radarPoints.length > 2 && (
                  <polygon
                    points={radarPolygon}
                    fill="hsl(var(--primary))"
                    fillOpacity="0.32"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.8"
                  />
                )}
                {radarPoints.map((p) => (
                  <circle key={`${p.label}-dot`} cx={p.x} cy={p.y} r="1.3" fill="hsl(var(--primary))" />
                ))}
                {radarPoints.map((p) => (
                  <text
                    key={`${p.label}-label`}
                    x={p.labelX}
                    y={p.labelY}
                    fontSize="3.2"
                    textAnchor="middle"
                    fill="hsl(var(--muted-foreground))"
                  >
                    {p.label.length > 14 ? `${p.label.slice(0, 12)}…` : p.label}
                  </text>
                ))}
              </svg>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Closing CTA */}
      <Reveal>
        <section className="bg-gradient-brand">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center text-primary-foreground md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-balance font-display text-2xl font-bold tracking-tight md:text-3xl">
                {t("skillsPage.closing.title")}
              </h2>
              <p className="mt-2 max-w-xl text-pretty leading-relaxed text-primary-foreground/80">
                {t("skillsPage.closing.subtitle")}
              </p>
            </div>
            <Link
              href="/projects"
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold text-card-foreground",
                "transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-glow",
              )}
            >
              {t("skillsPage.closing.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}