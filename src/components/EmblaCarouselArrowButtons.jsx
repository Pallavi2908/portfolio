import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
export const PrevButton = (props) => {
  const { children, className = "", ...restProps } = props;

  return (
    <button
      type="button"
      className={` relative left-12 md:absolute md:-left-12 md:top-1/2 md:-translate-y-1/2 z-10 
        w-20  h-20 rounded-full border border-white bg-secondary/60 
        text-white flex items-center justify-center transition-all hover:scale-105 hover:bg-white/80 hover:text-black ${className}`}
      {...restProps}
    >
      <FiArrowLeft />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, className = "", ...restProps } = props;

  return (
    <button
      type="button"
      className={`relative -right-20 md:absolute md:-right-12 md:top-1/2 md:-translate-y-1/2 z-10 
        w-20 h-20 rounded-full border border-white bg-secondary/60 
        text-white flex items-center justify-center transition-all hover:scale-105 hover:bg-white/80 hover:text-black ${className}`}
      {...restProps}
    >
      <FiArrowRight />
      {children}
    </button>
  );
};
