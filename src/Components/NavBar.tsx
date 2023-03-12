import React from "react";
import { Container, Options, Title, OptionsList, AnchorList } from "../Styles/NavBar";

export default function NavBar() {
    return (
        <Container>
            <Title>PORTFOLIO</Title>
            <AnchorList>
                <li>
                    <a href=" " className="anchor1">
                    </a>
                </li>
                <li>
                    <a href=" " className="anchor2">
                    </a>
                </li>
                <li>
                    <a href=" " className="anchor3">
                    </a>
                </li>
            </AnchorList>
        </Container>
    )
}