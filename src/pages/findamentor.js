import Header from "../Components/Header";
import Head from "next/head";
import ProfileCard from "../Components/ProfileCard";
import Footer from "../Components/Footer";

const FindAMentor = () => {
	return (
		<>
			<Header />
			<div className="flex flex-row">
				<div className="flex flex-row relative z-10 mt-[66px] ml-[100px]">
					<img
						src="images/search-icon.svg"
						className="w-[32.1px] absolute z-40 top-[25px] left-[15px]"
						alt=""
					/>
					<input
						type="text"
						className="w-[1048px] h-[70px] px-[50px] outline-none pl-[60px] border rounded-sm items-center"
						placeholder="Search by name, role"
					/>
				</div>
			</div>
			<div className="pt-[30px] flex-row justify-between items-center ml-[6.4rem] gap-7 inline-flex">
				<img src="images\tabler_arrow-up.svg" />
				<ul className="flex flex-row justify-between ml-[-20px] p-[10px] text-base">
					<li className="mr-[30px] text-base cursor-pointer">All</li>
					<li className="mr-[30px] cursor-pointer">Product Design</li>
					<li className="mr-[30px] cursor-pointer">Backend Development</li>
					<li className="mr-[30px] cursor-pointer">UI/UX</li>
					<li className="cursor-pointer">Frontend Development</li>
				</ul>
			</div>
			<div className="flex flex-row flex-wrap pt-[36px] items-center justify-center">
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
			</div>
			<div className="mt-[40px]">
				<Footer />
			</div>
		</>
	);
};

export default FindAMentor;