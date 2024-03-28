import { ICONS } from "@/shared/utils/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen flex text-center justify-center items-center">
      <div>
        <h5>Congratulation you subscribed successfully!</h5>
        <br />
        <Link href={"/"}>
          <Button color="primary">{ICONS.backArrow}Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
