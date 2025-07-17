'use client';

export default function Title() {
    return (
        <div>
            <p className='text-lg md:text-xl font-semibold mb-2 text-left text-blue-400 animate-fade-bottom-y-1 opacity-0' style={{ animationDelay: ".8s" }}>Hi, my name is</p>
            <p className='text-5xl sm:text-6xl lg:text-7xl font-black mb-5 text-left animate-fade-bottom-y-2 opacity-0' style={{ animationDelay: ".8s" }}>Estiven Muñoz</p>
            <p className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-400 xl:mb-5 text-left animate-fade-bottom-y-3 opacity-0' style={{ animationDelay: ".8s" }}>I build things for the web.</p>
            <p className='lg:w-4/5 text-gray-400 text-lg mt-5 text-left leading-relaxed animate-fade-bottom-y-4 opacity-0' style={{ animationDelay: ".8s" }}>
                I am Estiven Muñoz, a full stack web developer with experience in programming languages such as JavaScript, TypeScript, Python, and Java. Primarily focused on back-end development, I have worked on several projects creating CRUD functionalities for web servers and building RESTful APIs. I am passionate about writing clean and efficient code while continuously improving my skills and contributing to impactful solutions.            </p>
        </div>
    )
}