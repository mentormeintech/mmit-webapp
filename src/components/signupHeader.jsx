import Image from "next/image";
import Link from "next/link";


const SignupHeader = () => {
  return (
    <div className="relative flex flex-row items-center">
      <div className="absolute left-20 flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={90}
            height={10}
            className="-ml-5 w-20 cursor-pointer smd:ml-0"
          />
        </Link>
      </div>
      <Image
        src="/images/background.png"
        alt="Background"
        width={2000}
        height={50}
        className="h-40"
      />
      <h1 className="absolute left-1/2 z-10 ml-6 flex -translate-x-1/2 transform text-center text-2xl font-semibold text-white smd:text-4xl">
        Join Us
      </h1>
    </div>
  );
};

export default SignupHeader;
