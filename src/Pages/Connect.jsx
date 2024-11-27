import React from "react";
import maskgroup from "../assets/Mask group (1).png";
import maskgrou1 from "../assets/Mask group.png";
import maskgrou2 from "../assets/Mask group (2).png"; 
import maskgrou3 from "../assets/Mask group (3).png";


export const Connect = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {/* First Column: Text and Single Image */}
        <div className="flex flex-col justify-end items-end gap-6">
          <p className="text-[#3D155D] text-lg leading-5 "
          style={{ fontFamily: 'Hoves-reg' }}
          >
            If you’re ready to go beyond <br/> conversations ceilinged at approvals,<br/>
            feedback and deadlines, if building <br/> brands, even your own, is on
            the cards <br/> – we’d love to start a conversation.
          </p>
          <img
          width={334}
          height={409}
             src={maskgroup}
            alt="Placeholder"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Second Column: Single Image */}
        <div className="flex justify-center items-start">
        <div className="relative">
  {/* Image */}
  <img
    src={maskgrou1}
    alt="Placeholder"
    className="rounded-[10px] object-cover w-full h-full"
  />
  {/* Overlay */}
  <div
    className="absolute inset-0 rounded-[10px]"
    
  ></div>
</div>



        </div>

       {/* Third Column: Two Images and Footer */}
<div className="flex flex-col gap-6 items-start">
  {/* Two stacked images */}
  <img
    src={maskgrou2}
    width={334}
    height={215}
    alt="Placeholder"
    className="rounded-lg object-cover"
  />
  <img
    src={maskgrou3}
    width={334}
    height={215}
    alt="Placeholder"
    className="rounded-lg object-cover"
  />
  {/* Careers Text */}
  <div className="text-left">
    <p className="text-[#3D155D] text-lg font-medium">WRITE TO</p>
    <a
      href="mailto:careers@howl.in"
      className="text-[#3D155D] font-extrabold text-xl hover:underline"
      style={{ fontFamily: 'Hovesbold' }}
    >
      CAREERS@HOWL.IN
    </a>
  </div>
</div>

      </div>
    </div>
  );
};
