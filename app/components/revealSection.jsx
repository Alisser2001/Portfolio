"use client";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";

export default function RevealSection({ id, spacing = "mt-20", children }) {
    const ref = useRef();
    const isVisible = useIsVisible(ref);
    return (
        <section ref={ref} id={id} className={`flex flex-col w-full min-h-screen text-white justify-center items-center opacity-0 ${spacing} ${isVisible ? "animate-fade-bottom-y-4" : ""}`}>
            {children}
        </section>
    )
}
