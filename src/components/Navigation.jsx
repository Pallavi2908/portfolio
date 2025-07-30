import { Link } from "react-router-dom";

const navLinks = [
  { id: 1, to: "/", label: "Home" },
  // { id: 2, to: "/projects", label: "Projects" },
  { id: 2, to: "/resume", label: "Resume" },
  { id: 3, to: "/contact", label: "Contact" },
];

function Navigation({ closeMenu }) {
  return (
    <>
      {navLinks.map((elem) => {
        return (
          <Link
            key={elem.id}
            to={elem.to}
            onClick={closeMenu}
            className="group transition duration-300 hover:text-white"
          >
            {elem.label} {/* Render link label */}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </Link>
        );
      })}
    </>
  );
}

export default Navigation;
