'use client';
import { useEffect, useState } from "react";
import useScrollDirection from "../../hooks/useScroll";
import Logo from "../components/navbar/logo";
import Options from "../components/navbar/options";
import ResumeButton from "../components/navbar/resumeButton";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "work", "experience", "contact"]
            const current = sections.find((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    const showNav = useScrollDirection();
    return (
        <nav className={`flex flex-row w-full h-20 justify-center items-center transition-transform duration-300 fixed bg-[#161616] z-50 shadow-[0_10px_20px_-2px_#101010] ${showNav ? 'transform translate-y-0' : 'transform -translate-y-24'}`}>
            <Logo />
            <Options activeSection={activeSection}/>
            <ResumeButton />
        </nav>
    )
}