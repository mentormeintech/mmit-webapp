import Handshake from '../Components/Handshake';
import Footer from '../Components/Footer';
import PartnershipLeft from './PartnershipLeft';
import PartnershipForm from './PartnershipForm';
import Header from '../Components/Header';
import Image from 'next/image';

function page() {
  return (
    <div>
      <Header />
      <Handshake />

      <div className='flex justify-between pt-14 pl-24 pb-[400px] relative'>
        <Image src="/images/right-tri.png" width={352} height={557} alt='tri' className='absolute right-0 bottom-0 z-[-1]' />
        <PartnershipLeft />
        <PartnershipForm />
      </div>


      <Footer />
    </div>
  )
}

export default page