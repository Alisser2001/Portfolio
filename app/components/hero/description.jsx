'use client';

export default function Description() {
    return (
        <div className="w-full h-auto flex flex-row justify-start items-center gap-3 animate-fade-bottom-y-5 opacity-0 mt-8" style={{ animationDelay: ".8s" }}>
            <div className="flex justify-start items-center">
                <a href="https://alidev-certificates.vercel.app/" target="_blank" className="bg-[#161616] z-30 cursor-pointer flex justify-center items-center w-56 h-12 rounded-lg border-2 border-blue-400 font-bold text-xl text-white hover:text-blue-400 transform transition duration-300 hover:-translate-x-1 hover:-translate-y-1">
                    Certificates
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed ml-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                </a>
                <div className="w-56 h-12 bg-blue-400 z-0 rounded-lg absolute mr-56"></div>
            </div>
            <div className="flex space-x-3">
                <a href="https://github.com/Alisser2001" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/alisser2001/" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </a>
            </div>
        </div>
    )
}