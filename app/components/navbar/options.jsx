'use client';

export default function Options({ activeSection }) {
    return (
        <ul className="hidden lg:flex flex-row text-white w-1/2 h-full justify-center items-center font-semibold text-lg">
            <a
                href="#about"
                key={Math.random() * (1000000 - 1) + 1}
                className={`transform transition duration-200 hover:text-blue-400 cursor-pointer animate-fade-up-1 mr-5 ${activeSection === 'about' ? "text-blue-400" : "text-gray-300"}`}
            >
                <span className="text-blue-400 font-semibold">01.</span>About
            </a>
            <a
                href="#work"
                key={Math.random() * (1000000 - 1) + 1}
                className={`transform transition duration-200 hover:text-blue-400 cursor-pointer animate-fade-up-2 mr-5 ${activeSection === 'work' ? "text-blue-400" : "text-gray-300"}`}
            >
                <span className="text-blue-400 font-semibold">02.</span>Work
            </a>
            <a
                href="#experience"
                key={Math.random() * (1000000 - 1) + 1}
                className={`transform transition duration-200 hover:text-blue-400 cursor-pointer animate-fade-up-3 mr-5 ${activeSection === 'experience' ? "text-blue-400" : "text-gray-300"}`}
            >
                <span className="text-blue-400 font-semibold">03.</span>Experience
            </a>
            <a
                href="#contact"
                key={Math.random() * (1000000 - 1) + 1}
                className={`transform transition duration-200 hover:text-blue-400 cursor-pointer animate-fade-up-4 mr-5 ${activeSection === 'contact' ? "text-blue-400" : "text-gray-300"}`}
            >
                <span className="text-blue-400 font-semibold">04.</span>Contact
            </a>
        </ul>
    )
}