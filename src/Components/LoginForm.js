import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { loggedInUser, registeredUser } from "@/redux/slices/userslice";
import { signInUser } from "@/utilities/apiClient";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector, } from "react-redux";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const dispatch = useDispatch()
	const router = useRouter()
	const [message, setmessage] = useState('')
	const [success, setsuccess] = useState(false)
	const [loading, setloading] = useState(false)
	//   const url = user_type === 'mentor' ? 'mentor/signin' : 'mentor/signin'
	const url = 'mentor/signin'
	async function registerUser(event) {
		try {
			setloading(true)
			setmessage('')
			const response = await signInUser(url, event)
			if (response && response.success === true) {
				if (response.data.user_type === 'mentor') {
					if (response.data.step1 === false) {
						dispatch(registeredUser({ token: response.token, user: response.data }))
						setmessage('Registration not completed')
						setloading(false)
						setsuccess(response.success)
						return router.push('/mentorregist')
					}
					dispatch(loggedInUser({ token: response.token, user: response.data }))
					setmessage(response.message)
					setsuccess(response.success)
					return setTimeout(() => {
						setloading(false)
						router.push('/')
					}, 900);
				}
				else {
					setmessage(response.message)
					setsuccess(response.success)
					setTimeout(() => {
						setloading(false)
						router.push('/')
					}, 900);
				}
			}
			else {
				setmessage(response.message)
				setsuccess(response.success)
				setloading(false)
			}
		} catch (error) {
			alert(error.message)
			setsuccess(false)
			setloading(false)
		}
	}
	return (
		<div className="w-173 p-20 -top-10 relative">
			<h1 className="text-4xl font-semibold mb-2">Login into your Account</h1>
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
			<form className="mt-5" onSubmit={handleSubmit(registerUser)}>
				<div className="flex flex-col">
					<p className="text-xl">Email Address</p>
					<input
						className="w-96 h-12 pl-5 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
						type="email"
						name="email"
						placeholder="123456789@gmail.com"
						{...register("email", { required: true })}
					/>
					{errors.email && <span className="text-xs text-red-500 mt-1">This field is required</span>}
				</div>
				<div className="flex flex-col">
					<p className="text-xl mt-3">Password</p>
					<input
						className="w-96 h-12 pl-5 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
						type="password"
						name="password"
						placeholder="********"
						{...register("password", { required: true })}
					/>
					{errors.password && <span className="text-xs text-red-500 mt-1">This field is required</span>}
				</div>
				<small className="block cursor-pointer text-sky-600 text-15px font-normal">
					Forgot password?
				</small>
				<div className=" mt-8">
					<div className="flex flex-col">
						<button className="text-white text-xl whitespace-nowrap font-bold w-96 h-14 px-52 py-3.5 bg-sky-600 rounded-2xl justify-center items-center inline-flex">
							Sign In
						</button>
						{message && <span className={`text-xs ${success === false ? 'text-red-500' : 'text-cyan-500'} mt-3`}>{message}</span>}
					</div>
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
	);
};

export default LoginForm;
