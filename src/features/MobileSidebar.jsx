import cn from "classnames";
import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { BsCheck } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";

export const MobileSidebar = ({ links }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-md border-2 border-sky-500 p-2 text-orange-500 lg:hidden"
      >
        <FiMenu className="text-xl" />
      </button>

      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <Sidebar setOpen={setOpen}>
            <ul className="flex flex-col px-4 py-8">
              {links.map(({ text, href }) => {
                return (
                  <li key={text}>
                    <Link
                      href={href}
                      className={cn(
                        "my-2 flex rounded-full px-6 py-3 font-medium transition-all hover:bg-sky-600",
                        router.pathname === href && "bg-sky-500",
                      )}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex w-full flex-col justify-center gap-4 px-8">
              <Link href="/menteesignup">
                <button className="w-full rounded border border-orange-400 bg-orange-400 px-4 py-2  text-white transition-all hover:bg-transparent">
                  Sign up
                </button>
              </Link>

              <Link href="/sidebar">
                <button className="w-full rounded border border-orange-400 px-4 py-2 transition-all hover:bg-orange-400">
                  Log in
                </button>
              </Link>
            </div>
          </Sidebar>
        )}
      </AnimatePresence>
    </>
  );
};
