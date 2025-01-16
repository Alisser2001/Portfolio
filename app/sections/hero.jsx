"use client";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";
import Title from "../components/hero/title";
import Description from "../components/hero/description";

export default function Hero() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <section ref={refAbout} className={`mb-20 md:mb-40 mt-40 md:mt-52 2xl:mt-72 2xl:mb-40 flex flex-col w-full px-10 lg:px-0 lg:w-5/6 h-auto text-white justify-center items-start opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} id='hero'>
            <Title/>
            <Description/>
        </section>
    )
}