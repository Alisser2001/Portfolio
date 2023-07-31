'use client';
import React, { useState } from "react";
import styles from "./about.module.css";

export default function AboutMe({ }) {
    const [profileView, setProfileView] = useState(true);
    const handleProfileView = () => {
        setProfileView(!profileView);
    }
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.profile}>
                {profileView ? <img src="/perfil.png" className={styles.profileImg} onMouseEnter={() => handleProfileView()} />
                    : <div className={styles.CV} onMouseLeave={() => handleProfileView()}>
                        <img src="/CV.png" className={styles.profileCV} />
                        <div className={styles.links}>
                            <a href="/CV.pdf" target="_blank">Ir al CV</a>
                            <a href="https://drive.google.com/drive/folders/1BB-DEmcK4UqsKDXK4J4J1O0Q3CAUAsM5?usp=sharing" target="_blank">Certificados</a>
                        </div>
                    </div>}
            </div>
            <div className={styles.info}>
                <p className={styles.presentation}>
                    Full Stack Developer con experiencia trabajando
                    en lenguajes como JavaScript, TypeScript, Python y Java. Principalmente
                    enfocado al desarrollo back-end, he participado en distintos proyectos
                    desarrollando funcionalidades CRUD para servidores web y en la creación de
                    APIs de RESTful.
                </p>
                <ul className={styles.tecnologies} id="carousel-list">
                    <li><p>JavaScript</p></li>
                    <li><p>TypeScript</p></li>
                    <li><p>Python</p></li>
                    <li><p>Java</p></li>
                    <li><p>C#</p></li>
                    <li><p>NodeJS</p></li>
                    <li><p>ReactJS</p></li>
                    <li><p>NextJS</p></li>
                    <li><p>Express</p></li>
                    <li><p>ASP.NET</p></li>
                    <li><p>Redux</p></li>
                    <li><p>NestJs</p></li>
                    <li><p>TypeORM</p></li>
                    <li><p>Sequelize</p></li>
                    <li><p>SQL</p></li>
                    <li><p>MongoDB</p></li>
                    <li><p>FastAPI</p></li>
                    <li><p>CSS 3</p></li>
                    <li><p>Git Flow</p></li>
                    <li><p>PostMan</p></li>
                </ul>
            </div>
        </div>
    )
}