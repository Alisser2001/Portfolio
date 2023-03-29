import React, { useState, useRef, useEffect } from "react";
import { Container, InfoProjects } from "../Styles/Projects";

export const Projects: React.FC = ({ }) => {
    let width: number = window.innerWidth;
    const [visible, setVisible] = useState(1);
    const elementScrollProjects = document.getElementById("scrollProjects");
    const changeVisible = (type: string) => {
        if (type === "up") {
            if (visible < 3) {
                setVisible(visible + 1);
                elementScrollProjects?.scrollTo((elementScrollProjects.scrollLeft + (width * 0.75)), 0);
            }
        }
        if (type === "less") {
            if (visible > 1) {
                setVisible(visible - 1);
                elementScrollProjects?.scrollTo((elementScrollProjects.scrollLeft - (width * 0.75)), 0);
            }
        }
    }
    return (
        <Container>
            {width > 900 && <button className="button1" onClick={() => changeVisible("less")}>V</button>}
            <InfoProjects id="scrollProjects">
                {visible === 1 ? <div>
                    <img src="/img/DevsLearning.png" />
                    <div className="containerInfo">
                        <h3>Devs Learning</h3>
                        <p>Aplicación web de servicios de aprendizaje en linea, enfocada hacia la creación, compra y venta de cursos de programación. La aplicación hizo parte de la etapa de proyecto final del bootcamp SoyHenry, con una duración de un mes y en la cual colaboramos un total de 8 personas haciendo uso de las metodologías agiles SCRUM. Para el proyecto se usó principalmente el lenguaje de programación TypeScript, haciendo uso de tecnologías como React, Redux y Material UI para el front-end, y tecnologías para el back-end tales como Express, NodeJs, el ORM Sequelize junto con el sistema gestor de DB PostgreSQL.</p>
                        <a href="https://devs-learning-5hal.vercel.app" target="_blank">Ir a la página</a>
                    </div>
                </div> :
                    visible === 2 ? <div >
                        <img src="/img/DogsPage.png" />
                        <div className="containerInfo">
                            <h3>The Dogs Page</h3>
                            <p>Página web que brinda informacón a las personas sobre las disintas razas de perro existentes. La página fue desarrollada como entrega final de la instancia de proyecto individual del bootcamp SoyHenry. Esta página fue desarrollada principalmente en JavaScript, haciendo uso de tecnologías como React, Redux y CSS para el front, y tecnologías como Express, NodeJs y el ORM Sequelize junto con un modelo de DB relacional usando PosgreSQL.</p>
                            <a href="https://dogs-page-deploy.vercel.app" target="_blank">Ir a la página</a>
                        </div>
                    </div> :
                        <div>
                            <img src="/img/WeatherApp.png" />
                            <div className="containerInfo">
                                <h3>Weather App</h3>
                                <p>Aplicación web que brinda información al usuario sobre las condiciones climatológicas en la zona que indique. Esta página fue desarrollada principalmente en JavaScript, haciendo uso de tecnologías como React, Redux y CSS, además de hacer uso de la API externa de OpenWeather (https://openweathermap.org/) para la información del estado climatológico de cada ciudad.</p>
                                <a href="https://weather-app-deploy-blue.vercel.app" target="_blank">Ir a la página</a>
                            </div>
                        </div>
                }
            </InfoProjects>
            {width > 900 && <button className="button2" onClick={() => changeVisible("up")}>V</button>}
            {width <= 900 && 
            <div className="buttons">
                <button className="button1" onClick={() => changeVisible("less")}>V</button>
                <button className="button2" onClick={() => changeVisible("up")}>V</button>
            </div>
            }
        </Container>
    )
}