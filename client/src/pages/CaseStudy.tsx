/**
 * Instrumented Editorial design system — case studies extend the field-log language with a focused technical narrative.
 */
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/data/portfolio";

function Detail({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return <motion.section className="case-detail" initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.48, ease: [0.23, 1, 0.32, 1] }}><div className="case-detail__label"><span>{number}</span><h2>{title}</h2><div className="case-detail__field"><i /><b>Field record</b></div></div><div className="case-detail__content"><p className="case-detail__status"><span>System trace</span><i>●</i>{title === "Approach" ? "Execution vectors" : "Public portfolio view"}</p>{children}</div></motion.section>;
}

export default function CaseStudy({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  const reduced = useReducedMotion();

  if (!project) return <div className="portfolio-shell"><Navigation /><main className="case-missing"><p className="eyebrow">404 / System not indexed</p><h1>That work item<br />isn’t available.</h1><a className="text-link" href="/#work"><ArrowLeft size={18} />Back to selected work</a></main></div>;

  return <div className="portfolio-shell case-study"><Navigation /><main>
    <section className="case-hero">
      <a className="case-back" href="/#work"><ArrowLeft size={17} />All selected work</a>
      <motion.div className="case-hero__index" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>{project.number}<span>{project.eyebrow}</span></motion.div>
      <motion.h1 initial={reduced ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}>{project.title}</motion.h1>
      <motion.p className="case-hero__statement" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}>{project.statement}</motion.p>
      <ProjectVisual project={project} />
      <div className="case-meta"><div><span>Domain</span><strong>{project.domain}</strong></div><div><span>Role</span><strong>{project.role}</strong></div><div><span>Technologies</span><strong>{project.technologies.join(" · ")}</strong></div></div>
    </section>
    <div className="case-body">
      <Detail number="01" title="Context"><p>{project.context}</p></Detail>
      <Detail number="02" title="Problem"><p>{project.challenge}</p></Detail>
      <Detail number="03" title="Approach"><ol>{project.approach.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></Detail>
      <Detail number="04" title="Deployment"><p>{project.deployment}</p></Detail>
      <Detail number="05" title="Outcome"><p>{project.outcome}</p></Detail>
    </div>
    <section className="case-next"><p>Next system / indexed sequence</p><a href={`/work/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`} data-cursor="NEXT"><span>{projects[(projects.indexOf(project) + 1) % projects.length].number}</span>{projects[(projects.indexOf(project) + 1) % projects.length].title}<ArrowUpRight /></a></section>
  </main></div>;
}
