import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillCloud, AiFillHome, AiFillQuestionCircle } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

const MentorSide = ({Mentor}) => {
    const router = useRouter()
  return (
    <aside className="w-3/12 pt-8 border-r flex justify-center min-h-[calc(100vh-70px)]">
        <Image src="/images/mentorPic.png" alt="" width={40} height={40} className="h-[40px] w-[40px] mr-10 mt-2" />

        <ul>
            <li className="mb-9">
                <ul>
                    <li>{Mentor.name}</li>
                    <li className="text-[#0F88D9]">View Profile</li>
                </ul>
            </li>


            <li className="mb-5">
                <Link href="/mentor" className={`${router.pathname == '/mentor' ? 'text-[#0F88D9]' : '' } flex items-center hover:text-[#0F88D9]`}>
                    <i className="mr-2 text-xl"><AiFillHome /></i>
                    Home
                </Link>
            </li>

            <li className="mb-5">
                <Link href="/mentorsBooking" className={`${router.pathname == '/mentorsBooking' ? 'text-[#0F88D9]' : '' } flex items-center hover:text-[#0F88D9]`}>
                    <i className="mr-2 text-xl"><BsFillBookFill /></i>
                    Bookings
                </Link>
            </li>

            <li className="mb-5">
                <Link href="" className="flex items-center hover:text-[#0F88D9]">
                    <i className="mr-2 text-xl"><AiFillCloud /></i>
                    Calendar
                </Link>
            </li>

            <li className="mb-5">
                <Link href="/mentorsSettings" className={`${router.pathname == '/mentorsSettings' ? 'text-[#0F88D9]' : '' } flex items-center hover:text-[#0F88D9]`} >
                    <i className="mr-2 text-xl"><MdSettings /></i>
                    Settings
                </Link>
            </li>

            <li className="mb-5">
                <Link href="/mentorsSupport" className={`${router.pathname == '/mentorsSupport' ? 'text-[#0F88D9]' : '' } flex items-center hover:text-[#0F88D9]`}>
                    <i className="mr-2 text-xl"><AiFillQuestionCircle /></i>
                    Support
                </Link>
            </li>

            <li className="mb-5">
                <Link href="" className="flex items-center hover:text-[#0F88D9]">
                    <i className="mr-2 text-xl"><HiOutlineLogout /></i>
                    Logout
                </Link>
            </li>

        </ul>
    </aside>
  )
}

export default MentorSide