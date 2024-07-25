"use client";
import { useRef } from "react";
import {useIsVisible} from "../../hooks/useIsVisible";

export default function About() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <section ref={refAbout} className={`flex flex-col w-1/2 h-screen justify-center items-start text-white opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} id='about' style={{animationDelay: ".2"}}>
            <div className={`flex flex-row w-full h-auto justify-end items-center px-10 mb-32  ${isVisibleAbout ? 'animate-fade-bottom-y-1' : ''}`}>
                <div className='h-1 w-2/3 bg-[#2E28A0] mr-5'></div>
                <h1 className='font-bold text-4xl w-1/3 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>01.</span> About Me</h1>
            </div>
            <div className='flex flex-row w-full h-auto justify-between items-center'>
                <p className='flex flex-col justify-start items-center w-1/2 h-auto leading-8 text-lg font-medium'>I'm Estiven Muñoz, a full stack web developer with experience working in languages like JavaScript, TypeScript, C#, Python and Java. Mainly focused on back-end development, I've participated in different projects developing CRUD functionalities for web servers and creating RESTful APIs. <br /><br /> I'm Estiven Muñoz, a full stack web developer with experience working in languages like JavaScript, TypeScript, C#, Python and Java. Mainly focused on back-end development, I've participated in different projects developing CRUD functionalities for web servers and creating RESTful APIs.</p>
                <img src='/perfil.png' alt="profile" className='w-96 h-96 rounded-full' />
            </div>
            <ul className='flex flex-row flex-wrap w-full h-auto mt-5 justify-between items-center'>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Javascript</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Typescript</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Python</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Java</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>ReactJs</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Tailwind</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>CSS</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>NextJs</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>ViteJs</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Redux</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>NodeJs</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Express</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>NestJs</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>TypeORM</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>SpringBoot</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>SpringDataJDBC</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Sequelize</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>FastAPI</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Git</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>MySQL</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>PosgreSQL</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>SQLServer</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>MongoDB</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>GCP</li>
                <li className='flex flex-row w-40 h-8 justify-start items-center text-base font-bold'><span className='mr-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>AWS (S3, EC2)</li>
            </ul>
        </section>
    )
}