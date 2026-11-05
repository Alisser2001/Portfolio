import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GithubFilledIcon } from "../icons";

const DEFAULT_TECH_COLOR = "bg-gray-100 text-gray-800 hover:bg-gray-200";

const TECH_COLORS = {
    Typescript: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    Javascript: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    NextJs: DEFAULT_TECH_COLOR,
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
};

function ProjectLink({ href, children }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-transparent border border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
            {children}
        </Link>
    )
}

export default function ProjectCard({ project }) {
    return (
        <div className="group backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 hover:bg-white hover:-translate-y-2 border border-blue-400 text-blue-400 hover:text-blue-600">
            <div className="relative overflow-hidden rounded-t-xl">
                <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 leading-relaxed text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                        <span
                            key={tech}
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-200 ${TECH_COLORS[tech] ?? DEFAULT_TECH_COLOR}`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <ProjectLink href={project.repo}>
                        <GithubFilledIcon size={16} className="mr-2" />
                        Code
                    </ProjectLink>
                    {project.link && (
                        <ProjectLink href={project.link}>
                            <ExternalLinkIcon size={16} className="mr-2" />
                            Live Demo
                        </ProjectLink>
                    )}
                </div>
            </div>
        </div>
    )
}
