'use client';
import "../styles/home.css";
import AboutMe from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';

export default function App ({ }) {
    const toTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className="home">
            <AboutMe/>
            <Projects/>
            <Contact/>
            <img src="rowTop.png" className="toTop" onClick={(e)=>toTop(e)}/>
        </div>
    );
}