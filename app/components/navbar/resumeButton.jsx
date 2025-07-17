'use client';

export default function ResumeButton() {
    return (
        <div className="w-1/2 lg:w-1/4 h-full flex flex-row justify-end items-center animate-fade-up-5 pr-5">
            <a href="/CV.pdf" target="_blank" className="absolute ml-32 bg-[#161616] z-30 cursor-pointer flex justify-center items-center w-32 h-12 rounded-lg border-2 border-blue-400 font-bold text-lg text-white hover:text-blue-400 transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                Resume
            </a>
            <div className="w-32 h-12 bg-blue-400 z-0 rounded-lg"></div>
        </div>
    )
}