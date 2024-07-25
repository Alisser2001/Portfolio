"use client";

export default function LeftInfo() {
    return (
        <section className="flex flex-col justify-end items-start w-1/4 fixed right-3/4 pl-16 z-50 mt-24 animate-fade-1 opacity-0" style={{height: "90%", animationDelay: "1s"}}>
            <img src="/brand-facebook.png" alt="facebook" className="h-10 w-10 mb-5 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
            <img src="/brand-instagram.png" alt="instagram" className="h-10 w-10 mb-5 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
            <img src="/brand-x.png" alt="x" className="h-10 w-10 mb-5 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
            <img src="/brand-linkedin.png" alt="linkedin" className="h-10 w-10 mb-5 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
            <img src="/brand-github.png" alt="github" className="h-10 w-10 mb-5 cursor-pointer transform transition duration-300 hover:-translate-y-1" />
            <div className="w-10 h-60 flex justify-center items-center">
                <section className="w-1 bg-[#2E28A0] h-60"></section>
            </div>
        </section>
    )
}