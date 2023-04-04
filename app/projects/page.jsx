'use client';
import React, { useState /*useRef, useEffect */ } from "react";
import styles from "./projects.module.css";

export default function Projects({ }) {
    const [visible, setVisible] = useState(1);
    const changeVisible = (type) => {
        if (type === "up") {
            if (visible < 3) {
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
                {visible === 1 ? <div className={styles.project}>
                    <img src="/DevsLearning.png" className={styles.projectImg} />
                    <div className={styles.containerInfo}>
                        <h3 className={styles.projectTitle}>Devs Learning</h3>
                        <p className={styles.projectDescription}>Aplicación web de servicios de aprendizaje en linea, enfocada hacia la creación, compra y venta de cursos de programación. La aplicación hizo parte de la etapa de proyecto final del bootcamp SoyHenry, con una duración de un mes y en la cual colaboramos un total de 8 personas haciendo uso de las metodologías agiles SCRUM. Para el proyecto se usó principalmente el lenguaje de programación TypeScript, haciendo uso de tecnologías como React, Redux y Material UI para el front-end, y tecnologías para el back-end tales como Express, NodeJs, el ORM Sequelize junto con el sistema gestor de DB PostgreSQL.</p>
                        <a className={styles.projectLink} href="https://devs-learning-5hal.vercel.app" target="_blank">Ir a la página</a>
                    </div>
                </div> :
                    visible === 2 ? <div className={styles.project}>
                        <img src="/DogsPage.png" className={styles.projectImg} />
                        <div className={styles.containerInfo}>
                            <h3 className={styles.projectTitle}>The Dogs Page</h3>
                            <p className={styles.projectDescription}>Página web que brinda informacón a las personas sobre las disintas razas de perro existentes. La página fue desarrollada como entrega final de la instancia de proyecto individual del bootcamp SoyHenry. Esta página fue desarrollada principalmente en JavaScript, haciendo uso de tecnologías como React, Redux y CSS para el front, y tecnologías como Express, NodeJs y el ORM Sequelize junto con un modelo de DB relacional usando PosgreSQL.</p>
                            <a className={styles.projectLink} href="https://dogs-page-deploy.vercel.app" target="_blank">Ir a la página</a>
                        </div>
                    </div> :
                        <div className={styles.project}>
                            <img src="/WeatherApp.png" className={styles.projectImg} />
                            <div className={styles.containerInfo}>
                                <h3 className={styles.projectTitle}>Weather App</h3>
                                <p className={styles.projectDescription}>Aplicación web que brinda información al usuario sobre las condiciones climatológicas en la zona que indique. Esta página fue desarrollada principalmente en JavaScript, haciendo uso de tecnologías como React, Redux y CSS, además de hacer uso de la API externa de OpenWeather (https://openweathermap.org/) para la información del estado climatológico de cada ciudad.</p>
                                <a className={styles.projectLink} href="https://weather-app-deploy-blue.vercel.app" target="_blank">Ir a la página</a>
                            </div>
                        </div>
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