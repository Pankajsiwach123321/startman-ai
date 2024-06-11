export const MainHeading = (props) => {
  return (
    <h2 className={`font-Anek mx-auto  text-center font-semibold text-5xxl text-codgray !leading-[120%] ${props.maxwidth}`}>
      {props.firstwords}
      <span className="font-extralight">{props.lightword}</span>{" "}
      <span className="text-lochmara">{props.skytext}</span>
    </h2>
  );
};
