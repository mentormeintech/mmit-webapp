import Header from "../Components/Header"
import MentorSide from "@/Components/MentorSide";
import { CurrentMentor } from "@/Components/CurrentMentor";
import MentorMain from "@/Components/MentorMain";

const page = () => {

  const Mentor = CurrentMentor
  return (
    <>
      <Header />
      <div className="flex">
        <MentorSide Mentor={Mentor}/>
        <MentorMain Mentor={Mentor}/>
      </div>
    </>
  )
}

export default page