    import { useState, useEffect } from "react";
    import Sidebar from "./Sidebar";
    import Topbar from "./Topbar";
    import { Outlet } from "react-router-dom";

    export default function Layout() {
    const [open, setOpen] = useState(false); // mobile
    const [visible, setVisible] = useState(true); // desktop
    const [pulsing, setPulsing] = useState(true);
    useEffect(() => {
        // Remove pulse class after animation ends
        const timer = setTimeout(() => setPulsing(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-screen flex flex-col bg-background-theme text-white">
        <Topbar
        className ={`${visible ? "lg:pl-64" : "lg:pl-0"}`}
        onToggle={() => setOpen((prev) => !prev)}
        pulsing={pulsing}
        setPulsing={setPulsing}
        />
        <Sidebar
            open={open}
            visible={visible}
            onToggle={() => setVisible((prev) => !prev)}
            setPulsing={setPulsing}
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
