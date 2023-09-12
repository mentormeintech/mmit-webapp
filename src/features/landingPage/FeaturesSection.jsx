import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { GiBookmarklet } from "react-icons/gi";
import { PiChatsCircleFill } from "react-icons/pi";
import { BsFillPeopleFill, BsShieldFillCheck } from "react-icons/bs";

const features = [
  { Icon: FaUser, text: "Expert Tech Mentors" },
  { Icon: BsShieldFillCheck, text: "Personalized Mentorship" },
  { Icon: GiBookmarklet, text: "Accessible Learning" },
  { Icon: PiChatsCircleFill, text: "Networking Opportunities" },
  { Icon: BsFillPeopleFill, text: "Community Collaboration" },
  { Icon: IoIosPeople, text: "Career Growth Support" },
];

const FeatureCard = ({ Icon, text }) => (
  <motion.div
    className="flex items-center justify-center gap-3 rounded-sm bg-white px-8 py-4 font-medium"
    variants={{
      visible: { y: 0, opacity: 1 },
      hidden: { y: -20, opacity: 0 },
    }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-lg text-secondary-500" />
    <span className="text-sm">{text}</span>
  </motion.div>
);

export const FeaturesSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="vision" className="w-full bg-secondary-200 py-20">
      <div className="container mx-auto grid gap-8 px-8 sm:px-10">
        <h2 className="text-2xl font-semibold text-secondary-500 sm:text-center sm:text-3xl">
          Why MMIT?
        </h2>

        <motion.div
          className="mx-auto flex max-w-6xl flex-wrap justify-start gap-x-2 gap-y-4 sm:justify-center"
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
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>

        <p className="mx-auto max-w-3xl pt-8 text-center text-sm">
          Don&apos;t miss out on the opportunity to be part of a dynamic and
          inspiring community of learners and educators. Click the &quot;Join
          Our Community&quot; button below to get started on your journey
          towards knowledge and growth.
        </p>

        <Link
          href="/findamentor"
          className="mx-auto w-fit rounded border border-primary-500 bg-primary-500 px-4 py-2 text-center text-white transition-all hover:bg-opacity-70"
        >
          Join Our Community
        </Link>
      </div>
    </section>
  );
};
