import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
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

const BookASession = () => {
  return (
    <div>
      <Header />
      <div data-aos="fade-right" className="mt-20 inline-flex flex-row items-center justify-between gap-7 pl-5 text-[29px] font-[700] smd:ml-10">
        Recently Contacted
      </div>
      <div data-aos="fade-up" className="m-auto mt-10 flex w-[20rem] flex-row flex-wrap items-center justify-center gap-10 smd:w-full">
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
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default BookASession;
