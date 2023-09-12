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
  return (
    <section
      id="hero-section"
      className="bg-hero-bg relative w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-black/70"></div>

      <div className="container relative z-10 grid gap-8 px-4 pb-10 pt-16 text-white sm:px-12 sm:pt-36">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Dedicated to <span className="text-primary-500">Empowering</span>{" "}
          Individuals Through Technology and Mentorship
        </h1>

        <p className="max-w-md">
          Welcome to mentormeintech, where we unlock limitless opportunities in
          the world of technology! We&apos;re excited to have you as a part of
          our vibrant community of tech enthusiasts.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href="/findamentor">
            <button className="border-primary-500 bg-primary-500 w-full rounded border px-4 py-2  text-white transition-all hover:bg-opacity-70">
              Find a Mentor
            </button>
          </Link>

          <Link href="/auth/mentorlogin">
            <button className="border-primary-500 w-full rounded border px-4 py-2 transition-all hover:bg-white/10">
              Become a Mentor
            </button>
          </Link>
        </div>

        <div className="flex gap-4 py-4 text-lg">
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
        </div>

        <p className="text-primary-500 text-right text-sm italic">
          MMIT, Your tech odyssey starts here!
        </p>
      </div>
    </section>
  );
};
