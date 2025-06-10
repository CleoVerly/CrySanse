import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variantsMap = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const MotionWrapper = ({
  children,
  delay = 0,
  duration = 0.6,
  variant = "fade-up",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const selectedVariant = variantsMap[variant] || variantsMap["fade-up"];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;