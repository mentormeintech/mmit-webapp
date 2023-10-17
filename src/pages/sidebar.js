import Link from "next/link";
import Image from "next/image";
import Header from "./../components/Header";
import { GoHomeFill } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa";
import { BiSolidGroup } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <Header />
      <div className="fixed flex h-screen w-64 flex-col items-center gap-8 border-r border-gray-300 bg-white px-4 py-8">
        <div className="profile-pic flex w-64 flex-col items-center">
          <Image
            src="/images/profileImage2.png"
            width={100}
            height={1000}
            className="rounded-full"
            alt="profile-logo"
          ></Image>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href="/home"
            className=" flex flex-row items-center gap-2 py-1 active:text-blue-500"
          >
            <GoHomeFill />
            Home
          </Link>
          <Link
            href="/booking"
            className=" flex flex-row items-center gap-2 py-1 active:text-blue-500"
          >
            <FaBookOpen />
            Booking
          </Link>
          <Link
            href="/group-sessions"
            className="flex flex-row items-center gap-2 py-1"
          >
            <BiSolidGroup />
            Group Sessions
          </Link>
          <Link
            href="/settings"
            className=" flex flex-row items-center gap-2 py-1 active:text-blue-500"
          >
            <RiSettings3Fill />
            Settings
          </Link>
          <Link
            href="/support"
            className=" flex flex-row items-center gap-2 py-1 active:text-blue-500"
          >
            <BiSupport />
            Support
          </Link>
          <Link
            href="/logout"
            className=" flex flex-row items-center gap-2 py-1 active:text-blue-500"
          >
            <HiOutlineLogout />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
