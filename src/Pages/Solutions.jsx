// import React from "react";
// import TrueBlue from "../assets/trueblue.png";
// import APD from "../assets/apd-image.png";
// import Gluta from "../assets/gluta.png";
// import Baggit from "../assets/baggit.png";
// import DBS from "../assets/dbs-image.png";
// import Purple from "../assets/purple.png";
// import NYC from "../assets/nyc-image.png";
// import Sachin from "../assets/sachin.png";
// import Amazon from "../assets/amazon.png";
// import Schindler from "../assets/schindler.png";
// import HRX from "../assets/hrx-image.png";
// import Amex from "../assets/amex.png";

// const imageData = [
//   { src: Sachin, title: "38% Uptick in Positive Brand Sentiment"},
//   { src: HRX, title: "HRX", },
//   { src: APD, title: "APD"},
//   { src: Baggit, title: "Baggit"},
//   { src: Gluta, title: "Gluta"},
//   { src: Schindler, title: "Schindler"},
//   { src: Purple, title: "Purple"},
//   { src: NYC, title: "NYC" },
//   { src: Amex, title: "Amex"},
//   { src: DBS, title: "DBS"},
//   { src: TrueBlue, title: "TrueBlue" },
//   { src: Amazon, title: "Amazon"},
// ];

// export const Solutions = () => {
//   return (
//     <div className="bg-white w-full py-14 sm:py-0 sm:pt-20">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-center items-center w-10/12 mx-auto gap-y-8 gap-x-8">
//         <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-8xl font-bold text-[#3D155D] overflow-hidden">
//           SOLUTION
//         </h1>
//         <p className="text-base reg text-[#00031A] w-10/12 sm:w-8/12 lg:w-5/12">
//           From young entrepreneurs to multinational business units, HOWL is
//           designed to create business impact. Consistently achieved by a system
//           with a clear priority.
//         </p>
//       </div>

//       {/* Subheader and Button Section */}
//       <div className="flex flex-col sm:flex-row justify-center items-center w-10/12 mx-auto gap-y-8 gap-x-8">
//         <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-8xl font-bold text-[#3D155D] text-center overflow-hidden">
//           OVER SCOPE
//         </h1>
//         <button className="border-2 light w-1/3 text-[#3D155D] py-4 rounded-tl-xl rounded-br-xl border-[#3D155D] hover:bg-[#3D155D] hover:text-white transition-colors">
//           View Our Portfolio
//         </button>
//       </div>

//       {/* Image Grid */}
//       <div className="grid sm:grid-cols-2 mt-10 sm:mt-16 bg-black">
//         {imageData.map((image, index) => (
//           <div key={index} className="relative group overflow-hidden">
//             {/* Image */}
//             <img
//               src={image.src}
//               alt={image.title}
//               className="w-full h-full object-cover m-0 p-0 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-[#00031A] bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 ease-in-out"></div>

//             {/* Text and Button Container */}
//             <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//               <div className="text-white text-left min-[1025px]:mb-10 min-[1025px]:ml-10">
//                 <h2 className="text-sm sm:text-sm min-[1025px]:text-2xl reg uppercase">{image.title}</h2>
//                 <button className="light mt-2 min-[1025px]:mt-4 text-xs min-[1025px]:text-sm">
//                   View Case Study
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// added code 


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images
import TrueBlue from "../assets/trueblue.png";
import APD from "../assets/apd-image.png";
import Gluta from "../assets/gluta.png";
import Baggit from "../assets/baggit.png";
import DBS from "../assets/dbs-image.png";
import Purple from "../assets/purple.png";
import NYC from "../assets/nyc-image.png";
import Sachin from "../assets/sachin.png";
import Amazon from "../assets/amazon.png";
import Schindler from "../assets/schindler.png";
import HRX from "../assets/hrx-image.png";
import Amex from "../assets/amex.png";
import bseBackground from "../assets/bsebasebuidling.png";
import bselogo from "../assets/BSE SM Logo_White 1.png";
import asianbg from "../assets/asianpbg.png";
import asianlogo from "../assets/asian paints white 1.png";
import baggitbg from "../assets/baggitbg.png";
import baggitlogo from "../assets/baggit 2.png";
import amazonmusicbg from "../assets/amazonmusicbg.png";
import Amplogo from "../assets/APM logo 1.png";
import abbottbg from "../assets/abbotttbg.png";
import abbottlogo from "../assets/abbott white logo 1.png";
import soapbg from "../assets/soapbg.png";
import flohlogo from "../assets/floh white 1.png";
import aqabg from "../assets/aqabg.png";
import aquatein from "../assets/aquatein white 1.png";
import niyobg from "../assets/niyobg.png";
import niyologo from "../assets/niyo global 1 (1).png";
import zydusbg from "../assets/zydusbg.png";
import zyduslogo from "../assets/zydus white 1.png";

