import Footer from "./src/components/Footer";
import LoginSide from "./src/components/loginside";
import LoginHeader from "./src/components/LoginHeader";
import LoginForm from "./src/components/LoginForm";

const MentorLogin = () => {
  return (
    <>
      <div className="overflow-hidden">
        <LoginHeader />
        <div className="flex flex-row items-center justify-evenly">
          <LoginSide />
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MentorLogin;
