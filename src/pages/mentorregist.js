import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Singupconfirm from "./singupconfirm";

const Mentorregister = () => {
	const [formstep, setFormstep] = useState(0);
	// Listens to form state in real time
	const { watch, register } = useForm();

	const submitForm = () => {
		window.alert(JSON.stringify(watch(), null, 2));
		completeForm();
	};

	const backForm = () => {
		setFormstep(formstep - 1);
	};

	const completeForm = () => {
		setFormstep(formstep + 1);
	};

	useEffect(() => {
		const progressbar = document.querySelector(".progress-bar__fill");
		const main = document.querySelector(".main");
		if (progressbar) {
			if (formstep === 0) {
				progressbar.style.width = "0%";
			} else if (formstep === 1) {
				progressbar.style.width = "50%";
			} else if (formstep === 2) {
				progressbar.style.width = "100%";
				main.style.display = "none";
			}
		}
	}, [formstep]);

	return (
		<>
			<div className="main flex flex-row items-center justify-between h-screen bg-gray-100">
				<div className="flex flex-col items-center relative space-y-4">
					<div className="progress-bar relative -left-[30%]">
						<p className="flex font-semibold text-sm">Step {formstep} of 2</p>
						<div className="progress-bar__container flex flex-row h-1 w-32 bg-white">
							<div className="progress-bar__fill transition-width duration-300 ease-in-out bg-black w-[50%]"></div>
						</div>
					</div>
					<div className="flex flex-col my-auto">
						<div>
							<Image
								width={59}
								height={62}
								src="/images/mmitlogo.png"
								alt="MMIT Logo"
								className="absolute w-[59px] h-[62px] top-20 left-[66px]"
							/>
						</div>
						<div>
							<Image
								src="/images/registerImg.png"
								alt="Registration Image"
								width={609}
								height={500}
							/>
						</div>
						<div className="text-left top-[162px] w-[400px] left-[66px] absolute">
							<h1 className="text-[32px] text-[#FE9B7E]  font-bold">
								Mentee <span className="text-[white]">&</span> Experienced
								Professionals
							</h1>
						</div>
						<Image
							src="/images/login.png"
							alt="Login Image"
							width={1000}
							height={80}
							className="absolute w-80 top-[314px] left-[66px]"
						/>
					</div>
				</div>
				<div className="mr-[99px] relative">
					{formstep === 0 && (
						<div className="absolute inset-0 -left-[29rem] transition duration-300 ease-in-out flex items-center justify-center">
							<div className="relative">
								<p className="text-xl font-medium ml-[2rem] mb-[1rem]">
									Tell us about yourself
								</p>
								<div
									id="form1"
									className="flex flex-col w-[500px] border rounded-md items-center space-y-4">
									<form className=" p-6 ml-[-7rem] w-96">
										<div className="flex flex-col justify-start items-center mb-4">
											<p className="ml-[-11rem] mb-[3rem]">
												Upload profile photo
											</p>
											<div
												className="flex
						flex-row items-center">
												<label className="w-[100px] h-[100px] flex-row mt-[-2rem] rounded-full bg-gray-300 flex justify-center items-center cursor-pointer">
													<input
														type="file"
														className="hidden"
													/>
													<Image
														src="/images/icons/upload.svg"
														alt="Upload Icon"
														width={20}
														height={20}
													/>
												</label>
												<p className="ml-2">Make sure it is below 2mb</p>
											</div>
										</div>
										<div className="mb-4">
											<p>Full Name</p>
											<input
												type="text"
												{...register("fullName", { required: true })}
												className="border outline-none  bg-transparent rounded w-full py-2 px-3"
											/>
										</div>
										<div className="mb-4">
											<label
												htmlFor="gender"
												className="mb-2 block">
												Gender:
											</label>
											<select
												id="gender"
												className="border rounded bg-transparent  w-full outline-none py-2 px-3">
												<option value="male">Male</option>
												<option value="female">Female</option>
												<option value="prefer_not_to_say">
													Prefer Not to Say
												</option>
											</select>
										</div>
										<div className="mb-4">
											<p>Which country do you live in?</p>
											<input
												type="text"
												name="country"
												{...register("country", { required: true })}
												className="border bg-transparent outline-none  rounded w-full py-2 px-3"
											/>
										</div>
										<div className="mb-4">
											<p>Company / School</p>
											<input
												type="text"
												name="company"
												{...register("Company/School", { required: true })}
												className="border bg-transparent  outline-none  rounded w-full py-2 px-3"
											/>
										</div>
									</form>
								</div>
								<div>
									<button
										id="next1"
										type="submit"
										onClick={completeForm}
										className="w-28 h-9 relative top-[rem] mt-[1rem] px-5 py-3 bg-white rounded shadow justify-center items-center inline-flex">
										<div className="text-black text-base font-semibold">
											Continue
										</div>
									</button>
								</div>
							</div>
						</div>
					)}
					{formstep === 1 && (
						<div className="absolute inset-0 -left-[29rem] transition duration-300 ease-in-out -top-[4.3rem] flex-col flex items-center justify-center">
							<div
								id="form2"
								className="flex  flex-col w-[500px]   border rounded-md items-center space-y-4">
								<form className=" p-6 ml-[-7rem] w-96">
									<div className="flex flex-col justify-start items-center mb-4">
										<p className="ml-[-7.5rem]">
											Years of professional experience
										</p>
										<input
											type="text"
											name="experience"
											{...register("experience", { required: true })}
											className="border outline-none  bg-transparent  rounded w-full py-2 px-3"
										/>
									</div>
									<div className="mb-4">
										<p>LinkedIn URL Label</p>
										<input
											type="text"
											name="linkedin url"
											{...register("linkedIn", { required: true })}
											className="border outline-none  bg-transparent  rounded w-full py-2 px-3"
										/>
									</div>
									<div className="mb-4">
										<p>Twitter(Optional)</p>
										<input
											type="text"
											name="twitter url"
											{...register("twitter", { required: true })}
											className="border outline-none  bg-transparent  rounded w-full py-2 px-3"
										/>
									</div>
									<div className="mb-4">
										<p>Bio</p>
										<textarea
											type="text"
											name="bio"
											{...register("Bio", { required: true })}
											placeholder="I am John Doe a Front-End Developer
Experienced front-end developer skilled in HTML, CSS, and JavaScript. Proficient in responsive design and modern frameworks like React and Angular."
											className="border outline-none  bg-transparent  rounded w-full h-40
                   py-2 px-3"
										/>
									</div>
								</form>
							</div>
							<div className="flex flex-row justify-evenly -ml-16">
								<button
									id="back1"
									onClick={backForm}
									className="w-28 h-9 mt-[1rem] px-5 py-3 bg-white rounded shadow items-center inline-flex">
									<div className="text-black text-base flex items-center font-semibold">
										<FaArrowLeft />
										<p className="ml-3">Back</p>
									</div>
								</button>
								<button
									onClick={submitForm}
									id="next2"
									type="submit"
									className="w-28 h-9 mt-[1rem] ml-12 px-5 py-3 bg-white rounded shadow items-center inline-flex">
									<div className="text-black text-base font-semibold">
										Continue
									</div>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
			{formstep === 2 && <Singupconfirm />}
		</>
	);
};

export default Mentorregister;
