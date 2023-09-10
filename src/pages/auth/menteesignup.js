import SignupHeader from "@/Components/SignupHeader";
import SignupForm from "@/Components/SignupForm";
import Image from "next/image";
import Footer from "@/Components/Footer";

const MenteeSignup = () => {
	return (
		<>
			<div>
				<SignupHeader />
				<div className="flex flex-row justify-evenly items-center">
					<div>
						<div className="flex flex-col justify-between relative -top-40">
							<h1 className="text-black w-[33rem] text-4xl font-semibold">
								Mentee <span className="text-orange-400">&</span> Experienced Professionals
							</h1>
							<Image
								className="w-1/2 mt-8"
								src="/images/login.png"
								width={1000}
								height={50}
								alt="Login"></Image>
						</div>
					</div>
					<SignupForm />
				</div>
      </div>
      <Footer />
		</>
	);
};

export default MenteeSignup;
