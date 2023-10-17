import SignupHeader from "../../components/signupHeader";
import SignupForm from "../../components/SignupForm";
import Image from "next/image";
import Footer from "../../components/Footer";

const MenteeSignup = () => {
  return (
    <>
      <div>
        <SignupHeader />
        <div className="flex flex-row items-center justify-evenly">
          <div>
            <div className="relative -top-40 flex flex-col justify-between">
              <h1 className="w-[33rem] text-4xl font-semibold text-black">
                {'Mentee'} <span className="text-orange-400">&</span> Experienced
                Professionals
              </h1>
              <Image
                className="mt-8 w-1/2"
                src="/images/login.png"
                width={1000}
                height={50}
                alt="Login"
              ></Image>
            </div>
          </div>
          <SignupForm user_type="mentee" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenteeSignup;
