import Link from "next/link";
import FindAMentor from "../findamentor/page";
import BookASession from "../BookASession/page";
import PartnershipPage from "../Partnership/page";
import MentorLogin from "../MentorLogin/page";

const Header = () => {
	return (
		<>
			<div class="flex flex-row justify-between items-center h-36 bg-stone-200">
				<div>
					<img
						class="ml-[100px] mb-[38]"
						src="images\mmit-logo.png"
					/>
				</div>
				<div class="flex-row w-[915px] h-auto font-semibold mr-[5rem] justify-center items-center inline-flex">
					<div class=" flex-row justify-between items-start gap-7 inline-flex mr-10">
						<ul class="flex flex-row justify-between p-[10px] text-base">
							<li class="mr-[29px] text-base hover:text-sky-600 active:text-blue-500 cursor-pointer">
								<Link href="/findamentor">Find a mentor</Link>
							</li>
							<li class="mr-[29px] hover:text-sky-600 active:text-blue-500 cursor-pointer">
								<Link href="/BookASession ">Book a session</Link>
							</li>
							<li class="mr-[29px] hover:text-sky-600 active:text-blue-500 cursor-pointer">
								<Link href="/MentorLogin">About Us</Link>
							</li>
							<li class="mr-[29px] hover:text-sky-600 active:text-blue-500 cursor-pointer">
								Insights
							</li>
							<li class="cursor-pointer hover:text-sky-600 active:text-blue-500">
								<Link href="/Partnership">Partnership</Link>
							</li>
						</ul>
					</div>
					<div class="flex flex-row mr-[-7rem]">
						<button class="mr-2 w-[94px] h-[43px] rounded border text-white  bg-orange-300">
							Sign up
						</button>
						<button class="ml-[10px] w-[94px] h-[43px]py-4 rounded border border-orange-300">
							Log in
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
