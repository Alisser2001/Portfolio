import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

export const ParticlesBackground = () => {
    const particlesInit = useCallback((engine)=>{
        loadFull(engine)
    }, []);
    return(
        <div>
            <Particles
            options={particlesConfig}
            init={particlesInit}
            />
        </div>
    )
}