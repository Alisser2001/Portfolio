'use client';
import React from "react";
import styles from "./about.module.css";

export default function AboutMe({ }) {
    return (
        <div className={styles.aboutContainer}>
            <img src="/perfil.png" className={styles.profileImg} />
            <div className={styles.info}>
                <p className={styles.presentation}>
                    Mi nombre es Estiven Muñoz, Full Stack Developer con experiencia trabajando
                    en lenguajes como JavaScript, TypeScript, Python y Java. Principalmente
                    enfocado al desarrollo back-end, he participado en distintos proyectos
                    desarrollando funcionalidades CRUD para servidores web y en la creación de
                    APIs de RESTful, además también cuento con experiencia en proyectos propios
                    con el desarrollo del lado del cliente en el diseño de aplicaciones.
                </p>
                <ul className={styles.tecnologies}>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>Python</p>
                    <p>Java</p>
                    <p>NodeJS</p>
                    <p>ReactJS</p>
                    <p>NextJS</p>
                    <p>Express</p>
                    <p>Redux</p>
                    <p>Sequelize</p>
                    <p>SQL</p>
                    <p>CSS 3</p>
                    <p>Git Flow</p>
                </ul>
            </div>
        </div>
    )
}