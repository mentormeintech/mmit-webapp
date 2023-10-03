// "use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector, } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import { registeredUser, loggedInUser } from "@/redux/slices/userslice";
import { signInUser } from "@/utilities/apiClient";


const SignupForm = (props) => {
  const dispatch = useDispatch()
  const [message, setmessage] = useState('')
  const [success, setsuccess] = useState(false)
  const [loading, setloading] = useState(false)
  const [password, setPassword] = useState("")
	const [passwordAgain, setPasswordAgain] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const { user_type } = props
  const url = user_type === 'mentor' ? 'mentor/signup' : 'mentee/signup'

  async function registerUser(event) {
    try {
      setloading(true)
      setmessage('')
      const response = await signInUser(url, event)
      if (response && response.success === true) {
        dispatch(registeredUser({ token: response.token, user: response.data }))
        setmessage(response.message)
        setsuccess(response.success)
        setTimeout(() => {
          response.data.user_type === 'mentor' && router.push('/mentorregist')
          response.data.user_type === 'mentee' && router.push('/auth/mentorlogin')
          setloading(false)
        }, 500);
      }
      else {
        setmessage(response.message)
        setsuccess(response.success)
        setloading(false)
      }
      // event.preventDefault()
      // user_type === 'mentor' && router.push('/mentorregist')
    } catch (error) {
      // alert(error.message)
      setsuccess(error.message)
      setloading(false)
    }
  }

  // #0F88D9
  return (
    <div className="w-173 p-20 -top-10 relative">
      <div className="text-neutral-700 w-[26rem] text-base leading-relaxed font-normal">
        {`"Take the Leap and Join Our Transformative Mentorship Program,
      Where Passionate Individuals Connect, Learn, and Inspire Each
      Other Towards Personal and Professional Excellence."`}
      </div>
      <form className="mt-5" onSubmit={handleSubmit(registerUser)}>
        <div className="flex flex-row items-center justify-between mb-[1rem]">
          <div className="flex flex-col">
            <p className="text-xl">First Name</p>
            <input
              className="h-12 pl-5  pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
              type="text"
              placeholder="Ololade"
              {...register("first_name", { required: true })}
            />
            {errors.first_name && <span className="text-xs text-red-500 mt-1">This field is required</span>}
          </div>
          <div className="flex ml-4 flex-col">
            <p className="text-xl">Last Name</p>
            <input
              className="h-12 pl-5 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
              type="text"
              placeholder="Martha"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && <span className="text-xs text-red-500 mt-1">This field is required</span>}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xl">Email Address</p>
          <input
            className="w-96 h-12 pr-12 pl-5 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
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
        <div className="flex flex-col">
          <p className="text-xl mt-3">Confirm Password</p>
          <input
            className="w-96 h-12 pl-5 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
            type="password"
            name="repeat_password"
            placeholder="********"
            {...register("repeat_password", { required: true })}
          />
          {errors.repeat_password && <span className="text-xs text-red-500 mt-1">This field is required</span>}
        </div>
        <div className=" mt-8">
          <div className="flex flex-col">
            <button className={`text-white text-xl whitespace-nowrap font-bold w-96 h-14 px-52 py-3.5 bg-sky-600 rounded-2xl justify-center items-center inline-flex ${loading === true ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={loading === true ? true : false}>
              Sign Up
            </button>

            {message && <span className={`text-xs ${success === false ? 'text-red-500' : 'text-cyan-500'} mt-3`}>{message}</span>}
          </div>
          <div className="flex items-center space-x-2 w-96 ml-5 justify-center mt-1">
						<div className="py-2 text-neutral-400 text-sm font-medium">
							Already have an account?
						</div>
						<Link href={'mentorlogin'} className="py-5 text-sky-600 text-sm font-medium transition-all hover:text-secondary-500">
							{'Sign In'}
						</Link>
					</div>
          <div className="flex justify-center -ml-1 mt-8 flex-col">
            <div className="flex items-center space-x-2 w-96 ml-5 justify-center mt-42px">
              <div className="border-t border-neutral-400 flex-grow"></div>
              <div className="py-2 text-neutral-400 text-sm font-medium">
                Or Continue With
              </div>
              <div className="border-t border-neutral-400 flex-grow"></div>
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
      </form >
    </div >
  )
}

export default SignupForm