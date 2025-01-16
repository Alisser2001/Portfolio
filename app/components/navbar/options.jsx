'use client';

export default function Options() {
    return (
        <ul className="hidden lg:flex flex-row text-white w-1/2 h-full justify-center items-center font-semibold text-xl">
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
    )
}