"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tecnologies = exports.Buttons = exports.Info = exports.About = exports.Img = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 75vh;
    top: 25vh;
    max-height: 100vh;
    align-items: center;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    box-sizing: border-box;
    animation: slideAbout 0.5s backwards;
    @media(max-width: 900px){
        flex-direction: column;
    }
    @media(max-width: 600px){
        padding-top: 5vh;
    }
    @keyframes slideAbout{
    from{
        top: 100vh;
    }
    to{
        top: 25vh;
    }
}
`;
exports.Img = styled_components_1.default.img `
    width: 30vw;
    max-width: 30vw;
    height: 60vh;
    max-height: 60vh;
    padding: 0px 5vw;
    border-radius: 50%;
    @media(max-width: 900px){
        width: 45vw;
        max-width: 45vw;
        height: 50vh;
        max-height: 50vh;
        padding: 2vh 0px;
    }
`;
exports.About = styled_components_1.default.p `
    width: 50vw;
    max-width: 50vw;
    padding: 0 5.5vw;
    height: 60vh;
    max-height: 60vh;
    font-family: 'Open Sans', sans-serif; 
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    color: white;
    font-size: 1.6vw;
    @media(max-width: 900px){
        border-left: none;
        padding: 0 5vw;
        margin-bottom: 0;
        font-size: 3vw;
        text-align: center;
        width: 90vw;
        max-width: 90vw;
        height: 10vh;
        max-height: 10vh;
    }
    @media(max-width: 600px){
        font-size: 3.5vw;
        margin-bottom: 0;
    }
`;
exports.Info = styled_components_1.default.div `
    width: 70vw;
    max-width: 70vw;
    height: 60vh;
    max-height: 60vh;
    display: flex;
    padding: 0px 0vw;
    flex-direction: column;
    border-left: rgb(252,204,4) 5px solid;
    box-sizing: border-box;
    @media(max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        height: 50vh;
        max-height: 50vh;
        padding: 2vh 0px;
        border-top: rgb(252,204,4) 5px solid;
        border-left: none;
        border-right: none;
    }
`;
exports.Buttons = styled_components_1.default.ul `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 50vw;
    max-width: 50vw;
    padding: 0 5.5vw;
    height: 40vh;
    max-height: 40vh;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin-top: 0vh;
    margin-bottom: 0;
    p:nth-child(3n-1){
        border-top-left-radius: 5vw;
        border-bottom-left-radius: 5vw;
        border-top-right-radius: 5vw;
        border-bottom-right-radius: 5vw;
    }

    @media (max-width: 900px){
        width: 100vw;
        max-width: 100vw;
        padding: 0;
    }
`;
exports.Tecnologies = (0, styled_components_1.default)(exports.Buttons) `
    p{
        color: white;
        width: 8vw;
        max-width: 8vw;
        height: 4vh;
        max-height: 4vh;
        font-size: 1.5vw;
        padding: 5px;
        margin: 0.5vh 1vw;
        border: rgb(252,204,4) 5px solid;
    }
    p:nth-child(3n-1){
        animation: slideTecnologies 7s infinite;
    }
    p:nth-child(2n){
        animation: slideTecnologies 4s infinite;
    }
    p:nth-child(2n-1){
        animation: slideTecnologies 6s infinite;
    }
    p:nth-child(3n){
        animation: slideTecnologies 5s infinite;
    }
    @keyframes slideTecnologies{
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.1);    
        }
        100%{
            transform: scale(1);
        }
    }
    @media (max-width: 900px){
        p{
            width: 15vw;
            max-width: 15vw;
            height: 2vh;
            max-height: 2vh;
            font-size: 3vw;
        }
    }
`;
//# sourceMappingURL=AboutMe.js.map