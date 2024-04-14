"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Banner = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="bg-[#f7f5ff] h-[95vh] text-black ">
      <div className="text-center  w-full h-full flex justify-center items-center relative overflow-hidden">
        <div>
          {/* <Iamge>
            height=800
            width=800
            classNAme=w-80% object cover
          </Iamge> */}
        </div>
        <div>
          <h1 className=" uppercase font-extrabold md:text-7xl text-center lg:text-[4rem] xl:text-[5.75rem] max-w-[80rem]">
            Email NewsLetter Platoform Built for
            <span className=" ml-3  text-blue-700 ">grow</span>
          </h1>
          <br />
          <h1 className=" text-2xl text-center font-bold">
            Built by newsletter people
          </h1>
          <br />
          <Link href={user ? "dashboard" : "sign-up"}>
            <Button className=" text-[17px] p-6" color="primary" radius="sm">
              Get started
            </Button>
          </Link>
          <h1 className=" mt-4">Start 30 day free trial</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
