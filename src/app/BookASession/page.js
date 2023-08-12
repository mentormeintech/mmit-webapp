import Header from "../Components/Header";
import ProfileCard from "../Components/ProfileCard";

const BookASession = () => {
	return (
		<>
			<Header />
			<div className="pt-[30px] text-[32px] font-[700] flex-row justify-between items-center ml-[6.4rem] gap-7 inline-flex">
				Recently Contacted
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
		</>
	);
};

export default BookASession;
