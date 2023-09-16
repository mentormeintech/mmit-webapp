import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="about" className="w-full bg-secondary-200 py-20">
      <div className="container mx-auto grid gap-14 px-8 sm:px-10">
        <motion.div
          className="flex flex-wrap items-center gap-4 text-secondary-500"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -20, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="pr-8 text-3xl font-bold">About Us</h2>
          <p className="max-w-xs border-l-2 border-secondary-500 pl-4 text-xs font-medium sm:pl-8">
            We look out across the horizon to anticipate needs and deliver
            advanced solutions.
          </p>
        </motion.div>

        <motion.div
          className="relative flex flex-col flex-wrap items-start gap-10 lg:flex-row"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -20, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/about-img.jpg"
            className="lex-1 rounded-xl"
            width={500}
            height={400}
            alt=""
          />

          <motion.div
            className="grid max-w-2xl flex-1 gap-6"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: -20, opacity: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold text-secondary-500">
              Who we are
            </h3>
            <p className="text-sm font-medium">
              MentorMeInTech is a Supportive Platform for Tech Enthusiasts.
            </p>
            <p className="text-sm leading-loose">
              At MentorMeintech, we believe finding the right mentor can make
              all the difference. That&apos;s why we make it our mission to help
              you find the perfect mentor who has the experience and expertise
              for your unique needs. Our mentor catalogue includes experienced
              professionals from a variety of industries and backgrounds, so you
              can trust that you&apos;ll find the right person to help you
              achieve your goals.
              <br />
              All of our mentors are experienced professionals who have been
              carefully selected to ensure you receive the best mentoring advice
              and assistance possible.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: -20, opacity: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-md font-semibold">
              Partnership with Edutech platform
            </p>
            <p className="text-sm leading-loose">
              Partnering with edutech platforms complements our mentorship
              program, enriches the learning experience, and equips our mentees
              with the skills and knowledge needed to succeed in the dynamic
              world of technology.
              <br />
              By collaborating with edutech platforms, our mentees gain access
              to a broader range of high-quality learning resources, including
              online courses, workshops, and expert-led content. This enriches
              their educational experience and enables them to acquire diverse
              skills and knowledge.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
