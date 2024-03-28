import Image from "next/image";
import React from "react";
import logoImage from "../../../../public/logo2.png";

const Logo = () => {
  return (
    <div>
      <Image src={logoImage} height={150} width={150} alt=""></Image>
    </div>
  );
};

export default Logo;
