'use client';
//import { Home } from './Components/Home';
import "../styles/home.css";
import { LastName } from './components/LastName';
import { Name } from './components/Name';
import { Title } from './components/Title';
import AboutMe from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';
//import {ParticlesBackground} from './components/ParticlesBackground';

export default function App ({ }) {
    const toTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className="home">
            <Title/>
            <Name/>
            <LastName/>
            {/*<ParticlesBackground/>*/}
            <AboutMe/>
            <Projects/>
            <Contact/>
            <img src="rowTop.png" className="toTop" onClick={(e)=>toTop(e)}/>
        </div>
    );
}