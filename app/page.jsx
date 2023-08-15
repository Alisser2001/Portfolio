'use client';
//import { Home } from './Components/Home';
import "../styles/home.css";
import { LastName } from './components/LastName';
import { Name } from './components/Name';
import { Title } from './components/Title';
//import {ParticlesBackground} from './components/ParticlesBackground';

export default function App ({ }) {
    return (
        <div className="home">
            <Title/>
            <Name/>
            <LastName/>
            {/*<ParticlesBackground/>*/}
        </div>
    );
}