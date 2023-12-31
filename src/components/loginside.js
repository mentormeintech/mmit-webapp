import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Fade = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
};

const LoginSide = () => {
  return (
    <div data-aos="fade-right" className="mt-24 hidden pl-24 mdl:block">
      <div className="relative -top-40 flex flex-col justify-between">
        <h1 className="text-5xl font-semibold text-black">
          Experience Professional Mentors
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
  );
};

export default LoginSide;
