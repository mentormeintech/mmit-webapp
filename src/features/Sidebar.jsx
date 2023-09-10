import { useRef } from "react";
import { motion } from "framer-motion";
import { useClickAway } from "react-use";

const framer_sidebar_background = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framer_sidebar_panel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

export const Sidebar = ({ setOpen, children }) => {
  const ref = useRef(null);
  const closeSidebar = () => setOpen(false);
  useClickAway(ref, closeSidebar);

  return (
    <>
      <motion.div
        {...framer_sidebar_background}
        style={{
          backdropFilter: "blur(3px)",
          background: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
        className="fixed bottom-0 left-0 right-0 top-0 h-screen w-full"
      ></motion.div>

      <motion.div
        style={{
          zIndex: 2,
          maxWidth: "17rem",
          background: "#1F1F1F",
        }}
        {...framer_sidebar_panel}
        className="fixed bottom-0 left-0 top-0 z-50 h-screen w-full text-white"
      >
        <div ref={ref} className="h-full w-full">
          {children}
        </div>
      </motion.div>
    </>
  );
};
