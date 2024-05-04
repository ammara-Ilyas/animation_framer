"use client";
import { motion, useScroll } from "framer-motion";

function Framermotion() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        backgroundColor: "red",
        position: "fixed",
        height: 10,
        top: 0,
        left: 0,
        right: 0,
      }}
      initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
    >
      hello
    </motion.div>
  );
}
export default Framermotion;
