import { useState } from "react";
import DesktopNavLinks from "./DesktopNavLinks";
import MobileNavLinks from "./MobileNavLinks";
import MobMenuBtn from "./MobileMenuButton";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between h-16">
        <MobMenuBtn open={open} setOpen={setOpen} />
        <NavLink to="/" className="text-xl font-bold">
          Alex Crabbe's Portfolio
        </NavLink>
        <div className="hidden md:flex space-x-6">
          <DesktopNavLinks />
        </div>
      </div>
      <MobileNavLinks open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
