"use client";

export default function Hero() {
    return (
        <section className='flex flex-col w-1/2 h-screen text-white justify-center items-start' id='hero'>
            <p className='flex flex-row justify-start items-center w-full h-auto text-2xl font-semibold mb-5 text-left text-[#2E28A0] animate-fade-bottom-y-1 opacity-0' style={{animationDelay: ".8s"}}>Hi, my name is</p>
            <p className='flex flex-row justify-start items-center w-full h-auto text-8xl font-black mb-5 text-left animate-fade-bottom-y-2 opacity-0' style={{animationDelay: ".8s"}}>Estiven Muñoz</p>
            <p className='flex flex-row justify-start items-center w-full h-auto text-7xl font-black mb-5 text-left animate-fade-bottom-y-3 opacity-0' style={{animationDelay: ".8s"}}>I build things for the web.</p>
            <p className='flex flex-row justify-start items-center w-3/4 h-auto text-xl font-semibold mt-5 text-left leading-10 animate-fade-bottom-y-4 opacity-0' style={{animationDelay: ".8s"}}>
                I'm Estiven Muñoz, a full stack web developer with experience working in languages like JavaScript, TypeScript, C#, Python and Java. Mainly focused on back-end development, I've participated in different projects developing CRUD functionalities for web servers and creating RESTful APIs.
            </p>
        </section>
    )
}