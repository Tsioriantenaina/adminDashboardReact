import { useState } from "react";

export const  useModalState = () => {
    const [open, setOpen] = useState(false);

    const handleCreatClick = () => {
        setOpen(true);
        document.body.style.overflow = "hidden"
        document.body.classList.add("no-scroll");
    }

    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = "unset"
        document.body.classList.remove("no-scroll");
    }

    return {
        open,
        handleCreatClick,
        handleClose
    }
}