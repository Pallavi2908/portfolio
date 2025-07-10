const SocialBtn = ({ label, icon: Icon, className = "", ...props }) => {
  return (
    <button
      className={`flex gap-2 items-center rounded-full px-5 py-3  text-secondary bg-primary border-tertiary border-1  transition-colors duration-300 hover:bg-tertiary hover:text-body ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 transition-transform duration-300 " />}
      <span className="italic">{label}</span>
    </button>
  );
};

export default SocialBtn;
