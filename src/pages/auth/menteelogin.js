import Footer from "@/src/Components/Footer";
import LoginSide from "@/src/Components/loginside";
import LoginForm from "@/src/Components/LoginForm";
import LoginHeader from "@/src/Components/LoginHeader";

const MenteeLogin = () => {
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

export default MenteeLogin;
