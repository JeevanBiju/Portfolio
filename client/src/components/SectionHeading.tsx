/**
 * Instrumented Editorial design system — numbered headers create a measured field-log rhythm.
 */
import { motion, useReducedMotion } from "framer-motion";

type Props = { index: string; title: string; label?: string; inverse?: boolean };

export default function SectionHeading({ index, title, label, inverse = false }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={`section-heading ${inverse ? "section-heading--inverse" : ""}`} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.52, ease: [0.23, 1, 0.32, 1] }}>
      <span>{index}</span><h2>{title}</h2>{label && <p>{label}</p>}
    </motion.div>
  );
}
