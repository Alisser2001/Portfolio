'use client';
import React, { useState /*useRef, useEffect */ } from "react";
import styles from "./projects.module.css";
import projects from "../../projects.json";

export default function Projects({ }) {
    const [visible, setVisible] = useState(1);
    const changeVisible = (type) => {
        if (type === "up") {
            if (visible < 7) {
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
            {visible > 1 ? <img className={styles.buttonLeft} src="rowLeft.png" onClick={() => changeVisible("less")} /> : 
            <img className={styles.buttonLeftMin} src="rowLeft.png"/>}
            <div className={styles.infoProjects} id="scrollProjects">
                {projects.map((obj) => {
                    if (visible === obj.order) {
                        return (
                            <>
                                <div className={styles.project}>
                                    <img src={obj.img} className={styles.projectImg} />
                                    <div className={styles.containerInfo}>
                                        <h3 className={styles.projectTitle}>{obj.title}</h3>
                                        <p className={styles.projectDescription}>{obj.description}</p>
                                        <a className={styles.projectLink} href={obj.link} target="_blank">{obj.type === "web" ? "Ir a la página" : "Ir al repositorio"}</a>
                                    </div>
                                </div>
                                <h3 className={styles.projectTitleResponsive}>{obj.title}</h3>
                                <p className={styles.projectDescriptionResponsive}>Presiona la imagen para más información</p>
                                <a className={styles.projectLinkResponsive} href={obj.link} target="_blank">{obj.type === "web" ? "Ir a la página" : "Ir al repositorio"}</a>
                            </>
                        )
                    }
                })
                }
            </div>
            {visible < 7 ? <img className={styles.buttonRight} src="rowRight.png" onClick={() => changeVisible("up")} /> :
            <img className={styles.buttonRightMax} src="rowRight.png"/>}
            <div className={styles.buttons}>
                <img src="rowLeft.png" onClick={() => changeVisible("less")} />
                <img src="rowRight.png" onClick={() => changeVisible("up")} />
            </div>
        </div>
    )
}