import React from "react";
import { ThreeStar } from "./common/icon";
import { MainHeading } from "./common/Heading";
import { pricingPlans } from "./common/helper";

const Pricing = () => {
  return (
    <div className="mt-12 md:mt-16 lg:mt-20 xl:mt-[140px]">
      <div className="max-w-[1080px] px-5 md:px-3 mx-auto">
        <div className="text-center mb-5">
          <span className="uppercase py-[10.25px] px-[37.89px] bg-skylight text-lochmara leading-[150%] text-base font-medium font-open inline-flex gap-[10px] items-center rounded-[41px]">
            <ThreeStar /> Pricing
          </span>
        </div>
        <MainHeading
          class="max-w-[762px]"
          firstwords="Stratman AI Vs "
          lightword="other stock"
          skytext=" research assistants"
        />
        <div className="flex mt-[36px] justify-center -mx-3 flex-row flex-wrap">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className=" w-full xsm:w-10/12 sm:w-6/12 lg:w-4/12  pt-6 px-3"
            >
              <div className="py-[30px] px-[24px] bg-seashell after:absolute relative z-[1] overflow-hidden after:duration-300 after:pointer-events-none after:opacity-0 hover:after:opacity-100 after:z-[-1] after:inset-0 after:bg-skydarkgradiant group shadow-research hover:shadow-hoverresearch border-[2px] border-transparent hover:border-highwhite rounded-2xl">
                <h4 className="lg:text-3xxl md:text-3xl text-xl group-hover:text-highwhite duration-300 text-codgray  font-Anek font-semibold leading-[100%] pb-1 border-b border-b-alto group-hover:border-b-curiousblue">
                  {plan.name}
                </h4>
                <ul className="mt-5 sm:mt-6 xl:mt-10">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-center gap-2 pt-5 ${
                        index === 0 && "!pt-0"
                      }`}
                    >
                      {feature.icon}
                      <p className="text-emperor group-hover:text-highwhite duration-300 text-sm md:text-base font-open leading-[150%]">
                        {feature.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
