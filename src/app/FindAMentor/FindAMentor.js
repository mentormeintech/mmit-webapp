import Header from "@/app/header";
import Head from "next/head";

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
		</>
	);
};

export default FindAMentor;
