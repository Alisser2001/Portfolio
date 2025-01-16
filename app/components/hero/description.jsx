'use client';

export default function Description() {
    return (
        <div className="w-full h-auto flex flex-row justify-start items-center animate-fade-bottom-y-5 opacity-0 mt-6" style={{ animationDelay: ".8s" }}>
            <a href="https://alidev-certificates.vercel.app/" target="_blank" className="bg-[#161616] z-30 cursor-pointer flex justify-center items-center w-40 h-12 rounded-lg border-2 border-[#2E28A0] font-bold text-xl text-white transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                Certificates
            </a>
            <div className="w-40 h-12 bg-[#2E28A0] z-0 rounded-lg absolute mr-40"></div>
        </div>
    )
}