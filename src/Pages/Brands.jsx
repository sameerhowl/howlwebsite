// import React, { useEffect, useRef } from "react";
// import HRX from "../assets/hrx-image.png";
// import Amex from "../assets/amex.png";
// import Schindler from "../assets/schindler.png";
// import HRXMobile from "../assets/hrx-mobile.png";
// import AmexMobile from "../assets/amex-mobile.png";
// import SchindluMobile from "../assets/schindler-mobile.png";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const Brands = () => {
//   // Refs for desktop images
//   const desktopImagesRef = useRef([]);
  
//   // Ref for the desktop container
//   const desktopContainerRef = useRef(null);
  
//   // Refs for mobile sections (if you plan to have background changes on mobile)
//   const mobileContainerRef = useRef(null);

//   // Define background colors
//   const desktopBackgroundColors = ["#FFFFFF", "#3D155D","#FFFFFF"]; // Example colors

//   useEffect(() => {
//     // Desktop Animations
//     if (desktopImagesRef.current.length) {
//       desktopImagesRef.current.forEach((img, index) => {
//         if (img) {
//           // Image width animation
//           const tl = gsap.timeline({
//             scrollTrigger: {
//               trigger: img,
//               start: "top 70%",
//               end: "bottom 20%",
//               scrub: true,
//             },
//           });

//           tl.fromTo(
//             img,
//             { width: "85%" },
//             {
//               width: "100%",
//               ease: "none",
//             }
//           ).to(img, {
//             width: "85%",
//             ease: "none",
//           });

//           // Background color animation
//           gsap.to(desktopContainerRef.current, {
//             backgroundColor: desktopBackgroundColors[index],
//             scrollTrigger: {
//               trigger: img,
//               start: "top center",
//               end: "bottom center",
//               scrub: true,
//             },
//           });
//         }
//       });
//     }
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [desktopBackgroundColors]);

//   return (
//     <>
//       {/* Horizontal Scroll for Desktop */}
//       <div className="hidden min-[1025px]:block bg-[#3D155D]" ref={desktopContainerRef} style={{ transition: "background-color 0.5s ease" }}>
//         <section className="relative w-max overflow-hidden">
//           {[
//             {
//               src: HRX,
//               label: "Building a ₹1,000 Crore brand with Instagram DMs",
//             },
//             {
//               src: Amex,
//               label: "Retaining 85% of customers with an email campaign",
//             },
//             {
//               src: Schindler,
//               label: "Selling elevators online for 1/75th the lead cost",
//             },
//           ].map((brand, index) => (
//             <div
//               key={index}
//               className="brand-section relative w-screen h-full brands"
//             >
//               <img
//                 src={brand.src}
//                 alt={brand.label}
//                 // Assign refs to each image
//                 ref={(el) => (desktopImagesRef.current[index] = el)}
//                 className="mx-auto object-cover rounded-2xl sm:mt-10 xl:mt-20"
//                 // Initial width set to 85%
//                 style={{ width: "85%" }}
//               />
//               <div className="absolute bottom-0 w-full h-full text-white">
//                 <div className="flex flex-col justify-end h-full py-2">
//                   <p className="reg uppercase mx-auto text-center sm:text-xl xl:text-3xl sm:w-7/12 xl:w-1/2">
//                     {brand.label}
//                   </p>
//                   <button className="backdrop-blur-sm backdrop-filter bg-white bg-opacity-20 flex mx-auto px-7 py-3 light rounded-tl-lg rounded-br-lg mb-6 xl:mb-14 mt-7 text-sm hover:bg-white hover:text-[#3D155D] transition-colors">
//                     View Case Study
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>
//       </div>

//       {/* Vertical Scroll for Mobile */}
//       <div className="min-[1025px]:hidden grid grid-cols-1 w-full sm:gap-y-10 sm:gap-x-8 sm:py-20 sm:w-10/12 sm:mx-auto sm:px-5">
//         {[
//           {
//             src: AmexMobile,
//             label: "Retaining 85% of customers with an email campaign",
//           },
//           {
//             src: HRXMobile,
//             label: "Building a ₹1,000 Crore brand with Instagram DMs",
//           },
//           {
//             src: SchindluMobile,
//             label: "Selling elevators online for 1/75th the lead cost",
//           },
//         ].map((brand, index) => (
//           <div key={index} className="relative group">
//             <img
//               src={brand.src}
//               alt={brand.label}
//               className="w-full object-cover sm:rounded-lg"
//             />
//             <div className="absolute bottom-0 w-full h-full text-white">
//               <div className="flex flex-col justify-end h-full py-2">
//                 <p className="reg uppercase mx-auto text-center text-xl w-10/12">
//                   {brand.label}
//                 </p>
//                 <button className="backdrop-blur-sm backdrop-filter bg-white bg-opacity-20 flex mx-auto px-7 py-3 light rounded-tl-lg rounded-br-lg mb-10 mt-7 text-sm">
//                   View Case Study
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };


