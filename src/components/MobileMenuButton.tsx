import { HiMenu, HiX } from "react-icons/hi";
import type { Dispatch, SetStateAction } from "react";

interface MobMenuBtnProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}


export default function MobMenuBtn({open, setOpen}:MobMenuBtnProps){
    return(
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
    )
}