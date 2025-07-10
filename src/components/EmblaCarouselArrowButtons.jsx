import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
export const PrevButton = (props) => {
  const { children, className = "", ...restProps } = props;

  return (
    <button
      type="button"
      className={`absolute -left-12 top-1/2 -translate-y-1/2 z-10 
        w-20 h-20 rounded-full border border-white bg-secondary/60 
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
      className={`absolute -right-12 top-1/2 -translate-y-1/2 z-10 
        w-20 h-20 rounded-full border border-white bg-secondary/60 
        text-white flex items-center justify-center transition-all hover:scale-105 hover:bg-white/80 hover:text-black ${className}`}
      {...restProps}
    >
      <FiArrowRight />
      {children}
    </button>
  );
};
