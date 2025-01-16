"use client";
import { useRef } from "react";
import {useIsVisible} from "../../hooks/useIsVisible";
import Index from "../components/about/index";
import Description from "../components/about/description";
import Tecnologies from "../components/about/tecnologies";

export default function About() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <section ref={refAbout} className={`pt-28 mb-20 md:mb-40 2xl:mb-40 flex flex-col w-full px-10 lg:px-0 lg:pr-48 lg:w-5/6 h-auto text-white justify-center items-start opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} id='about' style={{animationDelay: ".2"}}>
            <Index isVisibleAbout={isVisibleAbout}/>
            <Description/>
            <Tecnologies/>
        </section>
    )
}