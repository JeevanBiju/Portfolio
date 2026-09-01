/**
 * Instrumented Editorial design system — a vertical field-log layout makes production CV work easy to scan.
 * Use oversized Barlow Condensed headlines, technical rails, warm paper, and signal-umber accents only.
 */
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import Navigation from "@/components/Navigation";
import ProjectVisual from "@/components/ProjectVisual";
import SectionHeading from "@/components/SectionHeading";
import { achievements, assetUrls, capabilities, contact, experience, projects, publications, toolbox } from "@/data/portfolio";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={reveal} initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}>{children}</motion.div>;
}

export default function Home() {
  const reduced = useReducedMotion();
  return (
    <div id="top" className="portfolio-shell">
      <Navigation />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__grain" aria-hidden="true" />
          <img className="hero__image" src={assetUrls.hero} alt="Abstract overhead public-space scene interpreted through a computer-vision tracking frame" />
          <div className="hero__content">
            <motion.p className="eyebrow hero__eyebrow" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.42, delay: 0.25 }}>Portfolio / 2026</motion.p>
            <h1 id="hero-title" aria-label="AI Computer Vision Engineer">
              {[["AI /", 0.34], ["COMPUTER", 0.47], ["VISION", 0.6], ["ENGINEER", 0.73]].map(([line, delay]) => <span key={String(line)} className="hero__line"><motion.span initial={reduced ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: Number(delay), ease: [0.23, 1, 0.32, 1] }}>{line}</motion.span></span>)}
            </h1>
            <motion.div className="hero__lower" initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 1.05, ease: [0.23, 1, 0.32, 1] }}>
              <p className="hero__statement">Building systems that<br />understand the physical world.</p>
              <a className="text-link" href="#work" data-cursor="WORK">Explore selected systems <ArrowRight size={18} /></a>
            </motion.div>
          </div>
          <motion.figure className="hero__portrait" initial={reduced ? false : { opacity: 0, x: 36, rotate: 1.8 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.8, delay: 1.05, ease: [0.23, 1, 0.32, 1] }} data-cursor="PROFILE">
            <img src={assetUrls.portrait} alt="Jeevan Biju" />
            <span className="tracking-corners" aria-hidden="true" />
            <figcaption><span>Profile / 001</span><span>Jeevan Biju</span></figcaption>
            <i className="portrait-reticle" aria-hidden="true" />
          </motion.figure>
          <motion.div className="hero__inspection" initial={reduced ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 1.15, ease: [0.23, 1, 0.32, 1] }} aria-label="Decorative abstract system metadata">
            <span className="tracking-corners" aria-hidden="true" />
            <span>FIELD / 024</span><span>CV SYSTEM</span><span>BENGALURU, IN</span><span>1+ YEAR / PROD.</span>
            <i className="hero__crosshair" aria-hidden="true" />
          </motion.div>
          <div className="hero__footer"><p>Real-time AI · Edge AI · GPU inference<br />Multi-camera analytics · On-premise systems</p><a href="#capabilities" aria-label="Scroll to capabilities"><ArrowDown size={18} /></a></div>
        </section>

        <section id="capabilities" className="section section--paper capabilities" aria-labelledby="capabilities-title">
          <SectionHeading index="01" title="What I build" label="Production-oriented AI systems for real-time visual understanding." />
          <div className="capability-list">
            {capabilities.map((item, index) => <motion.article className="capability-row" key={item.title} initial={reduced ? false : { opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45, delay: reduced ? 0 : index * 0.07, ease: [0.23, 1, 0.32, 1] }}><span>{item.number}</span><h3>{item.title}</h3><p>{item.details}</p><ArrowRight size={19} aria-hidden="true" /></motion.article>)}
          </div>
        </section>

        <section id="work" className="section selected-work" aria-labelledby="work-title">
          <SectionHeading index="02" title="Selected work" label="Computer vision and AI systems built for real-world environments." />
          <div className="project-list">
            {projects.map((project, index) => <motion.a className="project-row" href={`/work/${project.slug}`} data-cursor="VIEW" key={project.slug} initial={reduced ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay: reduced ? 0 : (index % 3) * 0.07, ease: [0.23, 1, 0.32, 1] }}><div className="project-row__index"><span>{project.number}</span><i>{project.eyebrow}</i></div><div className="project-row__title"><h3>{project.title}</h3><p>{project.statement}</p></div><div className="project-row__visual"><ProjectVisual project={project} compact /></div><div className="project-row__action">Open system brief <ArrowUpRight size={19} /></div></motion.a>)}
          </div>
        </section>

        <section id="experience" className="section experience" aria-labelledby="experience-title">
          <SectionHeading index="03" title="Experience" label="Production engineering across visual analytics, GPU inference and air-gapped deployment." />
          <div className="experience-grid">
            {experience.map((item, index) => <SectionReveal className={`experience-card experience-card--${index + 1}`} key={item.company}><div className="experience-card__top"><span>{item.period}</span><span>{item.location}</span></div><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.summary}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></SectionReveal>)}
          </div>
          <p className="experience-note"><span>Trajectory</span> Ogive Technology → built core surveillance capabilities. Nervesparks → extended, optimized and deployed the platform at production scale.</p>
        </section>

        <section className="edge-section" aria-labelledby="edge-title">
          <div className="edge-section__head"><SectionHeading index="04" title="Built for the edge" inverse /><p className="edge-eyebrow">Deployment context / not a cloud assumption</p></div>
          <SectionReveal className="edge-statement"><h2 id="edge-title">AI doesn’t always<br /><em>belong in the cloud.</em></h2><p>Production AI systems designed for real-time inference, GPU acceleration, on-premise infrastructure and air-gapped environments.</p></SectionReveal>
          <div className="gpu-timeline" aria-label="Enterprise NVIDIA GPU platforms"><span>RTX A6000</span><i>→</i><span>RTX 6000 Ada</span><i>→</i><span>RTX PRO 6000 Blackwell</span><i>→</i><span>H100</span><i>→</i><span>H200</span></div>
          <ArchitectureFlow />
        </section>

        <section className="section toolbox" aria-labelledby="toolbox-title">
          <SectionHeading index="05" title="Toolbox" label="A technical base shaped by model development, real-time systems and deployment constraints." />
          <div className="toolbox-list">
            {toolbox.map(([title, items]) => <SectionReveal className="toolbox-row" key={title}><h3>{title}</h3><p>{items}</p></SectionReveal>)}
          </div>
        </section>

        <section className="section research" aria-labelledby="research-title">
          <SectionHeading index="06" title="Research" label="Published work at the intersection of practical vision systems and operational machine learning." />
          <div className="publication-list">
            {publications.map((item) => <SectionReveal className="publication" key={item.title}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.conference}</p></div><a href={item.href} target="_blank" rel="noreferrer" data-cursor="OPEN">IEEE Xplore <ArrowUpRight size={18} /></a></SectionReveal>)}
          </div>
        </section>

        <section className="section achievement-about" aria-labelledby="about-title">
          <div className="achievement-about__left"><SectionHeading index="07" title="Selected signals" /><div className="achievement-list">{achievements.map(([year, title, detail]) => <SectionReveal className="achievement" key={title}><span>{year}</span><div><h3>{title}</h3><p>{detail}</p></div></SectionReveal>)}</div></div>
          <SectionReveal className="about-panel"><p className="eyebrow">08 / About</p><h2 id="about-title">Engineering visual systems for the spaces where reliability matters.</h2><p>I’m an AI / Computer Vision Engineer focused on production-grade systems for real-time visual understanding. My work spans multi-camera analytics, edge AI, GPU acceleration, on-premise deployment and the engineering choices that carry vision models into actual environments.</p><div className="about-panel__meta"><span>B.Tech — AI & Data Science<br />St. Joseph’s College of Engineering and Technology, Palai</span><span>2025<br />GPA 8.27 / 10</span></div></SectionReveal>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-section__rail"><span>09</span><span>Contact / Available for compelling systems work</span></div>
          <SectionReveal><h2 id="contact-title">Have a problem<br />worth <em>solving?</em></h2><a className="contact-cta" href={`mailto:${contact.email}`} data-cursor="MAIL">Open a system conversation <ArrowUpRight /></a></SectionReveal>
          <div className="contact-details"><a href={`mailto:${contact.email}`}><Mail size={16} />{contact.email}</a><a href={contact.linkedin} target="_blank" rel="noreferrer" data-cursor="OPEN"><Linkedin size={16} />LinkedIn <ArrowUpRight size={14} /></a><a href={contact.github} target="_blank" rel="noreferrer" data-cursor="OPEN"><Github size={16} />GitHub <ArrowUpRight size={14} /></a><a href={contact.resume} target="_blank" rel="noreferrer" data-cursor="CV">Resume <ArrowUpRight size={14} /></a></div>
        </section>
      </main>
      <footer className="site-footer"><a className="brand-mark" href="#top"><img src={assetUrls.mark} alt="" /><span>JEEVAN<br />BIJU</span></a><p>AI / Computer Vision Engineer<br />Real-time AI · Edge AI · Computer Vision</p><p>Bengaluru, India<br />© 2026</p></footer>
    </div>
  );
}
