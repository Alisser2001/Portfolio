'use client';
import React, { useState /*useRef, useEffect */ } from "react";
import styles from "./projects.module.css";

export default function Projects({ }) {
    const [visible, setVisible] = useState(1);
    const changeVisible = (type) => {
        if (type === "up") {
            if (visible < 6) {
                setVisible(visible + 1);
            }
        }
        if (type === "less") {
            if (visible > 1) {
                setVisible(visible - 1);
            }
        }
    }
    return (
        <div className={styles.container}>
            <button className={styles.button1} onClick={() => changeVisible("less")}>V</button>
            <div className={styles.infoProjects} id="scrollProjects">
                {visible === 1 ? <>
                    <div className={styles.project}>
                        <img src="/DevsLearning.png" className={styles.projectImg} />
                        <div className={styles.containerInfo}>
                            <h3 className={styles.projectTitle}>Devs Learning</h3>
                            <p className={styles.projectDescription}>Aplicación web de servicios de E-Learning, realizada como proyecto final de SoyHenry. Hecha con TypeScript, React, NodeJs, Material UI, Redux, Express, Sequelize  y PosgreSQL</p>
                            <a className={styles.projectLink} href="https://devs-learning-5hal.vercel.app" target="_blank">Ir a la página</a>
                        </div>
                    </div>
                    <h3 className={styles.projectTitleResponsive}>Devs Learning</h3>
                    <p className={styles.projectDescriptionResponsive}>Presiona la imagen para más información</p>
                    <a className={styles.projectLinkResponsive} href="https://devs-learning-5hal.vercel.app" target="_blank">Ir a la página</a></>
                    :
                    visible === 2 ? <>
                        <div className={styles.project}>
                            <img src="/DogsPage.png" className={styles.projectImg} />
                            <div className={styles.containerInfo}>
                                <h3 className={styles.projectTitle}>The Dogs Page</h3>
                                <p className={styles.projectDescription}>Página web informativa sobre razas de perros, realizada como proyecto individual de SoyHenry. Hecha con JavaScript, React, NodeJs, Redux, CSS3, Express, Sequelize y PosgreSQL</p>
                                <a className={styles.projectLink} href="https://dogs-page-deploy.vercel.app" target="_blank">Ir a la página</a>
                            </div>
                        </div>
                        <h3 className={styles.projectTitleResponsive}>The Dogs Page</h3>
                        <p className={styles.projectDescriptionResponsive}>Presiona la imagen para más información</p>
                        <a className={styles.projectLinkResponsive} href="https://dogs-page-deploy.vercel.app" target="_blank">Ir a la página</a>
                    </> :
                        visible === 3 ? <>
                            <div className={styles.project}>
                                <img src="/WeatherApp.png" className={styles.projectImg} />
                                <div className={styles.containerInfo}>
                                    <h3 className={styles.projectTitle}>Weather App</h3>
                                    <p className={styles.projectDescription}>Aplicación web que brinda al usuario datos del clima sobre el lugar que consulte. Hecha con JavaScript, React, NodeJs, Redux, CSS3 y la API de OpenWeatherAPI</p>
                                    <a className={styles.projectLink} href="https://weather-app-deploy-blue.vercel.app" target="_blank">Ir a la página</a>
                                </div>
                            </div>
                            <h3 className={styles.projectTitleResponsive}>Weather App</h3>
                            <p className={styles.projectDescriptionResponsive}>Presiona la imagen para más información</p>
                            <a className={styles.projectLinkResponsive} href="https://weather-app-deploy-blue.vercel.app" target="_blank">Ir a la página</a>
                        </> : visible === 4 ? <>
                            <div className={styles.project}>
                                <img src="/TranslateClone.png" className={styles.projectImg} />
                                <div className={styles.containerInfo}>
                                    <h3 className={styles.projectTitle}>Translate Clone</h3>
                                    <p className={styles.projectDescription}>Aplicación web que intenta imitar el diseño y funcionalidad de Google Translate. Realizada con ViteJs, usando TypeScript con SWC, CSS puro, React y Google Translate API</p>
                                    <a className={styles.projectLink} href="https://clone-google-translate.vercel.app/" target="_blank">Ir a la página</a>
                                </div>
                            </div>
                            <h3 className={styles.projectTitleResponsive}>Translate Clone</h3>
                            <p className={styles.projectDescriptionResponsive}>Presiona la imagen para más información</p>
                            <a className={styles.projectLinkResponsive} href="https://clone-google-translate.vercel.app/" target="_blank">Ir a la página</a>
                        </> : visible === 5 ? <>
                            <div className={styles.project}>
                                <img src="/FlickVerse.png" className={styles.projectImg} />
                                <div className={styles.containerInfo}>
                                    <h3 className={styles.projectTitle}>FlickVerse</h3>
                                    <p className={styles.projectDescription}>Aplicación web para el rating de peliculas y series. Desarrollada en TypeScript, con un backend en NestJs con TypeORM y PosgreSQL, y un frontend en ViteJs con SWC, React, Redux y CSS.</p>
                                    <a className={styles.projectLink} href="https://github.com/Alisser2001/Movies-Project.git/" target="_blank">Ir al repositorio</a>
                                </div>
                            </div>
                            <h3 className={styles.projectTitleResponsive}>FlickVerse</h3>
                            <p className={styles.projectDescriptionResponsive}>Presiona la imagen para más información</p>
                            <a className={styles.projectLinkResponsive} href="https://github.com/Alisser2001/Movies-Project.git/" target="_blank">Ir al repositorio</a>
                        </> : <>
                            <div className={styles.project}>
                                <img src="/COIL.png" className={styles.projectImg} />
                                <div className={styles.containerInfo}>
                                    <h3 className={styles.projectTitle}>Videojuego COIL</h3>
                                    <p className={styles.projectDescription}>Videojuego realizado en Java con Maven, bajo el enfoque de trabajo COIL, el cual consiste de varios minijuegos de aprendizaje básico sobre conceptos en el idioma inglés.</p>
                                    <a className={styles.projectLink} href="https://github.com/Alisser2001/Proyecto-COIL.git/" target="_blank">Ir al repositorio</a>
                                </div>
                            </div>
                            <h3 className={styles.projectTitleResponsive}>Videojuego COIL</h3>
                            <p className={styles.projectDescriptionResponsive}>Presiona la imagen para más información</p>
                            <a className={styles.projectLinkResponsive} href="https://github.com/Alisser2001/Proyecto-COIL.git/" target="_blank">Ir al repositorio</a>
                        </>
                }
            </div>
            <button className={styles.button2} onClick={() => changeVisible("up")}>V</button>
            <div className={styles.buttons}>
                <button onClick={() => changeVisible("less")}>V</button>
                <button onClick={() => changeVisible("up")}>V</button>
            </div>
        </div>
    )
}