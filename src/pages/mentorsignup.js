import LoginSide from "@/Components/loginside";
import SignupHeader from "@/Components/SignupHeader";
import SignupForm from "@/Components/SignupForm";

const Mentorsignup = () => {
	return (
		<>
			<div>
				<SignupHeader />
				<div className="flex flex-row justify-evenly items-center">
					<LoginSide />
					<SignupForm />
				</div>
			</div>
		</>
	);
};

export default Mentorsignup;
