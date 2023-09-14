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
      <div className='flex flex-row'>
        <div className='flex flex-row relative z-10 mt-[66px] ml-[100px]'>
          <Image
            width={100}
            height={100}
            src='images/search-icon.svg'
            className='w-[32.1px] absolute z-40 top-[25px] left-[15px]'
            alt=''
          />
          <input
            type='text'
            className='w-[1048px] h-[70px] px-[50px] outline-none pl-[60px] border rounded-sm items-center'
            placeholder='Search by name, role'
          />
        </div>
      </div>
      <div className='pt-[30px] flex-row justify-between items-center ml-[6.4rem] gap-7 inline-flex'>
        <Image src='images/tabler_arrow-up.svg' width={20} height={20} alt='' />
        <ul className='flex flex-row justify-between ml-[-20px] p-[10px] text-base'>
          <li className='mr-[30px] text-base cursor-pointer'>All</li>
          <li className='mr-[30px] cursor-pointer'>Product Design</li>
          <li className='mr-[30px] cursor-pointer'>Backend Development</li>
          <li className='mr-[30px] cursor-pointer'>UI/UX</li>
          <li className='cursor-pointer'>Frontend Development</li>
        </ul>
      </div>
      <div className='flex flex-row flex-wrap pt-[36px] items-center justify-center'>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      <div className='mt-[40px]'>
        <Footer />
      </div>
    </>
  );
};

export default FindAMentor;
