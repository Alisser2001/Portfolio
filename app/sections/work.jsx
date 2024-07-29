"use client";
import projects from "../../projects.json";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";

export default function Work() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    return (
        <section ref={refAbout} className={`flex flex-col w-full px-20 md:px-0 md:w-1/2 min-h-screen h-auto justify-center items-start text-white pt-40 opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{ animationDelay: ".2" }} id='work'>
            <div className='flex flex-row w-full h-auto justify-end items-center md:px-10 mb-32'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl w-1/2 md:w-1/3 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>02.</span> My Work</h1>
                <div className='h-1 w-1/2 md:w-2/3 bg-[#2E28A0] ml-5'></div>
            </div>
            <ul className="flex flex-col w-full h-auto justify-center items-start">
                {projects.map((obj, idx) => {
                    return (
                        <li
                            className={`flex flex-row justify-${idx % 2 === 0 ? 'end' : 'start'} items-center w-full h-auto mb-40 relative`}
                            style={{ animationDelay: ".2" }}
                            key={idx}
                        >
                            <a className={`flex justify-${idx % 2 === 0 ? 'start' : 'end'} items-center rounded-md w-auto h-auto bg-[#2E28A0] absolute z-10`}
                                style={{ [idx % 2 === 0 ? 'right' : 'left']: "400px" }}
                                href={obj.link ? obj.link : obj.repo} target="_blank">
                                <img src={obj.img} alt="project"
                                    className="rounded-md opacity-60 cursor-pointer transition duration-300 hover:opacity-100"
                                    style={{ width: "550px", height: "350px" }} />
                            </a>
                            <section className={`w-1/2 flex flex-col justify-center items-${idx % 2 === 0 ? 'end' : 'start'} z-20 max-h-96 h-auto`}>
                                <h1 className="flex flex-row justify-center items-center text-4xl text-[#2E28A0] font-bold mb-5">{obj.title}</h1>
                                <p className="flex flex-row justify-center items-center text-lg font-semibold text-white w-full h-auto px-10 py-5 rounded-md bg-[#242424] mb-5">{obj.description}</p>
                                <ul className={`flex flex-row justify-${idx % 2 === 0 ? 'end' : 'start'} items-center w-1/3 h-auto`}>
                                    {obj.techs.map((tec, idx) => {
                                        return (
                                            <li className='flex flex-row w-48 mr-5 h-8 justify-start items-center text-sm font-bold' key={idx+1000}>
                                                <span className='mr-2 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>{tec}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <section className={`flex flex-row justify-${idx % 2 === 0 ? 'end' : 'start'} items-center w-1/3 h-auto px-3`}>
                                    {obj.repo && <a className={`flex flex-row justify-center items-center w-auto h-auto mt-3 ${obj.link ? "mr-5" : ""}`} href={obj.repo} target="_blank">
                                        <img src="/code.png" alt="github code"
                                            className="h-10 w-10 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
                                    </a>}
                                    {obj.link && <a className="flex flex-row justify-center items-center w-auto h-auto mt-3" href={obj.link} target="_blank">
                                        <img src="/redirect.png" alt="view page"
                                            className="h-10 w-10 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
                                    </a>}
                                </section>
                            </section>
                        </li>
                    )
                })
                }
            </ul>
        </section>
    )
}