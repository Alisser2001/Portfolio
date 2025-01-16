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
        <section ref={refAbout} className={`pt-28 flex flex-col w-full px-5 lg:px-0 lg:pr-48 lg:w-5/6 text-white justify-center items-start opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{ animationDelay: ".2" }} id='work'>
            <Index />
            <ul className="flex flex-col w-full h-auto justify-center items-start">
                {projects.map((obj, idx) => {
                    return (
                        <li
                            className={`flex flex-row items-center justify-start md:justify-center w-full h-auto mb-40 relative`}
                            style={{ animationDelay: ".2" }}
                            key={idx}
                        >
                            <BackImage idx={idx} obj={obj} />
                            <div className={`flex flex-row ${idx % 2 === 0 ? 'justify-end' : 'justify-start'} mt-52 md:mt-0 mb-10 md:mb-0 z-20 max-h-96 h-auto absolute w-full md:w-[90%] ${idx % 2 === 0 ? 'xl:pr-10 2xl:pr-40' : 'xl:pl-10 2xl:pl-40'}`}>
                                <span className={`flex flex-col justify-center ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'} text-base md:text-lg font-semibold text-white h-auto px-5 md:px-10 py-5 rounded-md bg-[#242424] w-[90%] md:w-[550px] 2xl:w-[750px]`}>
                                    <h1 className="flex flex-row justify-start w-full items-center text-2xl md:text-4xl text-[#2E28A0] font-bold mb-5">{obj.title}</h1>
                                    {obj.description}
                                    <Tecnologies obj={obj} />
                                    <Links idx={idx} obj={obj} />
                                </span>
                            </div>
                        </li>
                    )
                })
                }
            </ul>
        </section>
    )
}