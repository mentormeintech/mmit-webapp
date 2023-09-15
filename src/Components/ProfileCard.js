import Image from "next/image";
import { BsFillPersonFill, BsFillClipboard2MinusFill } from "react-icons/bs";

const ProfileCard = ({
  name,
  role,
  sessions,
  reviews,
  experience,
  attendance,
  image,
}) => {
  return (
    <div className=" ml-6 mt-28 flex h-[435px] w-72 flex-col justify-center whitespace-nowrap rounded-b-[30rem] rounded-t-full border">
      <div className="h-56">
        <Image
          className="rounded-t-lg"
          src="/images/profileImage1.png"
          width={1000}
          height={236}
          alt="mentor-dp"
        />
      </div>
      <div className="mt-10 flex flex-col items-center">
        <p className="-ml-20 text-xl font-semibold">{mentor.name}</p>
        <div className="mt-2 flex flex-col">
          <div className=" -ml-10 flex flex-row items-center text-sm ">
            <BsFillClipboard2MinusFill />
            <span className="ml-2">{mentor.role}</span>
          </div>
          <div className="-ml-10 mt-2 flex flex-row items-center text-sm">
            <BsFillPersonFill />
            <span className="ml-2">
              {sessions} sessions ({reviews} reviews)
            </span>
          </div>
        </div>
      </div>
      <div className="backdrop: mt-6 flex h-16 flex-row justify-between rounded bg-zinc-300 bg-opacity-50 p-2 pt-[14px] text-sm">
        <div>
          <p className="text-xs font-medium text-neutral-700 text-opacity-70">
            Experience
          </p>
          <p className="font-semibold">{mentor.experience}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-neutral-700 text-opacity-70">
            Avg.Attendance
          </p>
          <p className="text-xs font-semibold text-black">
            {mentor.attendance}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
