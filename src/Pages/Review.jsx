// import React, { useState } from "react";
// import placeHolder from "../assets/placeholder-image.png";

// export const Review = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const reviews = [
//     "Howl's strategies solidified Niyo's position online. Work with them because it’s worth it. It’s important to trust the marketing team that you’re working with. They’re trustworthy, can provide advice, and deliver results; they’re absolutely worth it",
//     "Great quality and service. Highly recommended!",
//     "Exceeded my expectations. Worth every penny!",
//     "Fantastic product. I'll definitely purchase again.",
//     "Quick delivery and excellent customer support!",
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="w-full py-20">
//         <div className="h-96 flex justify-center items-center flex-col">
//         <div className="text-white w-10/12 lg:w-1/2 mx-auto">
//         <p className="text-white text-center reg italic text-lg sm:text-2xl mb-6">{reviews[currentIndex]}</p>
//         <p className="text-center reg text-white mt-14">Apurva Harwani</p>
//         <p className="light uppercase text-center text-xs mt-2">senior marketing manager | niyo solutions</p>
//         </div>
//         <div className="flex justify-center items-center space-x-2 mt-4">
//           {reviews.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-3 w-3 mt-6 border border-[#3D155D] rounded-full ${
//                 index === currentIndex ? "bg-[#3D155D]" : "bg-transparent"
//               }`}
//             />
//           ))}
//         </div>
//         </div>
//         <img className="mx-auto px-8 xl:px-0 mt-10" src={placeHolder}/>
//       </div>
//   );
// };


// added code 


import React, { useState, useEffect } from "react";

// import schinderlogo from "../assets/Schindlerwhite.png";
import mahindralogo from "../assets/mahindra blues white 1.png";
import niyologo from "../assets/niyo global 1.png";
import hrxlogo from "../assets/hrx logo 2.png";
import schildersvg from "../assets/schinlder.svg";

export const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      text: "HOWL focuses on problem-solving from a business driven lens which makes them a reliable growth partner. This level of engagement and understanding has truly set them apart in our journey together.”",
      author: "Hiral Soni",
      designation: "Marketing Manager | Schindler",
      logo: schildersvg,
    },
    {
      text: "It's always good to work with a team that seamlessly becomes an extension to your own, and HOWL was exactly that for us.”",
      author: "Meghana Bhogle",
      designation: "Brand Solutions | OranJuice Entertainment",
      logo: mahindralogo,
    },
    {
      text: "HOWL has been pivotal in helping us solidify Niyo Global’s position as a leading financial product for travellers. It’s incredibly exciting to work with a partner that’s dependable and equally enthusiastic about the product as the brand.”",
      author: "Apurva Harwani",
      designation: "Sr. Marketing Manager | Niyo Solutions Inc.",
      logo: niyologo,
    },
    {
      text: "“HOWL has collectively shaped my brand and paved the way for setting the brand tone, activating the community while high engagement and reach driven ideas were an effortless by-product.”",
      author: "Pallavi Barman",
      designation: "Chief Strategic Advisor | HRX",
      logo: hrxlogo,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-20">
      <div className="h-86 flex justify-center items-center flex-col">
        <div className="text-white w-10/12 lg:w-1/2 mx-auto">
          <p className="text-white text-center reg italic text-lg sm:text-2xl mb-6">
            {reviews[currentIndex].text}
          </p>
          <p className="text-center reg text-white mt-14">
            {reviews[currentIndex].author}
          </p>
          <p className="light uppercase text-center text-xs mt-2">
            {reviews[currentIndex].designation}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 mt-10 space-x-4">
        {reviews.map((review, index) => (
          <img
            key={index}
            src={review.logo}
            alt={`Logo ${index + 1}`}
            className={`transition-all  w-10 h-10 sm:w-auto sm:h-auto duration-300 ${
              index === currentIndex ? "brightness-300" : "brightness-50" 
              
            }`}
            style={{
              // height: index === currentIndex ? "60px" : "50px", // Adjust height dynamically
              // width: index === currentIndex ? "auto" : "auto", // Maintain aspect ratio
              filter: index === currentIndex ? "brightness(200%)" : "brightness(50%)",

            }}
          />
        ))}
      </div>
    </div>
  );
};




