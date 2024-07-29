"use client";
import { useRef } from "react";
import {useIsVisible} from "../../hooks/useIsVisible";
import { useState } from "react";

export default function Experience() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    const [actualJob, setActualJob] = useState("tbg");
    const handleActualJob = (e) => {
        e.preventDefault();
        let newActualJob = e.target.getAttribute("value");
        setActualJob(newActualJob);
    }
    return (
        <section ref={refAbout} className={`flex flex-col w-1/2 min-h-screen h-auto justify-center items-start text-white opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{animationDelay: ".2"}} id='experience'>
            <div className='flex flex-row w-full h-auto justify-end items-center px-10 mb-32'>
                <div className='h-1 w-1/2 bg-[#2E28A0] ml-5'></div>
                <h1 className='font-bold text-4xl w-1/2 flex justify-center items-center'><span className='text-[#2E28A0] mr-5'>03.</span> Where I’ve Worked</h1>
            </div>
            <div className="flex flex-row justify-between items-start w-full h-auto">
                <ul className="flex flex-col justify-center items-center h-auto border-l-2 border-l-[#2E28A0]" style={{width: "30%"}}>
                    <li value="tbg" onClick={(e) => handleActualJob(e)} className={`flex flex-row w-full h-auto py-3 px-5 font-bold text-lg cursor-pointer hover:bg-[#2E28A0] hover:bg-opacity-30 ${actualJob === "tbg" ? "border-l-4 border-l-[#2E28A0] text-[#2E28A0]" : ""}`}>TripBoysGang</li>
                    <li value="siu" onClick={(e) => handleActualJob(e)} className={`flex flex-row w-full h-auto py-3 px-5 font-bold text-lg cursor-pointer hover:bg-[#2E28A0] hover:bg-opacity-30 ${actualJob === "siu" ? "border-l-4 border-l-[#2E28A0] text-[#2E28A0]" : ""}`}>SIU</li>
                    <li value="inverjara" onClick={(e) => handleActualJob(e)} className={`flex flex-row w-full h-auto py-3 px-5 font-bold text-lg cursor-pointer hover:bg-[#2E28A0] hover:bg-opacity-30 ${actualJob === "inverjara" ? "border-l-4 border-l-[#2E28A0] text-[#2E28A0]" : ""}`}>InverJara</li>
                    <li value="sena" onClick={(e) => handleActualJob(e)} className={`flex flex-row w-full h-auto py-3 px-5 font-bold text-lg cursor-pointer hover:bg-[#2E28A0] hover:bg-opacity-30 ${actualJob === "sena" ? "border-l-4 border-l-[#2E28A0] text-[#2E28A0]" : ""}`}>SENA</li>
                    <li value="66" onClick={(e) => handleActualJob(e)} className={`flex flex-row w-full h-auto py-3 px-5 font-bold text-lg cursor-pointer hover:bg-[#2E28A0] hover:bg-opacity-30 ${actualJob === "66" ? "border-l-4 border-l-[#2E28A0] text-[#2E28A0]" : ""}`}>Technical Service 66</li>
                </ul>
                <section className="flex flex-col justify-center items-center h-auto" style={{width: "65%"}}>
                    {actualJob === "tbg" &&
                        <div className="flex flex-col justify-center items-center w-full h-auto animate-fade-1 opacity-0">
                            <h1 className="w-full flex flex-row justify-start items-center text-4xl font-bold h-auto mb-3">Fullstack Developer</h1>
                            <h1 className="w-full flex flex-row justify-start items-center text-2xl font-bold h-auto mb-3"><span className="text-[#2E28A0]">@</span> TripBoysGang</h1>
                            <h2 className="w-full flex flex-row justify-start items-center text-xl font-bold h-auto text-[#2E28A0] mb-8">January 2024 - Currently</h2>
                            <ul className="flex flex-col w-full h-auto text-lg font-semibold">
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more
                                </li>
                            </ul>
                        </div>}
                    {actualJob === "siu" &&
                        <div className="flex flex-col justify-center items-center w-full h-auto animate-fade-1 opacity-0">
                            <h1 className="w-full flex flex-row justify-start items-center text-4xl font-bold h-auto mb-3">Programming and technical support assistant</h1>
                            <h1 className="w-full flex flex-row justify-start items-center text-2xl font-bold h-auto mb-3"><span className="text-[#2E28A0]">@</span> SIU</h1>
                            <h2 className="w-full flex flex-row justify-start items-center text-xl font-bold h-auto text-[#2E28A0] mb-8">June 2024 - Currently</h2>
                            <ul className="flex flex-col w-full h-auto text-lg font-semibold">
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more
                                </li>
                            </ul>
                        </div>}
                    {actualJob === "inverjara" &&
                        <div className="flex flex-col justify-center items-center w-full h-auto animate-fade-1 opacity-0">
                            <h1 className="w-full flex flex-row justify-start items-center text-4xl font-bold h-auto mb-3">Fullstack Developer</h1>
                            <h1 className="w-full flex flex-row justify-start items-center text-2xl font-bold h-auto mb-3"><span className="text-[#2E28A0]">@</span> InverJara</h1>
                            <h2 className="w-full flex flex-row justify-start items-center text-xl font-semibold h-auto text-[#2E28A0] mb-8">January 2024 - June 2024</h2>
                            <ul className="flex flex-col w-full h-auto text-lg font-semibold">
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more
                                </li>
                            </ul>
                        </div>}
                    {actualJob === "sena" &&
                        <div className="flex flex-col justify-center items-center w-full h-auto animate-fade-1 opacity-0">
                            <h1 className="w-full flex flex-row justify-start items-center text-4xl font-bold h-auto mb-3">Systems Technician</h1>
                            <h1 className="w-full flex flex-row justify-start items-center text-2xl font-bold h-auto mb-3"><span className="text-[#2E28A0]">@</span> SENA</h1>
                            <h2 className="w-full flex flex-row justify-start items-center text-xl font-bold h-auto text-[#2E28A0] mb-8">January 2020 - June 2020</h2>
                            <ul className="flex flex-col w-full h-auto text-lg font-semibold">
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more
                                </li>
                            </ul>
                        </div>}
                    {actualJob == "66" &&
                        <div className="flex flex-col justify-center items-center w-full h-auto animate-fade-1 opacity-0">
                            <h1 className="w-full flex flex-row justify-start items-center text-4xl font-bold h-auto mb-3">Mobile device repair and customer service</h1>
                            <h1 className="w-full flex flex-row justify-start items-center text-2xl font-bold h-auto mb-3"><span className="text-[#2E28A0]">@</span> Technical Service 66</h1>
                            <h2 className="w-full flex flex-row justify-start items-center text-xl font-bold h-auto text-[#2E28A0] mb-8">July 2023 - December 2023</h2>
                            <ul className="flex flex-col w-full h-auto text-lg font-semibold">
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.
                                </li>
                                <li className='flex flex-row w-full h-auto justify-start items-start text-xl font-bold mb-8'>
                                    <span className='mr-3 mt-3 border-l-[8px] border-l-[#2E28A0] border-y-[4px] border-y-transparent border-solid'></span>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more
                                </li>
                            </ul>
                        </div>}
                </section>
            </div>
        </section>
    )
}