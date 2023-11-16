import React from "react";
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
    <div>
      <div className="m-auto flex flex-col whitespace-nowrap rounded-b-[0.5rem] rounded-t-[2rem] border ">
        <div className="w-80 xss:w-96 md:w-64">
          <Image
            className="w-full rounded-md object-cover  object-center xs:h-60"
            src={image}
            width={200}
            height={200}
            quality={90}
            alt="mentor-dp"
          ></Image>
        </div>
        <div className="mt-1 flex flex-col smd:mt-1 sm:-mt-1 ">
          <p className="ml-4 text-xl font-semibold sm:mt-2">{name}</p>
          <div className="ml-14 mt-2 flex flex-col">
            <div className="-ml-10 flex flex-row items-center text-sm ">
              <BsFillClipboard2MinusFill />
              <span className="ml-2">{role}</span>
            </div>
            <div className="-ml-10 mt-2 flex flex-row items-center text-sm">
              <BsFillPersonFill />
              <span className="ml-2">
                {sessions} sessions ({reviews} reviews)
              </span>
            </div>
          </div>
        </div>
        <div className="backdrop: mt-6 flex h-16 flex-row justify-between rounded-b-lg  bg-zinc-300 bg-opacity-50 p-2 pt-[14px] text-sm">
          <div>
            <p className="text-xs font-medium text-neutral-700 text-opacity-70">
              Experience
            </p>
            <p className="text-xs font-semibold">{experience}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-700 text-opacity-70">
              Avg.Attendance
            </p>
            <p className="text-xs font-semibold text-black">{attendance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
