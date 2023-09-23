import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "reactstrap";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Singupconfirm from "../components/signupconfirm";

const Mentorregister = () => {
  const [formstep, setFormstep] = useState(0);
  // Listens to form state in real time
  const { watch, register, control } = useForm();

  const submitForm = () => {
    window.alert(JSON.stringify(watch(), null, 2));
    completeForm();
  };

  const backForm = () => {
    setFormstep(formstep - 1);
  };

  const completeForm = () => {
    setFormstep(formstep + 1);
  };

  useEffect(() => {
    const progressbar = document.querySelector(".progress-bar__fill");
    const main = document.querySelector(".main");
    if (progressbar) {
      if (formstep === 0) {
        progressbar.style.width = "0%";
      } else if (formstep === 1) {
        progressbar.style.width = "50%";
      } else if (formstep === 2) {
        progressbar.style.width = "100%";
        main.style.display = "none";
      }
    }
  }, [formstep]);

  return (
    <>
      <div className="main flex h-screen flex-row items-center justify-between bg-gray-100">
        <div className="relative flex flex-col items-center space-y-4">
          <div className="progress-bar relative -left-[30%]">
            <p className="flex text-sm font-semibold">Step {formstep} of 2</p>
            <div className="progress-bar__container flex h-1 w-32 flex-row bg-white">
              <div className="progress-bar__fill transition-width w-[50%] bg-black duration-300 ease-in-out"></div>
            </div>
          </div>
          <div className="my-auto flex flex-col">
            <div>
              <Image
                width={59}
                height={62}
                src="/images/mmitlogo.png"
                alt="MMIT Logo"
                className="absolute left-[66px] top-20 h-[62px] w-[59px]"
              />
            </div>
            <div>
              <Image
                src="/images/registerImg.png"
                alt="Registration Image"
                width={609}
                height={500}
              />
            </div>
            <div className="absolute left-[66px] top-[162px] w-[400px] text-left">
              <h1 className="text-[32px] font-bold  text-[#FE9B7E]">
                Mentee <span className="text-[white]">&</span> Experienced
                Professionals
              </h1>
            </div>
            <Image
              src="/images/login.png"
              alt="Login Image"
              width={1000}
              height={80}
              className="absolute left-[66px] top-[314px] w-80"
            />
          </div>
        </div>
        <div className="relative mr-[99px]">
          {formstep === 0 && (
            <div className="absolute inset-0 -left-[29rem] flex items-center justify-center transition duration-300 ease-in-out">
              <div className="relative">
                <p className="mb-[1rem] ml-[2rem] text-xl font-medium">
                  Tell us about yourself
                </p>
                <div
                  id="form1"
                  className="flex w-[500px] flex-col items-center space-y-4 rounded-md border"
                >
                  <form className=" ml-[-7rem] w-96 p-6">
                    <div className="mb-4 flex flex-col items-center justify-start">
                      <p className="mb-[3rem] ml-[-11rem]">
                        Upload profile photo
                      </p>
                      <div
                        className="flex
						flex-row items-center"
                      >
                        <label className="mt-[-2rem] flex h-[100px] w-[100px] cursor-pointer flex-row items-center justify-center rounded-full bg-gray-300">
                          <Controller
                            name="file"
                            control={control}
                            render={({ field }) => (
                              <Input
                                className="hidden"
                                {...field}
                                type="file"
                                id="file"
                              />
                            )}
                          />
                          <Image
                            src="/images/icons/upload.svg"
                            alt="Upload Icon"
                            width={20}
                            height={20}
                          />
                        </label>

                        <p className="ml-2">Make sure it is below 2mb</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p>Full Name</p>
                      <input
                        type="text"
                        {...register("fullName", { required: true })}
                        className="w-full rounded  border bg-transparent px-3 py-2 outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="gender" className="mb-2 block">
                        Gender:
                      </label>
                      <select
                        id="gender"
                        className="w-full rounded border  bg-transparent px-3 py-2 outline-none"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer_not_to_say">
                          Prefer Not to Say
                        </option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <p>Which country do you live in?</p>
                      <input
                        type="text"
                        name="country"
                        {...register("country", { required: true })}
                        className="w-full rounded border  bg-transparent px-3 py-2 outline-none"
                      />
                    </div>
                    <div className="mb-4">
                      <p>Company / School</p>
                      <input
                        type="text"
                        name="company"
                        {...register("Company/School", { required: true })}
                        className="w-full rounded  border  bg-transparent px-3 py-2 outline-none"
                      />
                    </div>
                  </form>
                </div>
                <div>
                  <button
                    id="next1"
                    type="submit"
                    onClick={completeForm}
                    className="relative top-[rem] mt-[1rem] inline-flex h-9 w-28 items-center justify-center rounded bg-white px-5 py-3 shadow"
                  >
                    <div className="text-base font-semibold text-black">
                      Continue
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
          {formstep === 1 && (
            <div className="absolute inset-0 -left-[29rem] -top-[4.3rem] flex flex-col items-center justify-center transition duration-300 ease-in-out">
              <div
                id="form2"
                className="flex  w-[500px] flex-col   items-center space-y-4 rounded-md border"
              >
                <form className=" ml-[-7rem] w-96 p-6">
                  <div className="mb-4 flex flex-col items-center justify-start">
                    <p className="ml-[-7.5rem]">
                      Years of professional experience
                    </p>
                    <input
                      type="text"
                      name="experience"
                      {...register("experience", { required: true })}
                      className="w-full rounded  border  bg-transparent px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <p>LinkedIn URL Label</p>
                    <input
                      type="text"
                      name="linkedin url"
                      {...register("linkedIn", { required: true })}
                      className="w-full rounded  border  bg-transparent px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <p>Twitter(Optional)</p>
                    <input
                      type="text"
                      name="twitter url"
                      {...register("twitter", { required: true })}
                      className="w-full rounded  border  bg-transparent px-3 py-2 outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <p>Bio</p>
                    <textarea
                      type="text"
                      name="bio"
                      {...register("Bio", { required: true })}
                      placeholder="I am John Doe a Front-End Developer
Experienced front-end developer skilled in HTML, CSS, and JavaScript. Proficient in responsive design and modern frameworks like React and Angular."
                      className="h-40 w-full  rounded  border bg-transparent px-3
                   py-2 outline-none"
                    />
                  </div>
                </form>
              </div>
              <div className="-ml-16 flex flex-row justify-evenly">
                <button
                  id="back1"
                  onClick={backForm}
                  className="mt-[1rem] inline-flex h-9 w-28 items-center rounded bg-white px-5 py-3 shadow"
                >
                  <div className="flex items-center text-base font-semibold text-black">
                    <FaArrowLeft />
                    <p className="ml-3">Back</p>
                  </div>
                </button>
                <button
                  onClick={submitForm}
                  id="next2"
                  type="submit"
                  className="ml-12 mt-[1rem] inline-flex h-9 w-28 items-center rounded bg-white px-5 py-3 shadow"
                >
                  <div className="text-base font-semibold text-black">
                    Continue
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {formstep === 2 && <Singupconfirm />}
    </>
  );
};

export default Mentorregister;
