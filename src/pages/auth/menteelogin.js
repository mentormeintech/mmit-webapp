import Footer from "../../components/footer";
import LoginSide from "../../components/loginside";
import LoginHeader from "../../components/LoginHeader";
import LoginForm from "../../components/LoginForm";

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
