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
                    <img src="/perfil.png" className={styles.profileImg} onMouseEnter={() => handleProfileView()} />
                    <img src="/hand.png" className={styles.hand} />
                </>
                    : <div className={styles.CV} onMouseLeave={() => handleProfileView()}>
                        <img src="/CV.png" className={styles.profileCV} />
                        <div className={styles.links}>
                            <a href="/CV.pdf" target="_blank">Go to CV</a>
                            <a href="https://certificates-page.vercel.app/" target="_blank">Certificates</a>
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
                    <li><p>CSS</p></li>
                    <li><p>Git</p></li>
                    <li><p>Bash</p></li>
                </ul>
            </div>
        </div>
    )
}