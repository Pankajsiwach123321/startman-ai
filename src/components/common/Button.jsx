export const GradientSkyButton = (props) => {
  return (
    <button className=" leading-[150%] font-open text-base font-normal text-highwhite py-[11px] px-[25px] relative z-[1] after:pointer-events-none overflow-hidden hover:after:opacity-0 after:duration-300 border border-transparent hover:border-white duration-300 after:absolute after:inset-0 after:z-[-1] after:bg-skylightgradiant rounded-[48px]">
      {props.text}
    </button>
  );
};
