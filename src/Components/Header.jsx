import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MobileSidebar } from "@/features/MobileSidebar";

const links = [
  { href: "/findamentor", text: "Find a mentor" },
  { href: "/bookasession", text: "Book a session" },
  { href: "#", text: "About Us" },
  { href: "#", text: "Insights" },
  { href: "#", text: "Partnership" },
];

const Header = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="w-full">
      <motion.div
        className="container mx-auto font-medium"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -20, opacity: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row items-center justify-between px-8 py-4 lg:px-12">
          <Link href="/">
            <Image
              width={100}
              height={100}
              alt="MMIT Logo"
              className="h-auto w-28"
              src="/images/mmit-logo.png"
              priority={true}
            />
          </Link>

          <div className="lg:hidden">
            <MobileSidebar links={links} />
          </div>

          <div className="hidden flex-row items-center justify-center font-semibold lg:flex">
            <div className="flex-row items-start justify-between gap-7">
              <ul className="flex flex-row justify-between gap-8 font-medium">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`transition-all ${
                        link.href === "#"
                          ? "cursor-not-allowed opacity-50"
                          : "hover:text-sky-600"
                      }`}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden flex-row gap-4 lg:flex">
            <Link href="/auth/menteesignup">
              <button className="rounded border border-primary-500 bg-primary-500 px-4 py-2  text-white transition-all hover:bg-opacity-70">
                Sign up
              </button>
            </Link>

            <Link href="/auth/mentorlogin">
              <button className="rounded border border-primary-500 px-4 py-2 transition-all hover:bg-black/10">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
