"use client";
import projects from "../../public/projects.json";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";
import Index from "../components/work/index";
import BackImage from "../components/work/backImage";
import Tecnologies from "../components/work/tecnologies";
import Links from "../components/work/links";

export default function Work() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <section ref={refAbout} className={`pt-28 flex flex-col w-full px-10 lg:px-0 lg:pr-48 lg:w-5/6 text-white justify-center items-start opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{ animationDelay: ".2" }} id='work'>
            <Index />
            <ul className="flex flex-col w-full h-auto justify-center items-start">
                {projects.map((obj, idx) => {
                    return (
                        <li
                            className={`flex flex-row items-center justify-center w-full h-auto mb-32 relative`}
                            style={{ animationDelay: ".2" }}
                            key={idx}
                        >
                            <BackImage idx={idx} obj={obj} />
                            <a href={obj.link ? obj.link : obj.repo} target="_blank" className={`w-[90%] flex flex-col justify-center items-center mt-60 md:mt-0 mb-10 md:mb-0 ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'} ${idx % 2 === 0 ? '2xl:mr-72' : '2xl:ml-72'} z-20 max-h-96 h-auto absolute cursor-pointer transform transition duration-300 hover:-translate-y-1`}>
                                <div className="flex flex-col justify-center items-center text-base md:text-lg font-semibold text-white h-auto px-5 md:px-10 py-5 rounded-md bg-[#242424] w-full md:w-[500px]">
                                    <h1 className="flex flex-row justify-start w-full items-center text-2xl md:text-4xl text-[#2E28A0] font-bold mb-5">{obj.title}</h1>
                                    {obj.description}
                                    <Tecnologies obj={obj} />
                                    <Links idx={idx} obj={obj} />
                                </div>
                            </a>
                        </li>
                    )
                })
                }
            </ul>
        </section>
    )
}