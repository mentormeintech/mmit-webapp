import FindAMentor from "./findamentor";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import Footer from "@/Components/Footer";
import Image from "next/image";
import LoginSide from "@/Components/loginside";
import LoginHeader from "@/Components/LoginHeader";
import LoginForm from "@/Components/LoginForm";

const MentorLogin = () => {
	return (
		<>
			<div className="overflow-hidden">
				<LoginHeader />
				<div className="flex flex-row justify-evenly items-center">
					<LoginSide />
					<LoginForm />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MentorLogin;