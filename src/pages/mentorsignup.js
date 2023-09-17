import LoginSide from "@/components/loginside";
import SignupHeader from "@/components/SignupHeader";
import SignupForm from "@/components/SignupForm";

const Mentorsignup = () => {
  return (
    <>
      <div>
        <SignupHeader />
        <div className="flex flex-row items-center justify-evenly">
          <LoginSide />
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Mentorsignup;
