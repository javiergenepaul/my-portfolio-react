import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

type FadeAnimationProps = {
  children: ReactNode;
};

const FadeAnimation = (props: FadeAnimationProps) => {
  const { children } = props;

  const fadeVariants: Variants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
