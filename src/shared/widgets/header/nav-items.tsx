import { navItems } from "@/app/configs/constants";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <div className=" w-full hidden md:flex items-center">
      {navItems?.map((item: NavItems, i: number) => {
        return (
          <Link key={i} href="/" className=" px-5 text-lg">
            {item?.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
