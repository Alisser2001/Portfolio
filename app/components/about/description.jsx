'use client';
import Image from "next/image";
import tecnologies from "../../../public/tecnologies.json";

export default function Description() {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-12 w-full">
            <div className="lg:col-span-2 space-y-6">
                <p className="text-gray-400 text-lg leading-relaxed">
                    Full stack web developer with focus on back end development. I am a proactive person, with a strong
                    orientation towards continuous learning and the search for innovative solutions. I am motivated by setting
                    clear goals and acquiring new knowledge to optimize my skills.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                    I bring value to projects by combining up-to-date technology and an effective approach to solving
                    challenges. My experience spans across multiple programming languages and frameworks, with a particular
                    emphasis on creating robust backend systems and RESTful APIs.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                    {tecnologies.map((skill) => (
                        <li
                            key={skill}
                            className='flex w-auto px-4 py-2 h-8 justify-center items-center text-sm md:text-base font-bold text-blue-400 border border-blue-400 rounded-full'>
                            {skill}
                        </li>
                    ))}
                </div>
            </div>
            <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-400/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative">
                        <div className="w-80 h-80 rounded-lg overflow-hidden border-2 border-blue-400/30 group-hover:border-blue-400/50 transition-colors">
                            <Image
                                src="/perfil.png"
                                alt="Estiven Muñoz"
                                width={320}
                                height={320}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}