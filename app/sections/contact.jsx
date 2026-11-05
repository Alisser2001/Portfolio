import RevealSection from "../components/revealSection";
import SectionHeading from "../components/sectionHeading";
import Form from "../components/contact/form";

export default function Contact() {
    return (
        <RevealSection id="contact">
            <SectionHeading number="04." title="Say Hello" align="right" />
            <Form />
        </RevealSection>
    )
}
