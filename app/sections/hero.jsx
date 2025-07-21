"use client";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";
import Title from "../components/hero/title";
import Description from "../components/hero/description";

export default function Hero() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <section ref={refAbout} className={`flex flex-col w-full min-h-screen text-white justify-center items-center opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} id='hero'>
            <Title/>
            <Description/>
        </section>
    )
}