import Header from "../Components/Header"
import MentorSide from "@/Components/MentorSide";
import { CurrentMentor } from "@/Components/CurrentMentor";
import Image from "next/image"
import { AiOutlineCheckSquare } from "react-icons/ai";
import Header_Signin from "@/Components/Header_Signin";
// import MentorMain from "@/Components/MentorMain";

const page = () => {
  let arr = []
  const Mentor = CurrentMentor

  for(let i = 1; i <= Mentor.rating; i++){
    arr.push(1)
  }

  let remainder = 5 - Mentor.rating

  let rem = []

  for(let i = 1; i <= remainder; i++){
    rem.push(1)
  }

  return (
    <>
      <Header_Signin />
      <div className="flex">
        <MentorSide Mentor={Mentor}/>
        <section className="w-full mt-36 py-8 px-5">
          <div className="w-[600px] mb-6">
            <h1 className="text-[24px] font-[600] mb-9">WELCOME {Mentor.name}</h1>
            <p className="mb-7">{Mentor.experience}</p>
            <p className="mb-7">{Mentor.about}</p>

            <div className="w-fit">
              <div className="flex items-center">
                <div className="text-[24px] text-[#3A3A3A] font-[600] mr-3">Ratings:</div>
                <div className="flex items-center">
                  {
                    arr.map((x, index) => {
                      return <Image src="/images/icons/star-fill.png" alt="" width={40} height={40} key={index}/>
                    })
                  }
                  {
                    rem.map((x, index) => {
                      return <Image src="/images/icons/star-light.png" alt="" width={40} height={40} key={index}/>
                    })
                  }
                </div>
                <div className="ml-3">{Mentor.rating}/5</div>
              </div>

              <p  className="text-center mt-1">(15 reviews)</p>
            </div>
          </div>

          <div className="flex border w-fit p-2 bg-[#F3F3F3]">
            <div className="flex items-center mr-9">
                <span className="mr-2 text-[#303030]"><AiOutlineCheckSquare /></span>
                <p className="mr-4">Completed Sessions</p>
                <span className="bg-[#F89878] rounded-md w-9 h-8 text-white flex items-center justify-center">10</span>
            </div>

            <div className="flex items-center mr-9">
                <span className="mr-2 text-[#303030]"><AiOutlineCheckSquare /></span>
                <p className="mr-4">Completed Sessions</p>
                <span className="bg-[#F89878] rounded-md w-9 h-8 text-white flex items-center justify-center">10</span>
            </div>

            <div className="flex items-center">
                <span className="mr-2 text-[#303030]"><AiOutlineCheckSquare /></span>
                <p className="mr-4">Completed Sessions</p>
                <span className="bg-[#F89878] rounded-md w-9 h-8 text-white flex items-center justify-center">10</span>
            </div>

          </div>


          <div className="flex">
            <div>
              <h1 className="text-[36px] font-[600]">Community Statistics</h1>
              <h5 className="text-[20px] font-[500]">Top areas of impact</h5>
              <h6>Topics to be discussed during sessions</h6>
            </div>
                {/*  */}
            <div>
              <div className="flex">
                <button className="border border-[#434343] w-[190px] h-[37px] rounded-[5px]">General mentorship</button>
                <button className="border border-[#434343] w-[190px] h-[37px] rounded-[5px]">Design career path</button>
              </div>
              <div className="flex">
                <button className="border border-[#434343] w-[190px] h-[37px] rounded-[5px]">Ux meaning</button>
                <button className="border border-[#434343] w-[190px] h-[37px] rounded-[5px]">Interaction design</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page