import RevealSection from "../components/revealSection";
import SectionHeading from "../components/sectionHeading";
import Description from "../components/about/description";

export default function About() {
    return (
        <RevealSection id="about">
            <SectionHeading number="01." title="About Me" />
            <Description />
        </RevealSection>
    )
}
