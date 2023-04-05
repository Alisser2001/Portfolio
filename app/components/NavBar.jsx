'use client';
import Link from "next/link";
import styles from "./NavBar.module.css";

export const NavBar = () => {
    return (
        <nav className={styles.container}>
            <h1 className={styles.title}>PORTAFOLIO</h1>
            <ul className={styles.options}>
                <li className={styles.homeLink}>
                    <Link href="/" className={styles.link}>
                        <img src="/home-page.png" className={styles.homeImg}/>
                        <p className={styles.linkTitle}>Home</p>
                    </Link>
                </li>
                <li className={styles.aboutLink}>
                    <Link href="/about" className={styles.link}>
                        <img src="/hacker.png" className={styles.aboutImg}/>
                        <p className={styles.linkTitle}>About</p>
                    </Link>
                </li>
                <li className={styles.projectsLink}>
                    <Link href="/projects" className={styles.link}>
                        <img src="/innovacion.png" className={styles.projectsImg}/>
                        <p className={styles.linkTitle}>Projects</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}