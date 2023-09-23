import Header from '@/Components/Header'
import MentorSide from '@/Components/MentorSide';
import { CurrentMentor } from "@/Components/CurrentMentor";
import React from 'react'
import Link from 'next/link';
import Header_Signin from '@/Components/Header_Signin';

function MentorsSupport() {
    const Mentor = CurrentMentor

    const supportLinks = [
        { text: "Help center", url: ""},
        { text: "Contact us", url: ""},
        { text: "Privacy Policy", url: ""},
        { text: "FAQ", url: ""},
    ]
  return (
    <>
        <Header_Signin />
        <div className='flex'>
            <MentorSide Mentor={Mentor}/>
            <section className="w-9/12 py-8 px-5">
                <h4 className='text-[#454545] text-xl font-semibold mb-12'>Support</h4>

                <div className='w-9/12 flex justify-between items-center'>
                    {
                        supportLinks.map((link, index) => {
                            return <Link key={index} href={link.url} className='text-[#454545] flex items-center justify-center w-[23%] h-28 border rounded'>
                                {link.text}
                            </Link>
                        })
                    }
                </div>
            </section>
        </div>
    </>
  )
}

export default MentorsSupport