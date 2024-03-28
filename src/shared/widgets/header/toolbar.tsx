"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ToolBar = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <>
      <Button color="primary" className="  text-md">
        Start Trial
      </Button>
      {user ? (
        <Link href={"/dashboard"}>
          <Image
            src={user?.imageUrl}
            alt=""
            height={40}
            width={40}
            className=" rounded-full"
          ></Image>
        </Link>
      ) : (
        <Link href={"/sign-up"}>SignIn</Link>
      )}
    </>
  );
};

export default ToolBar;
