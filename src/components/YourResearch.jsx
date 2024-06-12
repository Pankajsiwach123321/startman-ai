import React from "react";
import { MainHeading } from "./common/Heading";
import { GradientSkyButton } from "./common/Button";

const YourResearch = () => {
  return (
    <div className="px-5 mt-12 md:mt-16 lg:mt-20 xl:mt-[100px] mb-10 overflow-hidden">
      <div className="max-w-[1424px] lg:py-[100px] py-5 sm:py-[30px] px-[20px] w-full bg-cover md:bg-full bg-no-repeat rounded-2xl md:rounded-[40px] mx-auto bg-midnight bg-[url(./assets/images/webp/research-background.webp)]">
        <MainHeading
          class="max-w-[832px] text-highwhite"
          firstwords="Discover how Stratman "
          lightword="AI can supercharge"
          skytext=" your research"
        />
        <p className="text-gray font-open mb-8  text-sm md:text-base leading-[150%] text-center max-w-[625px] mx-auto mt-3">
          Stay informed and ahead of the curve with the latest trends, tips, and
          insights in video ad creation and social media marketing.{" "}
        </p>
        <GradientSkyButton
          ariallabel="getstarted"
          class="flex mx-auto"
          text="Get Started For Free"
        />
      </div>
    </div>
  );
};

export default YourResearch;
