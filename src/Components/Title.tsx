import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { TitleContainer } from "../Styles/Title";

export const Title: React.FC = ({}) => {
    return(
        <TitleContainer>
            <h1>PERSONAL</h1>
            <Link smooth to="/contact" className="anchor3" />
        </TitleContainer>
    )
}