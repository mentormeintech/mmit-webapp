import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import Image from "next/image";

const FindAMentor = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="relative z-10 ml-[100px] mt-[66px] flex flex-row">
          <Image
            width={100}
            height={100}
            src="images/search-icon.svg"
            className="absolute left-[15px] top-[25px] z-40 w-[32.1px]"
            alt=""
          />
          <input
            type="text"
            className="h-[70px] w-[1048px] items-center rounded-sm border px-[50px] pl-[60px] outline-none"
            placeholder="Search by name, role"
          />
        </div>
      </div>
      <div className="ml-[6.4rem] inline-flex flex-row items-center justify-between gap-7 pt-[30px]">
        <Image src="images/tabler_arrow-up.svg" width={20} height={20} alt="" />
        <ul className="ml-[-20px] flex flex-row justify-between p-[10px] text-base">
          <li className="mr-[30px] cursor-pointer text-base">All</li>
          <li className="mr-[30px] cursor-pointer">Product Design</li>
          <li className="mr-[30px] cursor-pointer">Backend Development</li>
          <li className="mr-[30px] cursor-pointer">UI/UX</li>
          <li className="cursor-pointer">Frontend Development</li>
        </ul>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center pt-[36px]">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      <div className="mt-[40px]">
        <Footer />
      </div>
    </>
  );
};

export default FindAMentor;
