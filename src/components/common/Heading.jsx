export const MainHeading = (props) => {
  return (
    <h2
      className={`font-Anek mx-auto text-center font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-5xxl text-codgray !leading-[120%] ${props.class}`}
    >
      {props.firstwords}
      <span className="font-extralight">{props.lightword}</span>
      <span className="text-lochmara max-sm:block">{props.skytext}</span>
    </h2>
  );
};
