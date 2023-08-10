import Header from "../header";
import Head from "next/head";
import ProfileCard from "../ProfileCard";

const FindAMentor = () => {
	return (
		<>
			<Header />
			<div class="flex flex-row">
				<div class="flex flex-row relative z-10 mt-[66px] ml-[100px]">
					<img
						src="images/search-icon.svg"
						class="w-[32.1px] absolute z-40 top-[25px] left-[15px]"
						alt=""
					/>
					<input
						type="text"
						class="w-[1048px] h-[70px] px-[50px] outline-none pl-[60px] border rounded-sm items-center"
						placeholder="Search by name, role"
					/>
				</div>
			</div>
			<div class="pt-[30px] flex-row justify-between items-center ml-[6.4rem] gap-7 inline-flex">
				<img src="images\tabler_arrow-up.svg" />
				<ul class="flex flex-row justify-between ml-[-20px] p-[10px] text-base">
					<li class="mr-[30px] text-base cursor-pointer">All</li>
					<li class="mr-[30px] cursor-pointer">Product Design</li>
					<li class="mr-[30px] cursor-pointer">Backend Development</li>
					<li class="mr-[30px] cursor-pointer">UI/UX</li>
					<li class="cursor-pointer">Frontend Development</li>
				</ul>
			</div>
			<div class="flex flex-row flex-wrap px-[101px] pt-[36px] items-center justify-center">
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
			</div>
		</>
	);
};

export default FindAMentor;
