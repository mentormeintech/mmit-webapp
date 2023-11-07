import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import mentors from "../components/dummydata";

const BookASession = () => {
  return (
    <>
      <Header />
      <div className="ml-[6.8rem] inline-flex flex-row items-center justify-between gap-7 pt-[35px] text-[25px] font-[700]">
        Recently Contacted
      </div>
      <div className="m-auto mt-10 flex w-[20rem] flex-row flex-wrap items-center justify-center gap-10 smd:w-full">
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
    </>
  );
};

export default BookASession;
