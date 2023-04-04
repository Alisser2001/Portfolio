import React from "react";
import Link from "next/link";
import styles from "./Title.module.css";

export const Title = ({ }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titleContainer1}>PROFESIONAL</h1>
            <h1 className={styles.titleContainer2}>PORTAFOLIO</h1>
            <Link href="/contact" className={styles.link}>
                <img src="/correo-electronico.png" className={styles.contactImg}/>
                <p className={styles.contactTitle}>Contact</p>
            </Link>
        </div>
    )
}