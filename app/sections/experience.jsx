"use client";
import { useState } from "react";
import experience from "../../content/experience.json";
import RevealSection from "../components/revealSection";
import SectionHeading from "../components/sectionHeading";
import Options from "../components/experience/options";
import Description from "../components/experience/description";

export default function Experience() {
    const [selectedJob, setSelectedJob] = useState(experience[0]);
    return (
        <RevealSection id="experience">
            <SectionHeading number="03." title="Where I’ve Worked" />
            <div className="flex flex-col md:flex-row justify-between items-start w-full h-auto">
                <Options jobs={experience} selectedJob={selectedJob} onSelect={setSelectedJob} />
                <section className="flex flex-col justify-center items-center h-auto w-full md:w-[65%]">
                    <Description key={selectedJob.company} job={selectedJob} />
                </section>
            </div>
        </RevealSection>
    )
}
