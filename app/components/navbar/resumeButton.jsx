'use client';

export default function ResumeButton() {
    return (
        <div className="w-1/2 lg:w-1/4 h-full flex flex-row justify-end items-center animate-fade-up-5 pr-5">
            <a href="/CV.pdf" target="_blank" className="absolute ml-32 bg-[#161616] z-30 cursor-pointer flex justify-center items-center w-32 h-12 rounded-lg border-2 border-[#2E28A0] font-bold text-xl text-white transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                Resume
            </a>
            <div className="w-32 h-12 bg-[#2E28A0] z-0 rounded-lg"></div>
        </div>
    )
}