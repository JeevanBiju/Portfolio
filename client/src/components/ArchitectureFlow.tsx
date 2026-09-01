/**
 * Instrumented Editorial design system — sequential inference architecture turns technical capability into legible motion.
 */
import { motion, useReducedMotion } from "framer-motion";

const stages = ["Video input", "RTSP / WebRTC", "GStreamer / DeepStream", "ONNX / TensorRT", "CUDA / NVIDIA GPU", "Vision models", "FastAPI", "Application / dashboard"];

export default function ArchitectureFlow() {
  const reduced = useReducedMotion();
  return <div className="architecture-flow" aria-label="Video input to application dashboard inference pipeline">
    {stages.map((stage, index) => <motion.div className="architecture-stage" key={stage} initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.35, delay: reduced ? 0 : index * 0.07, ease: [0.23, 1, 0.32, 1] }}><span>{String(index + 1).padStart(2, "0")}</span><strong>{stage}</strong>{index < stages.length - 1 && <i>↓</i>}</motion.div>)}
  </div>;
}
