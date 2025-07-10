import Navigation from "./Navigation";
import Button from "./Button";
import img from "../assets/kitty-unscreen.gif";
const Navbar = () => {
  return (
    <nav className="sticky text-secondary flex justify-between p-6 items-center">
      <div className="text-body text-left ">
        <img src={img} className="w-[120px] h-[100px]"></img>
      </div>
      <div className="">
        <div className=" text-[16px] flex gap-10 items-center text-xl font-body text-textColor ">
          <Navigation />
        </div>
      </div>
      <div className="font-medium italic font-body">
        <a
          href="https://www.behance.net/taisia_pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button label="Design Credit" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
