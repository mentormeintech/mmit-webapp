import SignupHeader from "../../components/signupHeader";
import SignupForm from "../../components/signupForm";
import Image from "next/image";
import Footer from "../../components/Footer";

const MenteeSignup = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <SignupHeader />
        <div className="flex lg:flex-row flex-col items-center justify-evenly">
          <div className="lg:block hidden">
            <div className="relative -top-20 left-20 flex flex-col">
              <h1 className="w-[49rem] text-5xl font-semibold  text-black">
                {'Mentee'} <span className="text-orange-400">&</span> Experienced
                Professionals
              </h1>
              <Image
                className="mt-8 w-1/2"
                src="/images/login.png"
                width={1000}
                height={250}
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
