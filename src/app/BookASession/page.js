import Header from "../Components/Header";
import ProfileCard from "../Components/ProfileCard";

const BookASession = () => {
	return (
		<>
			<Header />
			<div className="pt-[30px] text-[32px] font-[700] flex-row justify-between items-center ml-[6.4rem] gap-7 inline-flex">
				Recently Contacted
			</div>
			<ProfileCard />
			<ProfileCard />
			<ProfileCard />
			<ProfileCard />
			<ProfileCard />
		</>
	);
};

export default BookASession;
