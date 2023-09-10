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
  return (
    <div className="w-full">
      <div className="container mx-auto font-medium">
        <div className="flex flex-row items-center justify-between px-6 py-4">
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
            <Link href="/menteesignup">
              <button className="rounded border border-orange-400 bg-orange-400 px-4 py-2  text-white transition-all hover:bg-transparent hover:text-black">
                Sign up
              </button>
            </Link>

            <Link href="/sidebar">
              <button className="rounded border border-orange-400 px-4 py-2 transition-all hover:bg-orange-400 hover:text-white">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
