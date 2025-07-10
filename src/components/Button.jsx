const Button = ({ label, onClick, className = "", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full py-2 px-6 bg-body text-tertiary transition-colors duration-300 hover:bg-tertiary hover:text-body ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
