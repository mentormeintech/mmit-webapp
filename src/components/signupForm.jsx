"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registeredUser } from "../redux/slices/userslice";
import { signInUser } from "../utilities/apiClient";
import Alert from "../features/Alert";
import Loader from "./Loader";
import { setToken } from "../utilities/axiosClient";

const SignupForm = (props) => {
  const dispatch = useDispatch();
  const [message, setmessage] = useState("");
  const [success, setsuccess] = useState(false);
  const [loading, setloading] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { user_type } = props;
  const url = user_type === "mentor" ? "mentor/signup" : "mentee/signup";

  async function registerUser(event) {
    try {
      setloading(true);
      setmessage("");
      setTimeout(() => {
        setloading(false);
      }, 3000);
      const response = await signInUser(url, event);
      if (response && response.success === true) {
        dispatch(
          registeredUser({ token: response.token, user: response.data }),
        );
        setmessage(response.message);
        Alert(response.message, "success");
        setsuccess(response.success);
        await setToken();
        setTimeout(() => {
          // response.data.user_type === 'mentor' && router.push('/mentorregist')
          response.data.user_type === "mentor" && router.push("/auth/career");
          response.data.user_type === "mentee" && router.push("/auth/signin");
          setloading(false);
        }, 500);
      } else {
        setmessage(response.message);
        Alert(response.message, "warning");
        setsuccess(response.success);
        setloading(false);
      }
      // event.preventDefault()
      // user_type === 'mentor' && router.push('/mentorregist')
    } catch (error) {
      Alert(error.message, "error");
      setsuccess(error.message);
      setloading(false);
    }
  }

  // #0F88D9
  return (
    <div className="flex min-w-0  flex-col justify-center p-10 smd:relative smd:right-0 sm:flex sm:flex-col sm:justify-center lg:relative lg:right-8 xl:mx-auto">
      <div className="ml-16 w-[75%] text-base font-normal leading-relaxed text-neutral-700 smd:ml-0 smd:w-[29rem]">
        {`"Take the Leap and Join Our Transformative Mentorship Program,
      Where Passionate Individuals Connect, Learn, and Inspire Each
      Other Towards Personal and Professional Excellence."`}
      </div>
      <form
        className="ml-16 mt-5 flex flex-col justify-center smd:ml-0"
        onSubmit={handleSubmit(registerUser)}
      >
        <div className="mb-[1rem] flex flex-row items-center   smd:w-full">
          <div className="flex w-[30%] flex-col smd:w-[40%]">
            <p className="text-xl">First Name</p>
            <input
              className="inline-flex h-12 items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-full"
              type="text"
              placeholder="Ololade"
              {...register("first_name", { required: true })}
            />
            {errors.first_name && (
              <span className="mt-1 text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="ml-4 flex flex-col">
            <p className="text-xl">Last Name</p>
            <input
              className="inline-flex h-12 items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none smd:w-full"
              type="text"
              placeholder="Martha"
              {...register("last_name", { required: true })}
            />
            {errors.last_name && (
              <span className="mt-1 text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xl">Email Address</p>
          <input
            className="inline-flex h-12 w-80 items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pr-12 pt-1.5 outline-none sm:w-96"
            type="email"
            name="email"
            placeholder="123456789@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="mt-1 text-xs text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <p className="mt-3 text-xl">Password</p>
          <input
            className="inline-flex h-12 w-80 items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none sm:w-96"
            type="password"
            name="password"
            placeholder="********"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="mt-1 text-xs text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <p className="mt-3 text-xl">Confirm Password</p>
          <input
            className="inline-flex h-12 w-80 items-center justify-start rounded-lg border border-black border-opacity-20 pb-2 pl-5 pt-1.5 outline-none sm:w-96"
            type="password"
            name="repeat_password"
            placeholder="********"
            {...register("repeat_password", { required: true })}
          />
          {errors.repeat_password && (
            <span className="mt-1 text-xs text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div className="mt-8 w-[360px] smd:w-[90%]">
          <div className="flex flex-col">
            <button
              className={`inline-flex h-14 items-center justify-center whitespace-nowrap rounded-2xl bg-sky-600 px-24 py-3.5 text-xl font-bold text-white ${
                loading === true ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={loading === true ? true : false}
            >
              {loading ? <Loader /> : "Sign Up"}
            </button>
            {message && (
              <span
                className={`text-xs ${
                  success === false ? "text-red-500" : "text-cyan-500"
                } mt-3`}
              >
                {message}
              </span>
            )}
          </div>
          <div className="ml-5 mt-1 flex items-center justify-center space-x-2">
            <div className="py-1 text-sm font-medium text-neutral-400">
              Already have an account?
            </div>
            <Link
              href={"mentorlogin"}
              className="py-1 text-sm font-medium text-sky-600 transition-all hover:text-secondary-500"
            >
              {"Sign In"}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
