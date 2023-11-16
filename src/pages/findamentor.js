import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import Image from "next/image";
import mentors from "../components/dummydata";
import AOS from "aos";
import "aos/dist/aos.css";

const Fade = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
};

const FindAMentor = () => {
  return (
    <div className="m-autoflex flex-col items-center overflow-hidden smd:block">
      <Header />
      <div data-aos="fade-down" className="mt-16 flex flex-row justify-center">
        <div className="relative z-10 w-[90%]">
          <Image
            width={100}
            height={100}
            src="images/search-icon.svg"
            className="absolute left-4 top-6 z-40 w-8"
            alt=""
          />
          <input
            type="text"
            className="h-16 w-full items-center rounded-sm border px-12 pl-14 outline-none"
            placeholder="Search by name, role"
          />
        </div>
      </div>
      {/* Career nav */}
      <div data-aos="fade-right" className="relative ml-10 inline-flex flex-row justify-between gap-7 whitespace-nowrap pt-7 font-semibold">
        <Image src="images/tabler_arrow-up.svg" width={20} height={20} alt="" />
        <ul className="ml-[-20px] flex flex-row justify-between p-[10px] text-base">
          <li className="mr-8 cursor-pointer text-base">All</li>
          <li className="mr-8 cursor-pointer">Product Design</li>
          <li className="mr-8 cursor-pointer">Backend Development</li>
          <li className="mr-8 cursor-pointer">UI/UX</li>
          <li className="cursor-pointer">Frontend Development</li>
        </ul>
      </div>
      <div data-aos="fade-up" className="mt-16 flex w-[20rem] flex-row m-auto flex-wrap items-center justify-center gap-10 smd:w-full">
        {mentors.map((mentor, index) => (
          <ProfileCard
            key={index}
            name={mentor.name}
            role={mentor.role}
            sessions={mentor.sessions}
            reviews={mentor.reviews}
            experience={mentor.experience}
            attendance={mentor.attendance}
            image={mentor.image}
          />
        ))}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default FindAMentor;
