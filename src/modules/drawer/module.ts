import { ReactNode } from "react";
import { createPortal } from "react-dom";

export const portalToDrawer = (children: ReactNode) => {
    const drawer = document.querySelector("#drawer")
    if (!drawer) return
    return createPortal(children, drawer)
}
