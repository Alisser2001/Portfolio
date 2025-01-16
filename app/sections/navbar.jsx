'use client';
import useScrollDirection from "../../hooks/useScroll";
import Logo from "../components/navbar/logo";
import Options from "../components/navbar/options";
import ResumeButton from "../components/navbar/resumeButton";

export default function NavBar () {
    const showNav = useScrollDirection();
    return (
        <nav className={`flex flex-row w-full h-24 justify-center items-center transition-transform duration-300 fixed bg-[#161616] z-50 shadow-[0_10px_20px_-2px_#101010] ${showNav ? 'transform translate-y-0' : 'transform -translate-y-24'}`}>
            <Logo/>
            <Options/>
            <ResumeButton/>
        </nav>
    )
}