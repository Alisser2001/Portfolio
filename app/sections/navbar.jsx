'use client';

export const NavBar = () => {
    const scroll = (e, value) => {
        e.preventDefault();
        window.scrollTo({ top: value, behavior: 'smooth' });
    }
    return (
        <nav className="flex flex-row w-full h-24 justify-start items-center">
            <div className="flex flex-row w-7/12 h-full justify-start items-center pl-5">
                <div className="relative z-30 cursor-pointer bg-[#161616] flex justify-center items-center w-12 h-14 border-t-2 border-l-2 border-r-2 border-b-2 border-[#2E28A0] transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                    <span className="text-white text-3xl font-bold">A</span>
                </div>
                <div className="w-12 h-14 bg-[#2E28A0] z-0 relative -translate-x-12"></div>
            </div>
            <ul className="flex flex-row text-white w-1/4 h-full justify-between items-center font-semibold text-xl ml-10">
                <li className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer">
                    <span className="text-[#2E28A0] font-semibold">01.</span> About
                </li>
                <li className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer">
                    <span className="text-[#2E28A0] font-semibold">02.</span> Experience
                </li>
                <li className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer">
                    <span className="text-[#2E28A0] font-semibold">03.</span> Work
                </li>
                <li className="transform transition duration-200 hover:text-[#2E28A0] cursor-pointer">
                    <span className="text-[#2E28A0] font-semibold">04.</span> Contact
                </li>
            </ul>
            <div className="w-1/6 h-full flex flex-row justify-center items-center">
                <button className="left-32 bg-[#161616] relative z-30 cursor-pointer justify-center items-center w-32 h-12 rounded-lg border-2 border-[#2E28A0] font-bold text-xl text-white transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                    Resume
                </button>
                <div className="w-32 h-12 bg-[#2E28A0] z-0 relative rounded-lg"></div>
            </div>
        </nav>
    )
}