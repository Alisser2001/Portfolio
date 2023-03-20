import { MouseEventHandler, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Title, AnchorList } from "../Styles/NavBar";

export const NavBar: React.FC = ({ }) => {
    const [view, setView] = useState(1);
    const viewOnChange = (view: number) => {
        setView(view);
    };
    const width = window.innerWidth;
    return (
        <Container>
            <Title>PORTFOLIO</Title>
            <AnchorList>
                {width>900 && <li>
                    <Link smooth to="/" className="anchor1" onClick={() => viewOnChange(1)} />
                </li>}
                {width > 900 ?
                    <li>
                        <Link smooth to="/about" className="anchor2" onClick={() => viewOnChange(2)} />
                    </li> :
                    view === 1 ?
                        <li>
                            <Link smooth to="/about" className="anchor2" onClick={() => viewOnChange(2)} />
                        </li> :
                        view === 2 ?
                            <li>
                                <Link smooth to="/projects" className="anchor3" onClick={() => viewOnChange(3)} />
                            </li> :
                            <li>
                                <Link smooth to="/" className="anchor1" onClick={() => viewOnChange(1)} />
                            </li>
                }
                {width>900 && <li>
                    <Link smooth to="/projects" className="anchor3" onClick={() => viewOnChange(3)} />
                </li>}
            </AnchorList>
        </Container>
    )
}