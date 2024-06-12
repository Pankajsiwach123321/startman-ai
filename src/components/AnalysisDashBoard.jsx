import React from "react";
import yellowChat from "../assets/images/webp/yellow-chart.webp";
import greenChat from "../assets/images/webp/green-chart.webp";
import revenueChat from "../assets/images/webp/revenue-chart.webp";
import { GradientSkyButton } from "./common/Button";
const AnalysisDashBoard = () => {
  return (
    <div className="px-5 mt-12 md:mt-16 lg:mt-20 xl:mt-[100px]">
      <div className=" max-w-[1424px] xl:py-[100px] py-4 sm:py-[30px] px-4 sm:px-[30px] bg-cover  md:bg-full bg-no-repeat rounded-2xl md:rounded-[40px] mx-auto bg-midnight  bg-[url(./assets/images/webp/start-ai-background.webp)]">
        <div className=" flex flex-wrap -mx-3 justify-center items-center flex-row">
          <div className=" md:w-1/2 lg:w-7/12 flex flex-col lg:items-center w-full px-3">
            <div className=" flex lg:flex-row flex-col items-center md:items-start lg:items-center gap-3 xl:gap-[15px]">
              <img
                src={yellowChat}
                alt="yellowChat"
                className="w-full h-full max-h-[356px] duration-300 lsg:max-h-[372px] max-w-[380px] md:max-w-full xl:max-w-[367.96px] rounded-xl shadow-graphshadow"
              />
              <div className="lg:block w-full justify-center md:justify-between flex flex-row gap-2  sm:gap-[15px]">
                <img
                  src={greenChat}
                  alt="greenChat"
                  className="rounded-xl h-full duration-300 shadow-graphshadow w-[50%] sm:w-full lg:max-h-[178px] max-h-[125px] max-w-[183px]"
                />
                <img
                  src={revenueChat}
                  alt="revenueChat"
                  className="rounded-xl h-full duration-300 lg:mt-3 xl:mt-[15px] shadow-graphshadow w-[50%] sm:w-full lg:max-h-[178px] max-h-[125px] max-w-[183px]"
                />
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 lg:w-5/12 mt-6 md:mt-0 text-center md:text-start w-full px-3">
            <div className="xxl:pl-2">
              <p className="uppercase text-highwhite font-normal text-base !leading-[150%] font-open ">
                Dashboard
              </p>
              <h2 className="font-Anek font-semibold text-3xl lg:text-4xl xl:text-5xl !leading-[120%] text-highwhite mt-4">
                Analysis Dashboard
              </h2>
              <p className="font-open font-normal mb-6 sm:mb-8 mt-2 sm:mt-4 text-sm md:text-base mx-auto md:mx-0 !leading-[150%] max-w-[396px] xl:max-w-[446px] text-towergray">
                This section is designed to view custom charts with access to
                nearly 100 metrics for a given stock ticker. Just type in the
                ticker you'd like to see, and select up to 3 metrics to view the
                charts, with historical data up to 30 years. Great way to gain
                fast insights about a stock.
              </p>
              <GradientSkyButton text="Start Chatting Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDashBoard;
