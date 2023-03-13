import {HashLink as Link} from "react-router-hash-link";
import { Container, Title, AnchorList } from "../Styles/NavBar";

export default function NavBar() {
    return (
        <Container>
            <Title>PORTFOLIO</Title>
            <AnchorList>
                <li>
                    <Link smooth to="/" className="anchor1"/>
                </li>
                <li>
                    <Link smooth to="/about" className="anchor3"/>
                </li>
                <li>
                    <Link smooth to="/projects" className="anchor2"/>
                </li>
            </AnchorList>
        </Container>
    )
}