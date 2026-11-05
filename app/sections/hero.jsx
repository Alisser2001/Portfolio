import RevealSection from "../components/revealSection";
import Title from "../components/hero/title";
import Description from "../components/hero/description";

export default function Hero() {
    return (
        <RevealSection id="hero" spacing="md:mt-20 mt-28">
            <Title />
            <Description />
        </RevealSection>
    )
}
