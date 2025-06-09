import { navLinks } from "../../../constants/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav(): void;
  navBg: boolean;
};

const MobileNav = ({ closeNav, showNav, navBg }: Props) => {
  const NavOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  const linkColor = navBg ? "text-white" : "text-black";
  const hoverColor = navBg ? "hover:text-yellow-400" : "hover:text-blue-500";

  return (
    <div className={`fixed inset-0 z-[1000] ${showNav ? "block" : "hidden"}`}>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-70" onClick={closeNav}></div>

      {/* Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white 
                    flex flex-col justify-center space-y-6 z-[10000] p-8
                    transform transition-transform duration-300 ${NavOpen}`}
      >
        {/* Close Icon */}
        <CgClose
          onClick={closeNav}
          className={`absolute top-6 right-6 w-6 h-6 sm:w-8 sm:h-8 cursor-pointer transition duration-300 ${
            navBg ? "text-white hover:text-yellow-400" : "text-black hover:text-blue-500"
          }`}
        />

        {/* Navigation Links */}
        <div className="flex flex-col space-y-6">
          {navLinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url} className="group">
              <p
                className={`relative text-[22px] sm:text-[28px] font-medium ml-6 pb-2 border-b border-transparent transition-all duration-300 ease-in-out ${linkColor} ${hoverColor}`}
              >
                {navlink.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
