import Link from "next/link";
import React from "react";
import Logo from "../header/logo";
import { Button } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="w-full   pt-10">
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%]">
          <Link href={"/"}>
            <Logo />
          </Link>
          <p className="text-2xl py-2">
            Get our updates delivered directly to your inbox.
          </p>
          <div className="flex items-center w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="bg-transparent rounded-md shadow shadow-slate-500 w-full md:w-[50%] border h-[42px] px-2   outline-none"
            />
            <Button color="primary" radius="sm" className=" ml-4 py-4">Submit</Button>
          </div>
          <br />
          <p className="text-xs">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
        <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
          <div className="md:w-[50%] flex justify-around">
            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer">Create</li>
                <li className="text-xl pb-4 cursor-pointer">Write</li>
                <li className="text-xl pb-4 cursor-pointer">Grow</li>
                <li className="text-xl pb-4 cursor-pointer">Monitize</li>
                <li className="text-xl pb-4 cursor-pointer">Analayze</li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="text-xl pb-4 cursor-pointer">Carrers</li>
                <li className="text-xl pb-4 cursor-pointer">Pricing</li>
                <li className="text-xl pb-4 cursor-pointer">Shop</li>
                <li className="text-xl pb-4 cursor-pointer">Compare</li>
                <li className="text-xl pb-4 cursor-pointer">Love</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg text-center pb-10">
        © 2024 NextMailer, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
