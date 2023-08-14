import handshake from '../../../public/images/dim.png';
import Image from 'next/image';

const Handshake = () => {
  return (
    <div className='relative'>
      <Image alt="" src={handshake} />

      <div className='absolute text-white top-[25%] left-0 pl-[7%] w-full'>
        <h1 className='text-[36px] font-[600] mb-[5px]'>Partnership</h1>
        <p className='text-xl font-[500]'>Empowering Tech Futures Through Partnership</p>
      </div>
    </div>
  )
}

export default Handshake