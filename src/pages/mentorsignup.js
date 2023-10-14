import LoginSide from "./src/components/loginside";
import SignupHeader from "./src/components/SignupHeader";
import SignupForm from "./src/components/SignupForm";

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
