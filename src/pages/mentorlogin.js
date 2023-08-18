import FindAMentor from "./findamentor";
import Link from "next/link";
import { AiOutlineGoogle } from 'react-icons/ai';
import Footer from "@/Components/Footer";

const MentorLogin = () => {
	return (
		<>
			<div>
				<div className="flex flex-row items-center relative">
					<div className="absolute flex items-center left-20">
						<Link href="/findamentor">
							<img src="images\logo.png" alt="Logo" />
						</Link>
					</div>
					<img src="images\background.png" alt="Background" />
					<h1 className="absolute z-10 text-4xl font-semibold text-white flex text-center left-1/2 transform -translate-x-1/2">
						Welcome Back
					</h1>
				</div>
				<div className="flex flex-row justify-center items-center">
					<div className="flex flex-col justify-between relative -top-40">
						<h1 className="w-105 text-black text-4xl font-semibold">
							Experience Professional Mentors
						</h1>
						<img className="w-1/2 mt-12.5" src="images\login.png" alt="Login" />
					</div>
					<div className="w-173 p-20 relative left-40">
						<h1 className="text-4xl font-semibold mb-5">
							Login into your Account
						</h1>
						<small className="text-zinc-800 text-opacity-40 text-base font-normal">
							To enjoy all of our cool features
						</small>
						<p className="text-black mt-8.5 text-xl font-normal">
							Log in as <span className="text-orange-300 text-xl">*</span>
						</p>
						<div className="justify-start items-start gap-11 inline-flex mt-5">
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
						<form className="mt-30">
							<p className="text-xl mb-10">Email Address</p>
							<input
								className="w-96 h-12 pl-5 pr-48 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
								type="email"
								name="email"
								placeholder="123456789@gmail.com"
							/>
							<p className="text-xl mt-30 mb-10">Password</p>
							<input
								className="w-96 h-12 pl-5 pr-48 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
								type="password"
								name="password"
								placeholder="********"
							/>
							<small className="block text-sky-600 text-15px mt-5 font-normal">
								Forgot password?
							</small>
							<button className="text-white text-xl mt-40 whitespace-nowrap font-bold w-96 h-14 px-52 py-3.5 bg-sky-600 rounded-2xl justify-center items-center inline-flex">
								Sign In
							</button>

							<div class="flex items-center space-x-2 w-96 ml-12 justify-center mt-42px">
								<div class="border-t border-neutral-400 flex-grow"></div>
								<div class="px-4 py-2 text-neutral-400 text-base font-medium">
									Or Continue With
								</div>
								<div class="border-t border-neutral-400 flex-grow"></div>
							</div>
							<div className="flex w-414px justify-center items-center mt-3px">
								<button className="w-96 h-12 p-2.5 rounded-lg border border-neutral-700 flex-row justify-center items-center gap-2.5 inline-flex">
									<AiOutlineGoogle />
									<p>Log in with Google</p>
								</button>
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
