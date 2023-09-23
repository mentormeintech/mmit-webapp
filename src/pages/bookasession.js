import ProfileCard from "../Components/ProfileCard";
import Footer from "../Components/Footer";
import Header_Signin from "@/Components/Header_Signin";

const BookASession = () => {
	return (
		<>
			<Header_Signin />
			<div className="pt-[35px] text-[25px] font-[700] flex-row justify-between items-center ml-[6.8rem] gap-7 inline-flex">
				Recently Contacted
			</div>
			<div className="flex flex-row flex-wrap items-center justify-center">
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
			</div>
			<div className="mt-20">
				<Footer />
			</div>
		</>
	);
};

export default BookASession;
