import FindAMentor from "./findamentor";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import Footer from "@/Components/Footer";
import Image from "next/image";
import LoginSide from "@/Components/loginside";

const MentorLogin = () => {
	return (
		<>
			<div className="overflow-hidden">
				<div className="flex flex-row items-center relative">
					<div className="absolute flex items-center left-20">
						<Link href="/findamentor">
							<Image
								src="/images/logo.png"
								alt="Logo"
								width={90}
								height={10}
								className="cursor-pointer"
							/>
						</Link>
					</div>
					<Image
						src="/images/background.png"
						alt="Background"
						width={2000}
						height={50}
						className="h-40"
					/>
					<h1 className="absolute z-10 text-4xl font-semibold text-white flex text-center left-1/2 transform -translate-x-1/2">
						Welcome Back
					</h1>
				</div>
				<div className="flex flex-row justify-evenly items-center">
					<LoginSide />
					<div className="w-173 p-20 -top-10 relative">
						<h1 className="text-4xl font-semibold mb-2">
							Login into your Account
						</h1>
						<small className="text-zinc-800 text-opacity-40 text-base font-normal">
							To enjoy all of our cool features
						</small>
						<p className="text-black mt-8 text-xl font-normal">
							Log in as <span className="text-orange-300 text-xl">*</span>
						</p>
						<div className="justify-start items-start gap-11 inline-flex mt-3">
							<label className="justify-start items-center gap-4 inline-flex">
								<input
									type="checkbox"
									name="role"
									value="mentor"
									className="hidden"
								/>
								<div className="w-6 h-6 cursor-pointer relative rounded border border-black" />
								<div className="text-center text-neutral-700 text-base font-semibold">
									Mentor
								</div>
							</label>
							<label className="justify-start items-center gap-4 inline-flex">
								<input
									type="checkbox"
									name="role"
									value="mentor"
									className="hidden"
								/>
								<div className="w-6 h-6 cursor-pointer relative rounded border border-black" />
								<div className="text-center text-neutral-700 text-base font-semibold">
									Mentee
								</div>
							</label>
						</div>
						<form className="mt-5">
							<p className="text-xl">Email Address</p>
							<input
								className="w-96 h-12 pl-5 pr-48 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
								type="email"
								name="email"
								placeholder="123456789@gmail.com"
							/>
							<p className="text-xl mt-3">Password</p>
							<input
								className="w-96 h-12 pl-5 pr-48 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
								type="password"
								name="password"
								placeholder="********"
							/>
							<small className="block text-sky-600 text-15px font-normal">
								Forgot password?
							</small>
							<div className=" mt-8">
								<button className="text-white text-xl whitespace-nowrap font-bold w-96 h-14 px-52 py-3.5 bg-sky-600 rounded-2xl justify-center items-center inline-flex">
									Sign In
								</button>
								<div className="flex justify-center -ml-1 mt-8 flex-col">
									<div class="flex items-center space-x-2 w-96 ml-5 justify-center mt-42px">
										<div class="border-t border-neutral-400 flex-grow"></div>
										<div class="py-2 text-neutral-400 text-sm font-medium">
											Or Continue With
										</div>
										<div class="border-t border-neutral-400 flex-grow"></div>
									</div>
									<div className="flex w-414px justify-center items-center">
										<button className="w-96 h-12 p-2.5 rounded-lg border border-neutral-700 flex-row justify-center items-center gap-2.5 inline-flex">
											<Image
												src="/images/icons/googleicon.svg"
												alt="Google Logo"
												width={20}
												height={20}
											/>
											<p>Log in with Google</p>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MentorLogin;
