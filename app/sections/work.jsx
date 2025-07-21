"use client";
import projects from "../../public/projects.json";
import { useRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";
import Index from "../components/work/index";
import BackImage from "../components/work/backImage";
import Tecnologies from "../components/work/tecnologies";
import Links from "../components/work/links";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
    const refAbout = useRef();
    const isVisibleAbout = useIsVisible(refAbout);
    const getTechColor = (tech) => {
        const colors = {
            Typescript: "bg-blue-100 text-blue-800 hover:bg-blue-200",
            Javascript: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
            NextJs: "bg-gray-100 text-gray-800 hover:bg-gray-200",
            React: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200",
            Supabase: "bg-green-100 text-green-800 hover:bg-green-200",
            Shopify: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200",
            "AWS Rekognition": "bg-orange-100 text-orange-800 hover:bg-orange-200",
            Expo: "bg-purple-100 text-purple-800 hover:bg-purple-200",
            "React Native": "bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
            OpenAI: "bg-teal-100 text-teal-800 hover:bg-teal-200",
            Prisma: "bg-slate-100 text-slate-800 hover:bg-slate-200",
            PostgreSQL: "bg-blue-100 text-blue-800 hover:bg-blue-200",
            Sequelize: "bg-pink-100 text-pink-800 hover:bg-pink-200",
            NestJs: "bg-red-100 text-red-800 hover:bg-red-200",
            Tailwind: "bg-sky-100 text-sky-800 hover:bg-sky-200",
            ViteJs: "bg-violet-100 text-violet-800 hover:bg-violet-200",
            Redux: "bg-purple-100 text-purple-800 hover:bg-purple-200",
            CSS: "bg-blue-100 text-blue-800 hover:bg-blue-200",
        }
        return colors[tech] || "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
    return (
        <section ref={refAbout} className={`mt-20 flex flex-col w-full min-h-screen text-white justify-center items-center opacity-0 ${isVisibleAbout ? 'animate-fade-bottom-y-4' : ''}`} style={{ animationDelay: ".2" }} id='work'>
            <Index />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((obj, idx) => {
                    return (
                        <div
                            key={idx}
                            className="group backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-2 border border-blue-400 text-blue-400 hover:text-blue-600"
                        >
                            <div className="relative overflow-hidden rounded-t-xl">
                                <Image
                                    src={obj.img || `/placeholder.svg?height=200&width=400&text=${obj.title}`}
                                    alt={obj.title}
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    {obj.title}
                                </h3>

                                <p className="mb-4 leading-relaxed text-sm line-clamp-3">{obj.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {obj.techs.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-200 ${getTechColor(tech)}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <Link
                                        href={obj.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-transparent border border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Code
                                    </Link>

                                    {obj.link && (
                                        <Link
                                            href={obj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-transparent border border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                            Live Demo
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </ul>
        </section>
    )
}