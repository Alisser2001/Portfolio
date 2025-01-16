'use client';

export default function Title() {
    return (
        <div>
            <p className='flex flex-row justify-start items-center w-full h-auto text-xl md:text-2xl font-semibold mb-5 text-left text-[#2E28A0] animate-fade-bottom-y-1 opacity-0' style={{ animationDelay: ".8s" }}>Hi, my name is</p>
            <p className='flex flex-row justify-start items-center w-full h-auto text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-5 text-left animate-fade-bottom-y-2 opacity-0' style={{ animationDelay: ".8s" }}>Estiven Muñoz</p>
            <p className='flex flex-row justify-start items-center w-full h-auto text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black xl:mb-5 text-left animate-fade-bottom-y-3 opacity-0' style={{ animationDelay: ".8s" }}>I build things for the web.</p>
            <p className='flex flex-row justify-start items-center w-full lg:w-4/5 h-auto text-lg md:text-xl font-semibold mt-5 text-left leading-8 md:leading-10 animate-fade-bottom-y-4 opacity-0' style={{ animationDelay: ".8s" }}>
                I am Estiven Muñoz, a full stack web developer with experience in programming languages such as JavaScript, TypeScript, C#, Python, and Java. Primarily focused on back-end development, I have worked on several projects creating CRUD functionalities for web servers and building RESTful APIs. I am passionate about writing clean and efficient code while continuously improving my skills and contributing to impactful solutions.            </p>
        </div>
    )
}