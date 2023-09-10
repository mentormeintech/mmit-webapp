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
        className="rounded-md border-2 border-gray-800 p-2 lg:hidden"
      >
        <FiMenu className="text-xl" />
      </button>

      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <Sidebar setOpen={setOpen}>
            <div className="">
              <ul className="flex flex-col px-6 py-8">
                {links.map(({ text, href }) => {
                  return (
                    <li key={text}>
                      <Link
                        href={href}
                        className="flex items-center gap-3 px-4 py-4 font-medium"
                      >
                        {text}

                        {router.pathname === href && (
                          <BsCheck className="text-2xl" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Sidebar>
        )}
      </AnimatePresence>
    </>
  );
};
