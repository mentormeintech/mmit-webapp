import LoginSide from "./../components/loginside";
import SignupHeader from "../components/signupHeader";
import SignupForm from "../components/signupForm";

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
