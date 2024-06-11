import React from "react";
import { ThreeStar } from "./common/icon";
import { MainHeading } from "./common/Heading";

const Pricing = () => {
  return (
    <div className="mt-[140px]">
      <div className="max-w-[1080px] mx-auto">
        <div className=" text-center mb-5">
          <span className="uppercase  py-[10.25px] px-[37.89px] bg-skylight text-lochmara leading-[150%] text-base font-medium font-open inline-flex gap-[10px] items-center rounded-[41px]">
            <ThreeStar /> Pricing
          </span>
        </div>
        <MainHeading
          maxwidth="max-w-[762px]"
          firstwords="Stratman AI Vs "
          lightword="other stock"
          skytext="research assistants"
        />
        <div className="flex -mx-3 flex-row flex-wrap">
          <div className="w-1/3 px-3">
            <div className=" py-[32px] px-[24px] bg-seashell shadow-research rounded-2xl">
              <h3 className=" text-3xxl  text-codgray  font-Anek font-semibold leading-[100%] pb-1 border-b border-b-Alto">
                FinChat
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
