import { useState } from "react";
import Navigation from "./Navigation";
import Button from "./Button";
import img from "../assets/kitty-unscreen.gif";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <>
      {/* Overlay menu for mobile */}
      {openMenu && (
        <div className="fixed inset-0 font-heading tracking-wide bg-black/80 bg-opacity-90 z-50 flex flex-col justify-center items-center gap-6 text-white text-2xl">
          <Navigation closeMenu={handleLinkClick} />

          <a
            href="https://www.behance.net/taisia_pro"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            <Button label="Design Credit" />
          </a>
        </div>
      )}

      {/* Navbar */}
      <nav className="flex sticky bg-primary shadow-sm shadow-red-100/10 top-0 z-40 text-secondary justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 items-center ">
        <div className="text-body text-left">
          <img src={img} className="w-[120px] h-[100px]" />
        </div>

        <div className="hidden md:flex gap-10 items-center text-xl font-body text-textColor">
          <Navigation />
        </div>

        <div className="hidden md:block font-medium italic font-body">
          <a
            href="https://www.behance.net/taisia_pro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button label="Design Credit" />
          </a>
        </div>

        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <GiHamburgerMenu color="white" />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
