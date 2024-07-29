"use client";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";

export default function Hero() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <section ref={refAbout} className={`pt-24 flex flex-col w-full px-20 md:px-0 md:w-1/2 min-h-screen h-auto text-white justify-center items-start opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} id='hero'>
            <p className='flex flex-row justify-start items-center w-full h-auto text-xl md:text-2xl font-semibold mb-5 text-left text-[#2E28A0] animate-fade-bottom-y-1 opacity-0' style={{ animationDelay: ".8s" }}>Hi, my name is</p>
            <p className='flex flex-row justify-start items-center w-full h-auto text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-5 text-left animate-fade-bottom-y-2 opacity-0' style={{ animationDelay: ".8s" }}>Estiven Muñoz</p>
            <p className='flex flex-row justify-start items-center w-full h-auto text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black xl:mb-5 text-left animate-fade-bottom-y-3 opacity-0' style={{ animationDelay: ".8s" }}>I build things for the web.</p>
            <p className='flex flex-row justify-start items-center w-full lg:w-3/4 h-auto text-lg md:text-xl font-semibold mt-5 text-left leading-8 md:leading-10 animate-fade-bottom-y-4 opacity-0' style={{ animationDelay: ".8s" }}>
                I am Estiven Muñoz, a full stack web developer with experience working in languages like JavaScript, TypeScript, C#, Python and Java. Mainly focused on back-end development, I have participated in different projects developing CRUD functionalities for web servers and creating RESTful APIs.
            </p>
            <div className="w-full h-auto flex flex-row justify-start items-center animate-fade-bottom-y-5 opacity-0 mt-6" style={{ animationDelay: ".8s" }}>
                <a href="https://alidev-certificates.vercel.app/" target="_blank" className="bg-[#161616] z-30 cursor-pointer flex justify-center items-center w-40 h-12 rounded-lg border-2 border-[#2E28A0] font-bold text-xl text-white transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                    Certificates
                </a>
                <div className="w-40 h-12 bg-[#2E28A0] z-0 rounded-lg absolute mr-40"></div>
            </div>
        </section>
    )
}