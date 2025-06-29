import { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileNavLinks from "./MobileNavLinks";
import MobMenuBtn from "./MobileMenuButton";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md fixed w-full z-10">
      <div className=" text-white bg-blue-300 mx-auto px-4 flex items-center justify-between md:justify-start h-16">
        <MobMenuBtn open={open} setOpen={setOpen} />
        <NavLink to="/" className="md:text-4xl font-bold">
          Alex Crabbe's Portfolio
        </NavLink>
        <div className="mr-20 ml-20 grow-1 mx-auto hidden md:flex justify-between space-x-6">
          <DesktopNavLinks />
        </div>
      </div>
      <MobileNavLinks open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
