import Header from "../Components/Header";
import ProfileCard from "../Components/ProfileCard";
import Footer from "../Components/Footer";
import Image from "next/image";


const mentors = [
  {
      "name": "John Doe",
      "role": "Software Engineer at XYZ.co",
      "sessions": 12,
      "reviews": 9,
      "experience": "5 years",
      "attendance": "98%",
      "image": "/images/profileImage1.png"
  },
  {
      "name": "Alice Johnson",
      "role": "Data Scientist at DEF.co",
      "sessions": 15,
      "reviews": 10,
      "experience": "7 years",
      "attendance": "96%",
      "image": "/images/profileImage2.png"
  },
  {
      "name": "Bob Williams",
      "role": "DevOps Engineer at GHI.co",
      "sessions": 11,
      "reviews": 8,
      "experience": "6 years",
      "attendance": "97%",
      "image": "/images/profileImage4.png"
  },
  {
      "name": "Charlie Brown",
      "role": "Full Stack Developer at JKL.co",
      "sessions": 14,
      "reviews": 9,
      "experience": "8 years",
      "attendance": "95%",
      "image": "/images/profileImage5.png"
  },
  {
      "name": "David Davis",
      "role": "Frontend Developer at MNO.co",
      "sessions": 13,
      "reviews": 10,
      "experience": "7 years",
      "attendance": "96%",
      "image": "/images/profileImage6.png"
  },
  {
      "name": "Eve Evans",
      "role": ".NET Developer at PQR.co",
      "sessions": 12,
      "reviews": 9,
      "experience": '6 years',
      'attendance': '98%',
       'image': '/images/profileImage7.png'
   },
   {
       'name': 'Frank Foster',
       'role': 'Backend Developer at STU.co',
       'sessions': 15,
       'reviews': 10,
       'experience': '7 years',
       'attendance': '96%',
       'image': '/images/profileImage8.png'
   },
   {
       'name': 'Grace Green',
       'role': 'Python Developer at VWX.co',
       'sessions': 11,
       'reviews': 8,
       'experience': '6 years',
       'attendance': '97%',
       'image': '/images/profileImage9.png'
   },
   {
       'name': 'Helen Harris',
       'role': 'Java Developer at YZ.co',
       'sessions': 14,
       'reviews': 9,
       'experience': '8 years',
       'attendance': '95%',
       'image': '/images/profileImage10.png'
   },
   {
       'name': 'Ivan Ivanov',
       'role': '.PHP Developer at ABCD.co',
       'sessions': 13,
       'reviews': 10,
       'experience': '7 years',
       'attendance': '96%',
       'image': '/images/profileImage11.png'
   }
]


const FindAMentor = () => {
  return (
    <>
      <Header />
      <div className="ml-24 mt-16 flex flex-row">
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
            className="h-16  w-full items-center rounded-sm border px-12 pl-14 outline-none"
            placeholder="Search by name, role"
          />
        </div>
      </div>
      <div className="ml-20 inline-flex flex-row items-center justify-between gap-7 pt-7">
        <Image src="images/tabler_arrow-up.svg" width={20} height={20} alt="" />
        <ul className="ml-[-20px] flex flex-row justify-between p-[10px] text-base">
          <li className="mr-8 cursor-pointer text-base">All</li>
          <li className="mr-8 cursor-pointer">Product Design</li>
          <li className="mr-8 cursor-pointer">Backend Development</li>
          <li className="mr-8 cursor-pointer">UI/UX</li>
          <li className="cursor-pointer">Frontend Development</li>
        </ul>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {mentors.map((mentor, index) => (
          <ProfileCard key={index} mentor={mentor} />
        ))}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default FindAMentor;
