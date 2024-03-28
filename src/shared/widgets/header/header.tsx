import Link from "next/link";
import React from "react";
import Logo from "./logo";
import NavItems from "./nav-items";
import ToolBar from "./toolbar";

const Header = () => {
  return (
    <div className=" w-full sticky top-0 left-0 z-[999] border-b border-b-black px-10 flex items-center justify-between h-[80px] bg-white  text-black">
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div>
        <NavItems />
      </div>
      <div className=" flex items-center gap-3">
        <ToolBar /> 
      </div>
    </div>
  );
};

export default Header;
