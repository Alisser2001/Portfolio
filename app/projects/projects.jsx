'use client';
import React, { useState } from "react";
import styles from "./projects.module.css";
import projects from "../../projects.json";

export default function Projects({ }) {
    const [visible, setVisible] = useState(1);
    const changeVisible = (type) => {
        if (type === "up") {
            if (visible < projects.length) {
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
            {visible > 1 ? <img className={styles.buttonLeft} alt="leftrow" src="rowLeft.png" onClick={() => changeVisible("less")} /> :
                <img className={styles.buttonLeftMinPC} src="rowLeft.png" alt="leftrow" />}
            <div className={styles.infoProjects} id="scrollProjects">
                {projects.map((obj) => {
                    if (visible === obj.order) {
                        return (
                            <div className={styles.project} key={obj.order}>
                                <img src={obj.img} className={styles.projectImg} alt="project" />
                                <div className={styles.containerInfo}>
                                    <h3 className={styles.projectTitle}>{obj.title}</h3>
                                    <h4 className={styles.projectNum}>{visible}/{projects.length}</h4>
                                    <p className={styles.projectDescription}>{obj.description}</p>
                                    <a className={styles.projectLink} href={obj.link} target="_blank">{obj.type === "web" ? "Go to page" : "Go to repository"}</a>
                                </div>
                                <h3 className={styles.projectTitleResponsive}>{obj.title}</h3>
                                <p className={styles.projectDescriptionResponsive}>Click on the image for more information</p>
                                <a className={styles.projectLinkResponsive} href={obj.link} target="_blank">{obj.type === "web" ? "Go to page" : "Go to repository"}</a>
                            </div>
                        )
                    } return null;
                })
                }
            </div>
            {visible < projects.length ? <img className={styles.buttonRight} alt="rightrow" src="rowRight.png" onClick={() => changeVisible("up")} /> :
                <img className={styles.buttonRightMaxPC} src="rowRight.png" alt="rightrow" />}
            <div className={styles.buttons}>
                {visible > 1 ? <img src="rowLeft.png" alt="leftrow" onClick={() => changeVisible("less")} /> :
                    <img className={styles.buttonLeftMin} alt="leftrow" src="rowLeft.png" />}
                {visible < projects.length ? <img src="rowRight.png" alt="rightrow" onClick={() => changeVisible("up")} /> :
                    <img className={styles.buttonRightMax} alt="rightrow" src="rowRight.png" />}
            </div>
        </div>
    )
}