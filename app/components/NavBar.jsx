'use client';
import styles from "./NavBar.module.css";

export const NavBar = () => {
    const scroll = (e, value) => {
        e.preventDefault();
        window.scrollTo({ top: value, behavior: 'smooth' });
    }
    return (
        <nav className={styles.container}>
            <h1 className={styles.title}><span>&lt;</span>ALIDEV<span>/&gt;</span></h1>
            <ul className={styles.options}>
                <li className={styles.aboutLink}>
                    <a href="/" className={styles.link} onClick={(e)=>scroll(e, 0)}>
                        <img src="/hacker.png" className={styles.aboutImg} alt="toAbout" onClick={(e)=>{e.preventDefault()}}/>
                        <span className={styles.linkTitle}>About</span>
                    </a>
                </li>
                <li className={styles.projectsLink} onClick={(e)=>scroll(e, 550)}>
                    <a href="/" className={styles.link}>
                        <img src="/innovacion.png" className={styles.projectsImg} alt="toProjects" onClick={(e)=>{e.preventDefault()}}/>
                        <span className={styles.linkTitle}>Projects</span>
                    </a>
                </li>
                <li className={styles.contactLink} onClick={(e)=>scroll(e, 1760)}>
                    <a href="/" className={styles.link}>
                        <img src="/correo-electronico.png" className={styles.contactImg} alt="toContact" onClick={(e)=>{e.preventDefault()}}/>
                        <span className={styles.linkTitle}>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}