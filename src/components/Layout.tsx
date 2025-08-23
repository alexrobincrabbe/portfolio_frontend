import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false); // mobile
  const [visible, setVisible] = useState(true); // desktop

  return (
    <div className="h-screen flex flex-col bg-background-theme text-white">
        <Topbar onToggle={()=> setOpen((prev) => (!prev))} />
        <Sidebar
          open={open}
          visible={visible}
          onToggle={() => setVisible((prev) => !prev)}
        />
        {/* Backdrop closes the sidebar when clicking outside (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-2 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <main
        className={`
            bg-background-theme 
            min 
            flex-1 
            transition-all duration-300 ease-in-out 
            ${visible ? "lg:ml-64" : "lg:ml-0"}
            zen-loop
            `}
      >
        <Outlet />
      </main>
    </div>
  );
}
