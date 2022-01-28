export const pageAnimation = (initDur, exitDur, stagger) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: initDur,
        when: "beforeChildren",
        staggerChildren: stagger,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: exitDur,
      },
    },
  };
};

export const titleAnim = {
  hidden: { y: 100 },
  show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const photoAnim = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const slide = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, ease: "easeOut" } },
};

export const verticalAnim = {
  hidden: {
    y: 100,
    rotate: "-90deg",
  },
  show: {
    y: -200,
    rotate: "-90deg",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const swipeAnim = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  show: {
    x: [0, -100, -100, 0, -100, -100, 0],
    opacity: [0, 1, 0, 0, 1, 0, 0],
    transition: {
      duration: 4,
      delay: 8,
    },
  },
};
