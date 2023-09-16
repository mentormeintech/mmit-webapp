import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { cloneElement } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

const SocialLink = ({ href, children, hoverBgColor, iconColor }) => (
  <Link
    href={href}
    target="blank"
    className={`flex items-center justify-center rounded-full bg-white p-2 transition-all hover:bg-${hoverBgColor}`}
  >
    {cloneElement(children, { className: iconColor })}
  </Link>
);

export const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id="hero-section"
      className="relative w-full bg-hero-bg bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-black/70"></div>

      <motion.div
        className="container relative z-10 grid gap-8 px-4 pb-10 pt-16 text-white sm:px-12 sm:pt-24"
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
        <motion.h1
          className="max-w-3xl text-4xl font-semibold !leading-tight sm:text-5xl"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -20, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          Dedicated to <span className="text-primary-500">Empowering</span>{" "}
          Individuals Through Technology and Mentorship
        </motion.h1>

        <motion.p
          className="max-w-md"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -20, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          Welcome to mentormeintech, where we unlock limitless opportunities in
          the world of technology! We&apos;re excited to have you as a part of
          our vibrant community of tech enthusiasts.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 font-medium"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -20, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/findamentor"
            className="w-fit rounded border border-primary-500 bg-primary-500 px-6 py-2 text-white transition-all hover:bg-opacity-70"
          >
            Find a Mentor
          </Link>

          <Link
            href="/auth/mentorlogin"
            className="w-fit rounded border border-primary-500 px-6 py-2 transition-all hover:bg-white/10"
          >
            Become a Mentor
          </Link>
        </motion.div>

        <motion.div
          className="flex gap-4 py-4 text-lg"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -20, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <SocialLink
            href="https://linkedin.com/company/mentormeintech"
            hoverBgColor="blue-200"
            iconColor="text-blue-500"
          >
            <FaLinkedinIn />
          </SocialLink>
          <SocialLink
            href="https://x.com/mentormeintech"
            hoverBgColor="neutral-200"
            iconColor="text-black"
          >
            <RiTwitterXFill />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/mentormeintech5"
            hoverBgColor="red-200"
            iconColor="text-red-500"
          >
            <RiInstagramFill />
          </SocialLink>
        </motion.div>

        <motion.p
          className="text-right text-sm text-primary-500"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -20, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          MMIT, Your tech odyssey starts here!
        </motion.p>
      </motion.div>
    </section>
  );
};
