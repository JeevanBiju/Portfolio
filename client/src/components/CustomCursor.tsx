/**
 * Instrumented Editorial design system — desktop-only cursor behaves like a restrained inspection probe.
 */
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      setPoint({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };
    const over = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor || "");
    };
    const leave = () => setVisible(false);
    const down = (event: PointerEvent) => event.pointerType === "mouse" && setPressed(true);
    const up = () => setPressed(false);
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerdown", down);
    document.addEventListener("pointerup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (reduced) return null;
  return <motion.div className={`custom-cursor ${visible ? "custom-cursor--visible" : ""} ${label ? "custom-cursor--label" : ""} ${pressed ? "custom-cursor--pressed" : ""}`} animate={{ x: point.x, y: point.y }} transition={{ type: "spring", stiffness: 620, damping: 34, mass: 0.13 }} aria-hidden="true"><i className="custom-cursor__ring" /><i className="custom-cursor__cross custom-cursor__cross--x" /><i className="custom-cursor__cross custom-cursor__cross--y" /><i className="custom-cursor__dot" /><span>{label}</span></motion.div>;
}
