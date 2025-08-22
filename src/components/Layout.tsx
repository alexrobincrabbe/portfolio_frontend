import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false); // mobile
  const [visible, setVisible] = useState(true); // desktop

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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
        className={`flex-1 transition-all duration-300 ease-in-out ${
          visible ? "xl:ml-64" : "xl:ml-0"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
