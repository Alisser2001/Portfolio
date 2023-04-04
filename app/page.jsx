'use client';
//import { Home } from './Components/Home';
import "../styles/home.css";
import { LastName } from './components/LastName';
import { Name } from './components/Name';
import { Title } from './components/Title';
//import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
//import { AboutMe } from './Components/AboutMe';
//import { AppStyle } from './Styles/App';
//import { Projects } from './Components/Projects';
//import { Contact } from './Components/Contact';

export default function App ({ }) {
    return (
        <div className="home">
            <Title/>
            <Name/>
            <LastName/>
            {/*<Route path="/" Component={Home} />
            <Route path="/about" Component={AboutMe} />
            <Route path="/projects" Component={Projects} />
    <Route path="/contact" Component={Contact} />*/}
        </div>
    );
}