// components/Hero.js
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react"; // Adjust the path as necessary
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Helper function to split text into individual words wrapped in spans.
 * @param {string} text - The text to split.
 * @returns {JSX.Element[]} - An array of span elements.
 */
const splitWords = (text) => {
  return text.split(" ").map((word, index) => (
    <span key={index} className="word inline-block mr-2">
      {word}
    </span>
  ));
};

export const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Select all words within the hero section
      const words = gsap.utils.toArray(".hero .word");
      const superscriptWords = gsap.utils.toArray(".hero sup .word");

      // Animate words
      gsap.fromTo(
        words,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [heroRef]);

  return (
    <div
      className="hero flex flex-col items-center justify-center px-10 py-5 lg:pt-[5%]"
      ref={heroRef}
    >
      {/* Desktop View */}
      <div className="relative hidden sm:block text-white leading-none">
        <h1
          data-scroll
          data-scroll-speed=".2"
          className="text-[4vw] reg overflow-hidden"
        >
          {splitWords("TURNING")}
        </h1>
        <h1
          data-scroll
          data-scroll-speed=".2"
          className="text-[7vw] bold overflow-hidden"
        >
          {splitWords("MOONSHOTS")}
        </h1>
        <h1
          data-scroll
          data-scroll-speed=".2"
          className="text-[7vw] bold overflow-hidden"
        >
          <sup className="text-[4vw] reg overflow-hidden">
            {splitWords("INTO")}
          </sup>{" "}
          {splitWords("BENCHMARKS")}
        </h1>
        <p
          data-scroll
          data-scroll-speed="0.3"
          className="leading-5 light mt-4 text-right"
        >
          Impressions & engagement are a means to an end.<br/> Digital vanity metrics
          A metric quickly becoming<br/> turning into a vanity signal we know how to
          achieve,<br/> but more importantly, turn into paying customers.
        </p>
      </div>

      {/* Mobile View */}
      <div className="relative block sm:hidden text-white leading-none">
        <h1 className="text-[8vw] reg">{splitWords("TURNING")}</h1>
        <h1 className="text-[11vw] bold">{splitWords("MOONSHOTS")}</h1>
        <h1 className="text-[8vw] reg">{splitWords("INTO")}</h1>
        <h1 className="text-[11vw] bold">{splitWords("BENCHMARKS")}</h1>
        <p className="absolute right-0 leading-5 light mt-6 text-[3vw]">
          Impressions & engagement are a means to an end. Digital vanity metrics
          A metric quickly becoming turning into a vanity signal we know how to
          achieve, but more importantly, turn into paying customers.
        </p>
      </div>
    </div>
  );
};
