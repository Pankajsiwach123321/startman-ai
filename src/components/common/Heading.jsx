export const MainHeading = ({ firstwords, lightword, skytext, cutomClass }) => {
  return (
    <h2
      className={`font-Anek mx-auto text-center font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-5xxl text-codgray !leading-[120%] ${cutomClass}`}
    >
      {firstwords}
      <span className="font-extralight">{lightword}</span>
      <span className="text-lochmara max-sm:block">{skytext}</span>
    </h2>
  );
};
