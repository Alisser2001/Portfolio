import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { TitleContainer } from "../Styles/Title";

export const Title: React.FC = ({}) => {
    console.log(window.innerWidth);
    return(
        <TitleContainer>
            <h1>PROFESIONAL</h1>
            <Link smooth to="/contact" className="anchor3">
                <img src="/icons/correo-electronico.png"/>
                {window.innerWidth<=900 && <p>Contact</p>}
            </Link>
        </TitleContainer>
    )
}