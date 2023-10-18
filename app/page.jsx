'use client';
import "../styles/home.css";
import AboutMe from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';

export default function App ({ }) {
    return (
        <div className="home">
            <AboutMe/>
            <Projects/>
            <Contact/>
        </div>
    );
}