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
                {profileView ? <>
                    <img src="/perfil.png" className={styles.profileImg} onMouseEnter={() => handleProfileView()} alt="profileImg"/>
                    <img src="/hand.png" className={styles.hand} alt="viewCV"/>
                </>
                    : <div className={styles.CV} onMouseLeave={() => handleProfileView()}>
                        <img src="/CV.png" className={styles.profileCV} alt="CurriculumVitae"/>
                        <div className={styles.links}>
                            <a className={styles.link} href="/CV.pdf" target="_blank">Go to CV</a>
                            <a className={styles.link} href="https://certificates-page.vercel.app/" target="_blank">Certificates</a>
                        </div>
                    </div>}
            </div>
            <div className={styles.info}>
                <p className={styles.presentation}>
                I'm Estiven Muñoz, a full stack web developer with experience working in 
                languages like JavaScript, TypeScript, C#, Python and Java. 
                Mainly focused on back-end development, I've participated in different 
                projects developing CRUD functionalities for web 
                servers and creating RESTful APIs.
                </p>
            </div>
            <ul className={styles.tecnologies} id="carousel-list">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Express</li>
                    <li>ASP.NET</li>
                    <li>Redux</li>
                    <li>NestJs</li>
                    <li>TypeORM</li>
                    <li>Sequelize</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>FastAPI</li>
                    <li>CSS</li>
                    <li>Git</li>
                    <li>Bash</li>
            </ul>
        </div>
    )
}