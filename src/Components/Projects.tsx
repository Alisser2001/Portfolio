import React, { useState, useRef } from "react";
import { Container, InfoProjects } from "../Styles/Projects";

export const Projects: React.FC = ({ }) => {
    const width = window.innerWidth;
    const [visible, setVisible] = useState(1);
    const elementScrollProjects = document.getElementById("scrollProjects");
    const changeVisible = (type: string) => {
        if(type==="up"){
            if(visible<=3){
                setVisible(visible+1);
                elementScrollProjects?.scrollTo((elementScrollProjects.scrollLeft + (width*0.75)), 0);
            }
        }
        if(type==="less"){
            if(visible>1){
                setVisible(visible-1);
                elementScrollProjects?.scrollTo((elementScrollProjects.scrollLeft - (width*0.75)), 0);
            }
        }
    }
    return (
        <Container>
            {width > 900 && <button className="button1" onClick={()=>changeVisible("less")}>V</button>}
            <InfoProjects id="scrollProjects">
                <img src="/img/DevsLearning.png" />
                <img src="/img/DogsPage.png" />
                <img src="/img/WeatherApp.png" />
            </InfoProjects>
            {width > 900 && <button className="button2" onClick={()=>changeVisible("up")}>V</button>}
        </Container>
    )
}