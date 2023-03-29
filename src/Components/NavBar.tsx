import { useState } from "react";
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
            <Title>PORTAFOLIO</Title>
            <AnchorList>
                {width > 900 && <li>
                    <Link smooth to="/" onClick={() => viewOnChange(1)}>
                        <img src="/icons/home-page.png" />
                    </Link>
                </li>}
                {width > 900 ?
                    <li>
                        <Link smooth to="/about" onClick={() => viewOnChange(2)}>
                            <img src="/icons/hacker.png" />
                        </Link>
                    </li> :
                    view === 1 ?
                        <li>
                            <Link smooth to="/about" onClick={() => viewOnChange(2)}>
                                <img src="/icons/hacker.png" />
                                <p>Profile</p>
                            </Link>
                        </li> :
                        view === 2 ?
                            <li>
                                <Link smooth to="/projects" onClick={() => viewOnChange(3)} >
                                    <img src="icons/innovacion.png" />
                                    <p>Projects</p>
                                </Link>
                            </li> :
                            <li>
                                <Link smooth to="/" onClick={() => viewOnChange(1)} >
                                    <img src="/icons/home-page.png" />
                                    <p>Home</p>
                                </Link>
                            </li>
                }
                {width > 900 && <li>
                    <Link smooth to="/projects" onClick={() => viewOnChange(3)}>
                        <img src="/icons/innovacion.png" />
                    </Link>
                </li>}
            </AnchorList>
        </Container>
    )
}