// added code 


import React from "react";
// import HRX from "../assets/hrx-image.png";
import HRX from "../assets/hrx-new-brands-img.png";
// import Amex from "../assets/amex.png";
import Amex from "../assets/amex-new-brands-img.png";
// import Schindler from "../assets/schindler.png";
import Schindler from "../assets/schindler-new-brands-img.png";

// import HRXLogo from "../assets/hrx-image.png";// Logo for the first card
import HRXLogo from "../assets/hrx logo 1.png"; // Logo for the first card
import AmexLogo from "../assets/am ex white logo 1.png"; // Logo for the second card
import SchindlerLogo from "../assets/white logo-02 1.png"; // Logo for the third card



export const Brands = () => {
  return (
    <div className="bg-[#0A001F] min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-16 py-10">
        {/* Card 1 */}
        <div
          className="rounded-xl border-[3px] border-[#3D155D] shadow-lg p-4"
          style={{ width: "334px", height: "694px" }}
        >
          {/* Main Image */}
          <img
            src={HRX}
            alt="HRX"
            className="mx-auto"
            style={{ width: "297.4px", height: "390px" }}
          />
          {/* Logo Image */}
          <img
            src={HRXLogo}
            alt="HRX Logo"
            className="mx-auto mt-8"
            // style={{ width: "35px", height: "40.3px" }}
          />
          {/* Content */}
          <div className="text-center mt-4">
            <h3 className="text-[#FCF5FF] text-center text-sm font-bold mb-2" 
             style={{ fontFamily: 'Hovesbold' }}
            >
              Creating A 1,000 Crore <br/> Brand Through DMs
            </h3>
            <p className="text-[#FCF5FF] text-xs mb-4" 
             style={{ fontFamily: 'Hoves-light' }}
            >
              Building offline communities, ideating product lines, defining
              go-to-market strategies to use social media to inspire a billion
              Indians to be the best version of themselves.
            </p>
            {/* Button */}
            <button className="text-[#FCF5FF] text-sm hover:underline"
            style={{ fontFamily: 'Hoves-light' }}
            >
              View Case Study
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-xl border-[3px] border-[#3D155D] shadow-lg p-4"
          style={{ width: "334px", height: "694px" }}
        >
          {/* Main Image */}
          <img
            src={Schindler}
            alt="Schindler"
            className="mx-auto"
            style={{ width: "297.4px", height: "390px" }}
          />
          {/* Logo Image */}
          <img
            src={SchindlerLogo}
            alt="Schindler Logo"
            className="mx-auto mt-4"
            // style={{ width: "35px", height: "40.3px" }}
          />
          {/* Content */}
          <div className="text-center mt-4">
            <h3 className="text-[#FCF5FF] text-center text-sm mb-2"
            style={{ fontFamily: 'Hovesbold' }}
            >
              Building Ad Funnels That <br/> Sold Elevators Online
            </h3>
            <p className="text-[#FCF5FF] text-xs mb-4"
            style={{ fontFamily: 'Hoves-light' }}
            >
              Building offline communities, ideating product lines, defining
              go-to-market strategies to use social media to inspire a billion
              Indians to be the best version of themselves.
            </p>
            {/* Button */}
            <button className="text-[#FCF5FF] text-sm hover:underline"
            style={{ fontFamily: 'Hoves-light' }}
            >
              View Case Study
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="rounded-xl border-[3px] border-[#3D155D] shadow-lg p-4"
          style={{ width: "334px", height: "694px" }}
        >
          {/* Main Image */}
          <img
            src={Amex}
            alt="American Express"
            className="mx-auto"
            style={{ width: "297.4px", height: "390px" }}
          />
          {/* Logo Image */}
          <img
            src={AmexLogo}
            alt="American Express Logo"
            className="mx-auto mt-10"
            // style={{ width: "35px", height: "40.3px" }}
          />
          {/* Content */}
          <div className="text-center mt-4">
            <h3 className="text-[#FCF5FF] text-center text-sm mb-2"
            style={{ fontFamily: 'Hovesbold' }}
            >
              Curating Communication To <br/> Retain The Indian Market
            </h3>
            <p className="text-[#FCF5FF] text-xs mb-4"
            style={{ fontFamily: 'Hoves-light' }}
            >
              Building offline communities, ideating product lines, defining
              go-to-market strategies to use social media to inspire a billion
              Indians to be the best version of themselves.
            </p>
            {/* Button */}
            <button className="text-[#FCF5FF] text-sm hover:underline"
            style={{ fontFamily: 'Hoves-light' }}
            >
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

