'use client';
import React, { useState } from "react";
import styles from "./about.module.css";

export default function AboutMe({ }) {
    const [viewTech, setViewTech] = useState(0);
    const setView = (view) => {
        setViewTech(view);
    }
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.profile}>
                <img src="/perfil.png" className={styles.profileImg} alt="profileImg" />
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
            <ul className={styles.options}>
                {viewTech === 0 && <a className={styles.link} href="/CV.pdf" target="_blank">Go to CV</a>}
                {viewTech === 0 && <a className={styles.link} href="https://certificates-page.vercel.app/" target="_blank">Certificates</a>}
                {viewTech === 0 && <li className={styles.option} onClick={() => setView(1)}>Programming Languages</li>}
                {viewTech === 1 && <ul className={styles.tecnologies}>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C#</li>
                </ul>}
                {viewTech === 0 && <li className={styles.option} onClick={() => setView(2)}>Frontend Technologies</li>}
                {viewTech === 2 && <ul className={styles.tecnologies}>
                    <li>ReactJs</li>
                    <li>Tailwind</li>
                    <li>CSS</li>
                    <li>NextJs</li>
                    <li>ViteJs</li>
                    <li>Blazor</li>
                    <li>Razor</li>
                    <li>Redux</li>
                </ul>}
                {viewTech === 0 && <li className={styles.option} onClick={() => setView(3)}>Backend Technologies</li>}
                {viewTech === 3 && <ul className={styles.tecnologies}>
                    <li>NodeJs</li>
                    <li>Express</li>
                    <li>ASP.NET</li>
                    <li>NestJs</li>
                    <li>Uvicorn</li>
                    <li>Pymongo</li>
                    <li>Entity Framework</li>
                    <li>TypeORM</li>
                    <li>SpringBoot</li>
                    <li>SpringDataJDBC</li>
                    <li>Sequelize</li>
                    <li>FastAPI</li>
                </ul>}
                {viewTech === 0 && <li className={styles.option} onClick={() => setView(4)}>Databases</li>}
                {viewTech === 4 && <ul className={styles.tecnologies}>
                    <li>MySQL</li>
                    <li>PosgreSQL</li>
                    <li>SQLServer</li>
                    <li>MongoDB</li>
                </ul>}
                {viewTech === 0 && <li className={styles.option} onClick={() => setView(5)}>Design patterns / Architectures</li>}
                {viewTech === 5 && <ul className={styles.tecnologies}>
                    <li>MVC</li>
                    <li>DAO</li>
                    <li>DI</li>
                    <li>Singleton</li>
                    <li>Factory</li>
                    <li>Observer</li>
                    <li>Strategy</li>
                    <li>REST</li>
                    <li>Flux</li>
                </ul>}
                {viewTech === 0 && <li className={styles.option} onClick={() => setView(6)}>Others</li>}
                {viewTech === 6 && <ul className={styles.tecnologies}>
                    <li>Git</li>
                    <li>Google Cloud</li>
                    <li>Postman</li>
                    <li>Github</li>
                    <li>Bash</li>
                    <li>Networking</li>
                </ul>}
                {viewTech !== 0 && <img src="./rowLeft.png" onClick={() => setView(0)} className={styles.backButton}/>}
            </ul>
        </div >
    )
}