'use client';
import useScrollDirection from "../../hooks/useScroll";

export const NavBar = () => {
    const showNav = useScrollDirection();
    return (
        <nav className={`flex flex-row w-full h-24 justify-start items-center transition-transform duration-300 fixed bg-[#161616] z-50 shadow-[0_10px_20px_-2px_#101010] ${showNav ? 'transform translate-y-0' : 'transform -translate-y-24'}`}>
            <div className="flex flex-row w-1/2 md:w-1/4 h-full justify-start items-center pl-5 animate-fade-1 opacity-0" style={{animationDelay: ".5s"}}>
                <a href="/" className="relative z-30 cursor-pointer bg-[#161616] flex justify-center items-center w-12 h-14 border-t-2 border-l-2 border-r-2 border-b-2 border-[#2E28A0] transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                    <span className="text-white text-3xl font-bold">A</span>
                </a>
                <div className="w-12 h-14 bg-[#2E28A0] z-0 relative -translate-x-12"></div>
            </div>
            <ul className="hidden md:flex flex-row text-white w-1/2 h-full justify-end items-center font-semibold text-xl ml-10">
                <a href="#about" className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-1 mr-5">
                    <span className="text-[#2E28A0] font-semibold">01.</span> About
                </a>
                <a href="#work" className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-2 mr-5">
                    <span className="text-[#2E28A0] font-semibold">02.</span> Work
                </a>
                <a href="#experience" className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-3 mr-5">
                    <span className="text-[#2E28A0] font-semibold">03.</span> Experience
                </a>
                <a href="#contact" className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer animate-fade-up-4 mr-5">
                    <span className="text-[#2E28A0] font-semibold">04.</span> Contact
                </a>
            </ul>
            <div className="w-1/2 md:w-1/6 h-full flex flex-row justify-end items-center animate-fade-up-5 pr-5">
                <a href="/CV.pdf" target="_blank" className="absolute ml-32 bg-[#161616] z-30 cursor-pointer flex justify-center items-center w-32 h-12 rounded-lg border-2 border-[#2E28A0] font-bold text-xl text-white transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                    Resume
                </a>
                <div className="w-32 h-12 bg-[#2E28A0] z-0 rounded-lg"></div>
            </div>
        </nav>
    )
}