const imageData = [
  {
    background: bseBackground, // Background image for this slide
    logo: bselogo, // Logo for this slide
    title: "BANKING & FINANCE",
    description: "Sachin achieved a remarkable 38% uptick in positive brand sentiment through innovative strategies.",
  },
  {
    background: asianbg, // Background image for this slide
    logo: asianlogo , // Logo for this slide
    title: "CONSTRUCTION & ENGINEERING",
    description: "Digitally converting an otherwise unattainable audience pool in the U.A.E.",
  },
  {
    background: baggitbg,
    logo: baggitlogo,
    title: "FASHION & LIFESTYLE",
    description: "Taking a homegrown brand from trendy to trending, generating 10x website revenue in a year.",
  },
  {
    background: amazonmusicbg,
    logo: Amplogo,
    title: "ENTERTAINMENT",
    description: "Social Listening to generate more organic impressions in a week than Amazon did in a year.",
  },
  {
    background: abbottbg,
    logo: abbottlogo,
    title: "HEALTHCARE & WELLNESS",
    description: "Launching a flagship product by turning content creators into brand custodians.",
  },
  {
    background: soapbg ,
    logo: flohlogo,
    title: "HEALTHCARE & WELLNESS",
    description: "Taking a go to market strategy beyond awareness & sales to turn taboo into customers.",
  },
  {
    background: aqabg,
    logo: aquatein,
    title: "HEALTHCARE & WELLNESS",
    description: "Launching India’s first protein water & seeing the brand through an acquisition",
  },
  {
    background: niyobg,
    logo: niyologo,
    title: "BANKING & FINANCE",
    description: "An ambitious production effort to create infinite content, inspired to take Indians global.",
  },
  {
    background: zydusbg ,
    logo: zyduslogo,
    title: "HEALTHCARE & WELLNESS",
    description: "Packing innovation to re-invent the cough syrup experience for children and adults alike.",
  },
  
];

export const Solutions = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, // Disable navigation arrows
    dotsClass: "slick-dots custom-dots", // Custom class for dots
  };

  return (
    <div className="bg-white h-5/6 w-full">
      {/* Top Section */}
      <div className="bg-white h-5/6 py-14  sm:py-0 sm:pt-20">
        <div className="flex flex-col sm:flex-row justify-center items-center w-10/12 mx-auto gap-y-8 gap-x-8">
          <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-8xl font-bold text-[#3D155D] overflow-hidden">
            SOLUTION
          </h1>
          <p className="text-base reg text-[#00031A] w-10/12 sm:w-8/12 lg:w-5/12">
            From young entrepreneurs to multinational business units, HOWL is
            designed to create business impact. Consistently achieved by a
            system with a clear priority.
          </p>
        </div>

        {/* Subheader and Button Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center w-10/12 mx-auto gap-y-8 gap-x-8 mt-6">
          <h1 className="uppercase bold text-2xl sm:text-5xl lg:text-8xl font-bold text-[#3D155D] text-center overflow-hidden">
            OVER SCOPE
          </h1>
          <button className="border-2 light w-1/3 text-[#3D155D] py-4 rounded-tl-xl rounded-br-xl border-[#3D155D] hover:bg-[#3D155D] hover:text-white transition-colors">
            View Our Portfolio
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full h-screen">
        <Slider {...settings} className="w-full h-screen">
          {imageData.map((image, index) => (
            <div key={index} className="relative w-full h-screen">
              {/* Dynamic Background Image */}
              <div
                className="w-full h-screen bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image.background})`,
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Dynamic Content */}
              <div className="absolute bottom-10 left-10 text-white">
                {/* Dynamic Logo */}
                <img
                  src={image.logo}
                  alt={`${image.title} Logo`}
                  className="w-16 h-16 mb-4"
                />
                <h2
                  className="uppercase"
                  style={{
                    fontFamily: "Hovesbold",
                    fontSize: "12px",
                  }}
                >
                  {image.title}
                </h2>
                <p
  className="mt-2 text-lg sm:text-xl truncate-lines"
  style={{
    fontFamily: "Hoves-reg",
    fontSize: "14px",
    display: "-webkit-box",
    WebkitLineClamp: 2, // Limit to 2 lines
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }}
>
  {image.description}
</p>

              </div>

              {/* View Case Study Button */}
              <button className="absolute bottom-10 right-10 border-2 light text-[#ffffff] mt-4 sm:mt-7 px-10 py-4 rounded-tl-xl rounded-br-xl border-[#ffffff] hover:bg-[#3D155D] hover:text-white transition-colors">
                View Case Study
              </button>
            </div>
          ))}
        </Slider>

        {/* Custom Styling for Dots */}
        <style jsx>{`
          .custom-dots {
            position: absolute;
            bottom: 20px; /* Adjusted position to reduce space */
            display: flex !important;
            justify-content: center;
          }

          .custom-dots li {
            margin: 0 6px; /* Adjusted space between dots */
          }

          .custom-dots li button {
            width: 10px;
            height: 10px;
            background: gray;
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }

          .custom-dots li button:before {
            display: none; /* Remove the default black dots */
          }

          .custom-dots li.slick-active button {
            background: white; /* Active dot color */
          }

          /* Truncate description to 2 lines */
          .truncate-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

          }
        `}</style>
      </div>
    </div>
  );
};

export default Solutions;















