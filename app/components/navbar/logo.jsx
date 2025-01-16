'use client';

export default function Logo() {
    return (
        <div className="flex flex-row w-1/2 lg:w-1/4 h-full justify-start items-center pl-5 animate-fade-1 opacity-0" style={{ animationDelay: ".5s" }}>
            <a href="/" className="relative z-30 cursor-pointer bg-[#161616] flex justify-center items-center w-12 h-14 border-t-2 border-l-2 border-r-2 border-b-2 border-[#2E28A0] transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                <span className="text-white text-3xl font-bold">A</span>
            </a>
            <div className="w-12 h-14 bg-[#2E28A0] z-0 relative -translate-x-12"></div>
        </div>
    )
}