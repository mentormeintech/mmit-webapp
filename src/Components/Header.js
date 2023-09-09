import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/findamentor', text: 'Find a mentor' },
  { href: '/bookasession', text: 'Book a session' },
  { href: '/mentorsignup', text: 'About Us' },
  { href: '/mentorregist', text: 'Insights' },
  { href: '/mentorProfile', text: 'Partnership' },
];

const Header = () => {
  return (
    <div class='w-full'>
      <div className='container mx-auto font-medium'>
        <div className='flex flex-row justify-between items-center py-4 px-6'>
          <Link href='/'>
            <Image
              width={100}
              height={100}
              alt='MMIT Logo'
              className='w-28 h-auto'
              src='/images/mmit-logo.png'
            />
          </Link>

          <div className='flex-row font-semibold justify-center items-center hidden lg:flex'>
            <div className='flex-row justify-between items-start gap-7'>
              <ul className='flex flex-row justify-between gap-8 font-medium'>
                {links.map((link, index) => (
                  <li key={index} className='hover:text-sky-600 transition-all'>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='hidden sm:flex flex-row gap-4'>
            <Link href='/menteesignup'>
              <button className='px-4 py-2 rounded border border-orange-400 text-white  bg-orange-400 hover:bg-transparent hover:text-black transition-all'>
                Sign up
              </button>
            </Link>

            <Link href='/sidebar'>
              <button className='px-4 py-2 rounded border border-orange-400 hover:bg-orange-400 hover:text-white transition-all'>
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
