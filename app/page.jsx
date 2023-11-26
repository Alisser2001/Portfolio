'use client';
import "../styles/home.css";
import AboutMe from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';

export default function App ({ }) {
    return (
        <div className="home">
            <AboutMe/>
            <Projects/>
            <Contact/>
        </div>
    );
}