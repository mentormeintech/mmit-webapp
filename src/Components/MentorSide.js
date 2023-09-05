import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";

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
                <Link href="" className="flex">
                    <Image src="/images/icons/home.png" alt="icon" width={24} height={24} className="mr-6"/>
                    Home
                </Link>
            </li>

            <li className="mb-5">
                <Link href="/mentorsBooking" className={`${router.pathname == '/mentorsBooking' ? 'text-[#0F88D9]' : '' } flex`}>
                    <Image src="/images/icons/bookings.png" alt="icon" width={24} height={24} className="mr-6"/>
                    Bookings
                </Link>
            </li>

            <li className="mb-5">
                <Link href="" className="flex">
                    <Image src="/images/icons/cloud.png" alt="icon" width={24} height={24} className="mr-6"/>
                    Calendar
                </Link>
            </li>

            <li className="mb-5">
                <Link href="/mentorsSettings" className={`${router.pathname == '/mentorsSettings' ? 'text-[#0F88D9]' : '' } flex`} >
                    <Image src="/images/icons/settings.png" alt="icon" width={24} height={24} className="mr-6"/>
                    Settings
                </Link>
            </li>

            <li className="mb-5">
                <Link href="/mentorsSupport" className={`${router.pathname == '/mentorsSupport' ? 'text-[#0F88D9]' : '' } flex`}>
                    <Image src="/images/icons/help.png" alt="icon" width={24} height={24} className="mr-6"/>
                    Support
                </Link>
            </li>

            <li className="mb-5">
                <Link href="" className="flex">
                    <Image src="/images/icons/logout.png" alt="icon" width={24} height={24} className="mr-6"/>
                    Logout
                </Link>
            </li>

        </ul>
    </aside>
  )
}

export default MentorSide