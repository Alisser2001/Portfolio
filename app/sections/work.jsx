import projects from "../../content/projects.json";
import RevealSection from "../components/revealSection";
import SectionHeading from "../components/sectionHeading";
import ProjectCard from "../components/work/projectCard";

export default function Work() {
    return (
        <RevealSection id="work">
            <SectionHeading number="02." title="My Work" align="right" />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </ul>
        </RevealSection>
    )
}
