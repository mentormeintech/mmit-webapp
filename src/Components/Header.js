import Link from "next/link";
import FindAMentor from "../pages/findamentor";
import BookASession from "../pages/bookasession";
import PartnershipPage from "../pages/partnership";
import MentorLogin from "../pages/mentorlogin";
import Mentorregister from "@/pages/mentorregist";
import Image from "next/image";
import Mentorsignup from "@/pages/mentorsignup";

const Header = () => {
	return (
		<>
			<div className="flex flex-row justify-between items-center h-35 bg-stone-200">
				<div>
					<Image
						width={200}
						height={1000}
						alt="MMIT Logo"
						className="ml-[100px] mb-[38]"
						src="/images/mmit-logo.png"
					/>
				</div>
				<div className="flex-row w-[915px] h-auto font-semibold mr-[5rem] justify-center items-center inline-flex">
					<div className=" flex-row justify-between items-start gap-7 inline-flex mr-10">
						<ul className="flex flex-row justify-between p-[10px] text-base">
							<li className="mr-[29px] text-base hover:text-sky-600 active:text-blue-500 cursor-pointer">
								<Link href="/findamentor">Find a mentor</Link>
							</li>
							<li className="mr-[29px] hover:text-sky-600 active:text-blue-500 cursor-pointer">
								<Link href="/bookasession ">Book a session</Link>
							</li>
							<li className="mr-[29px] hover:text-sky-600 active:text-blue-500 cursor-pointer">
								<Link href="/mentorsignup">About Us</Link>
							</li>
							<li className="mr-[29px] hover:text-sky-600 active:text-blue-500 cursor-pointer">
								<Link href="/mentorregist">Insights</Link>
							</li>
							<li className="cursor-pointer hover:text-sky-600 active:text-blue-500">
								<Link href="/partnership">Partnership</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-row mr-[-7rem]">
						<button className="mr-2 w-[94px] h-[43px] rounded border text-white  bg-orange-300">
							Sign up
						</button>
						<button className="ml-[10px] w-[94px] h-[43px]py-4 rounded border border-orange-300">
							Log in
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
