import { motion } from "framer-motion";
import { PacmanLoader } from "react-spinners";

const SplashScreen = () => {
  const fadeOut = {
    fadout: {
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
    fadeIn: {
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={fadeOut}
      initial="fadeout"
      animate="fadein"
      exit="fadeout"
      className="flex justify-center items-center w-full h-screen"
    >
      <PacmanLoader
        color={"#ffffff"}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </motion.div>
  );
};

export default SplashScreen;
