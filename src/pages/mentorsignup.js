import LoginSide from "./../Components/loginside";
import SignupHeader from "../Components/signupHeader";
import SignupForm from "../Components/signupForm";

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
