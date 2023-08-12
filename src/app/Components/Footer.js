import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="pl-[6%] pr-[3%] min-h-[384px] bg-[#F6FAFD] flex flex-col justify-between pt-9 pb-4">
        <div className="flex justify-between items-center">
            <section className="w-[53%]">
                <Image src='/images/footerLogo.png' width={202} height={89.494} alt="" className="w-[202px] h-[89.494px]"/>
            </section>
            <section className="w-[43%]">
                <div className="mb-7 flex items-center justify-between">
                    <a href="" className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#0A66C20D] hover:opacity-60"><Image width={17} height={17} alt="icon" src="/images/linkedIn.png" /></a>
                    <a href="" className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#0A66C20D] hover:opacity-60"><Image width={17} height={17} alt="icon" src="/images/twitter.png" /></a>
                    <a href="" className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#0A66C20D] hover:opacity-60"><Image width={17} height={17} alt="icon" src="/images/youtube.png" /></a>
                    <a href="" className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#0A66C20D] hover:opacity-60"><Image width={17} height={17} alt="icon" src="/images/IG.png" /></a>
                    <a href=""><button className="min-w-[232px] h-[43px] bg-[#FE9B7E] text-white rounded-[5px] hover:brightness-90 transition-all delay-100 duration-100">Join Our Community</button></a>
                </div>
                <div className="flex justify-center mb-5">
                    <Link href="" className="mr-8 hover:opacity-60">JOIN MMIT</Link>
                    <Link href="" className="mr-8 hover:opacity-60">FAQ</Link>
                    <Link href="" className="mr-8 hover:opacity-60">Help center</Link>
                    <Link href="" className="mr-8 hover:opacity-60 text-[#0F88D9]">Partnerships</Link>
                </div>
                <div className="flex justify-center">
                    <Link href="" className="mr-8 hover:opacity-60">Contact us</Link>
                    <Link href="" className="mr-8 hover:opacity-60">Privacy policy</Link>
                    <Link href="" className="mr-8 hover:opacity-60">Terms of use</Link>
                    <Link href="" className="mr-8 hover:opacity-60">Sitemap</Link>
                </div>
            </section>
        </div>
        <p className="text-[rgba(0,0,0,0.73)] text-[17px] text-center">© 2023 MentorMeInTech. All rights reserved</p>
    </footer>
  )
}

export default Footer