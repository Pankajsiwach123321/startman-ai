export const GradientSkyButton = (props) => {
  return (
      <button
          aria-label={props.ariallabel}
      className={`!leading-[150%] font-open text-base font-normal text-highwhite py-[11px] px-[25.5px] relative z-[1] after:pointer-events-none overflow-hidden after:duration-300 border border-transparent hover:border-white duration-300 after:absolute after:inset-0 after:z-[-1] after:origin-left hover:after:scale-x-0 after:scale-x-100 after:bg-skylightgradiant rounded-[48px] ${props.class}`}
    >
      {props.text}
    </button>
  );
};
