// "use client"
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const SignupForm = () => {
  const user = useSelector(state => state.user)
  const encoded = btoa(`${process.env.NEXT_PUBLIC_BASIC_USERNAME}:${process.env.NEXT_PUBLIC_BASIC_PASSWORD}`);
  console.log('User type', encoded)

  async function registerUser(event) {
    try {
      event.preventDefault()
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className="w-173 p-20 -top-10 relative">
      <div className="text-neutral-700 w-[26rem] text-base leading-relaxed font-normal">
        {`"Take the Leap and Join Our Transformative Mentorship Program,
      Where Passionate Individuals Connect, Learn, and Inspire Each
      Other Towards Personal and Professional Excellence."`}
      </div>

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
        <div className="flex flex-row items-center justify-between mb-[1rem]">
          <div className="flex flex-col">
            <p className="text-xl">First Name</p>
            <input
              className="h-12 pl-5  pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
              type="text"
              placeholder="Ololade"
            />
          </div>
          <div className="flex ml-4 flex-col">
            <p className="text-xl">Last Name</p>
            <input
              className="h-12 pl-5 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
              type="text"
              placeholder="Martha"
            />
          </div>
        </div>
        <p className="text-xl">Email Address</p>
        <input
          className="w-96 h-12 pr-12 pl-5 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
          type="email"
          name="email"
          placeholder="123456789@gmail.com"
        />
        <p className="text-xl mt-3">Password</p>
        <input
          className="w-96 h-12 pl-5 pt-1.5 pb-2 rounded-lg border border-black border-opacity-20 justify-start items-center outline-none inline-flex"
          type="password"
          name="password"
          placeholder="********"
        />
        <small className="block cursor-pointer text-sky-600 text-15px font-normal">
          Forgot password?
        </small>
        <div className=" mt-8">
          <button className="text-white text-xl whitespace-nowrap font-bold w-96 h-14 px-52 py-3.5 bg-sky-600 rounded-2xl justify-center items-center inline-flex" onClick={registerUser}>
            Sign Up
          </button>
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
      </form>
    </div>
  )
}

export default SignupForm