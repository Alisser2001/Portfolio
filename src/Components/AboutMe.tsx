import React from "react";
import { About, Container, Img, Info, Tecnologies } from "../Styles/AboutMe";

export const AboutMe: React.FC = ({ }) => {
    return (
        <Container id="about">
            <Img src="https://avatars.githubusercontent.com/u/105648476?s=400&u=fff12fd4784c9959f6054c37e3424ef01448b29d&v=4" />
            <Info>
                <About>
                    Mi nombre es Estiven Muñoz, Full Stack Developer con experiencia trabajando
                    en lenguajes como JavaScript, TypeScript, Python y Java. Principalmente
                    enfocado al desarrollo back-end, he participado en distintos proyectos
                    desarrollando funcionalidades CRUD para servidores web y en la creación de
                    APIs de RESTful, además también cuento con experiencia en proyectos propios
                    con el desarrollo del lado del cliente en el diseño de aplicaciones.
                </About>
                <Tecnologies>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>Python</p>
                    <p>Java</p>
                    <p>NodeJS</p>
                    <p>ReactJS</p>
                    <p>Express</p>
                    <p>Sequelize</p>
                    <p>SQL</p>
                    <p>Redux</p>
                    <p>CSS 3</p>
                    <p>Git Flow</p>
                </Tecnologies>
            </Info>

        </Container>
    )
}