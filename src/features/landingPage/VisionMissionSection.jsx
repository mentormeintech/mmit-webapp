import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { TbEyeCog, TbTargetArrow } from "react-icons/tb";

const VisionMissionCard = ({ title, children, Icon }) => (
  <motion.div
    className="grid max-w-sm gap-4 rounded-xl border px-6 py-12 text-center shadow-lg"
    variants={{
      visible: { y: 0, opacity: 1 },
      hidden: { y: -20, opacity: 0 },
    }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-primary-500">
      <span>{title}</span>
      <Icon className="text-2xl" />
    </h2>
    <p className="text-sm leading-relaxed">{children}</p>
  </motion.div>
);

export const VisionMissionSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="vision" className="w-full py-20">
      <div className="container mx-auto px-8 sm:px-10">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
              },
            },
            hidden: { opacity: 0 },
          }}
          className="flex flex-wrap justify-center gap-8"
        >
          <VisionMissionCard title="Our Vision" Icon={TbEyeCog}>
            Empowering Africans transitioning into tech through a
            community-driven platform offering free mentorship
          </VisionMissionCard>

          <VisionMissionCard title="Our Mission" Icon={TbTargetArrow}>
            Enabling easy access to top-notch mentorship for Africans venturing
            into the tech landscape.
          </VisionMissionCard>
        </motion.div>
      </div>
    </section>
  );
};
