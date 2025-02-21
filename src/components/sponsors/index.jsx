import React from "react";
import { Hubot_Sans } from "next/font/google"; // imported font from google
const hubotSans = Hubot_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // font implementation included all desired weights
});
import Image from "next/image";
import logoHi from "./images/Group-H-lockup-black.svg";
import yalidine from "./images/IMG_1540 1.png";
import ourquilane from "./images/IMG_1541 (1) 1 (1).png";

const Sponsors = () => {
  return (
    <section className=" text-Monotone-White p-[24px] pt-[35px] md:p-[80px] lg:p-[100px] flex justify-center items-center flex-col gap-12 lg:gap-20">
      <h2
        className={` ${hubotSans.className} font-semibold capitalize  text-3xl md:text-4xl lg:text-5xl leading-[56px]`}
      >
        sponsored by
      </h2>
      <div className="  flex md:flex-row  flex-col gap-16 items-center">
  
      <a href="https://www.itexcgroup.com">
 <Image
          src={logoHi} // sponsors images
          alt="BDL-img"
          width={200}
          height={100}
        />
 </a>
 <a href="https://yalidine.com">
 <Image
          src={ourquilane} // sponsors images
          alt="ourquilane-img"
          width={200}
          height={100}
        />
 </a>
 <a href="https://www.itexcgroup.com">
  <Image
          src={yalidine} // sponsors images
          alt="yalidine-img"
          width={200}
          height={42.43}
        />
       </a>

      </div>
    </section>
  );
};

export default Sponsors;
