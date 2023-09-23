import Header from '@/Components/Header'
import Link from 'next/link'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'

function connect_calendar() {
  return (
    <>
      <Header />
      <main className='pl-[100px] pt-10'>
        <div className='w-[600px] text-[#454545]'>
          <h1 className='font-semibold text-2xl mb-7'>Connect your calendar</h1>
          <p className='leading-7 pb-14'>This configuration enables you to receive direct bookings into your calendar. Once configured, Mentormeintech members will locate your available time slots and make bookings directly through the platform, which you can manage.</p>
          <div className='flex items-center justify-between'>
            <Link href="" className='flex items-center'><i className='mr-2'><AiOutlineLeft /></i> <span>Back</span></Link>
            <button>Connect your calendar with Google <i></i></button>
          </div>
        </div>
      </main>
    </>
  )
}

export default connect_calendar