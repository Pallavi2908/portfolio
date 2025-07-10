export const DotButton = ({ children, ...restProps }) => {
  return (
    <button
      type="button"
      {...restProps}
      className="rounded-full w-3 h-3 bg-gray-400 hover:bg-gray-600 transition-colors duration-300"
    >
      {children}
    </button>
  );
};
