"use client";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";
import { useState } from "react";
import experience from "../../public/experience.json";
import Index from "../components/experiencie/index";
import Options from "../components/experiencie/options";
import Description from "../components/experiencie/description";

export default function Experience() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    const [actualJob, setActualJob] = useState("InverJara");
    const handleActualJob = (e) => {
        e.preventDefault();
        let newActualJob = e.target.getAttribute("value");
        setActualJob(newActualJob);
    }
    return (
        <section ref={refAbout} className={`flex flex-col w-full px-5 pt-8 lg:pt-0 lg:px-0 lg:w-5/6 min-h-screen text-white justify-center items-center opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{ animationDelay: ".2" }} id='experience'>
            <Index/>
            <div className="flex flex-col md:flex-row justify-between items-start w-full h-auto">
                <Options experience={experience} handleActualJob={handleActualJob} actualJob={actualJob}/>
                <section className="flex flex-col justify-center items-center h-auto w-full md:w-[65%]">
                    {experience.map((obj, idx) => {
                        if (actualJob === obj.company) {
                            return (
                                <Description idx={idx} obj={obj}/>
                            )
                        }
                    })}
                </section>
            </div>
        </section>
    )
}