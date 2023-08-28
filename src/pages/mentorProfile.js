import Image from "next/image";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Head from "next/head";
import { Preahvihear } from "next/font/google";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const MentorProfile = () => {
	return (
		<div>
			<Header />
			<div className="background-dp relative w-[100%]">
				<Image
					src="/images/background.png"
					width={2000}
					alt="mentor-dp"
					className="w-[100%] absolute"
					height={50}></Image>
			</div>
			<div className="relative">
				<Image
					className="w-[200px] h-[200px] top-36 left-24 rounded-full relative"
					src="/images/profileImage1.png"
					width={2000}
					alt="profilephoto"
					height={50}></Image>
				<div
					className="bg-grey relative top-11 left-80
        ">
					<h1 className="font-semibold text-4xl">Amarachi Onyenka</h1>
					<p className="texl-xl">Product Designer at PDI ltd.</p>
				</div>
			</div>
			<div className="m-auto max-w-screen-xl px-11 mt-44">
				<h1 className="font-semibold text-4xl mb-5">Overview</h1>
				<div className="flex flex-col p-8 items-center text-base max-w-screen-xl text-left rounded-md bg-[#E4CBC81A] border">
					<div className="h-auto">
						<span className="text-zinc-800 text-base font-medium leading-7">
							Hi, I am Amarachi, a Product Designer with nearly four years of
							experience, my background primarily lies in Visual Design.
							<br />
							<br />
							For the past years, I dedicated part of my role to fostering a
							strong design team culture. I believe in the power of scaling
							design rituals and maintaining a high-quality bar as the team
							expands. I believe in the value of collaborative problem-solving
							to drive innovative solutions and in transparent and honest
							communication to foster alignment and drive outcomes. I wish I
							could tell you I learned this the easy way.
							<br />
							<br />I believe I have a lot to share with others when it comes to
							<br />
							<br />
						</span>
						<span className="text-zinc-800 text-base font-medium leading-7">
							- dealing with complexity and ambiguity in this new world of
							uncertainty
							<br />
							- how to articulate design decisions <br />
							- ways of working
							<br />
							- design career path
							<br />
							- build your portfolio case or improve existing
							<br />
							- design career path
							<br />
							- figma, design systems, UI design
							<br />
							- UX research methods
							<br />
							- design process
							<br />
						</span>
						<span className="text-zinc-800 text-base font-medium leading-7"></span>
					</div>
				</div>
				<div className="w-44 mt-8 h-10 justify-start items-center gap-5 inline-flex">
					<div className="h-8 w-8">
						<div className="h-8 flex items-center justify-center bg-zinc-300 rounded-full">
							<FaTwitter />
						</div>
					</div>
					<div className="h-8 w-8">
						<div className="h-8 flex items-center justify-center bg-zinc-300 rounded-full">
							<GrMail />
						</div>
					</div>
					<div className="h-8 w-8">
						<div className="h-8 flex items-center justify-center bg-zinc-300 rounded-full">
							<FaLinkedinIn />
						</div>
					</div>
				</div>
				<div className="flex mt-11 justify-between">
					<div>
						<h1 className="text-black whitespace-nowrap text-4xl font-semibold">
							Community Statistics
						</h1>
						<p className="text-neutral-700 text-xl font-medium">
							Top areas of impact
						</p>
						<p className="text-neutral-700 text-base font-normal">
							Topics to be discussed during session
						</p>
					</div>
					<div className="topics flex  text-sm flex-row items-end gap-6 whitespace-nowrap">
						<div className="w-30 px-4 h-11 flex items-center justify-center rounded border border-grey">
							General mentorship
						</div>
						<div className="w-30 px-4 h-11 flex items-center justify-center rounded border border-grey">
							Design career path
						</div>
						<div className="w-30 px-4 h-11 flex items-center justify-center rounded border border-grey">
							UX meaning
						</div>
						<div className="w-30 px-4 h-11 flex items-center justify-center rounded border border-grey">
							Interaction design
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20">
				<Footer />
			</div>
		</div>
	);
};

export default MentorProfile;
