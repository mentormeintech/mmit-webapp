import Link from 'next/link';
import Image from 'next/image';
import Header from '@/Components/Header';
import { GoHomeFill } from 'react-icons/go';
import { FaBookOpen } from 'react-icons/fa';
import { BiSolidGroup } from 'react-icons/bi';
import { HiOutlineLogout } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';
import { RiSettings3Fill } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col w-64 h-screen items-center fixed px-4 py-8 bg-white border-r gap-8 border-gray-300'>
        <div className='profile-pic flex flex-col w-64 items-center'>
          <Image
            src='/images/profileImage2.png'
            width={100}
            height={1000}
            className='rounded-full'
            alt='profile-logo'
          ></Image>
        </div>
        <div className='flex flex-col gap-3'>
          <Link
            href='/home'
            className=' py-1 gap-2 flex flex-row items-center active:text-blue-500'
          >
            <GoHomeFill />
            Home
          </Link>
          <Link
            href='/booking'
            className=' py-1 gap-2 flex flex-row items-center active:text-blue-500'
          >
            <FaBookOpen />
            Booking
          </Link>
          <Link
            href='/group-sessions'
            className='py-1 gap-2 flex flex-row items-center'
          >
            <BiSolidGroup />
            Group Sessions
          </Link>
          <Link
            href='/settings'
            className=' py-1 gap-2 flex flex-row items-center active:text-blue-500'
          >
            <RiSettings3Fill />
            Settings
          </Link>
          <Link
            href='/support'
            className=' py-1 gap-2 flex flex-row items-center active:text-blue-500'
          >
            <BiSupport />
            Support
          </Link>
          <Link
            href='/logout'
            className=' py-1 gap-2 flex flex-row items-center active:text-blue-500'
          >
            <HiOutlineLogout />
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
