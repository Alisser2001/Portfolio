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

    @media(max-width: 900px){
        flex-direction: column;
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
    color: white;
    font-size: 1.6vw;
    @media(max-width: 900px){
        border-left: none;
        padding: 2vh 5vw;
        font-size: 3vw;
        text-align: center;
        width: 90vw;
        max-width: 90vw;
        height: 10vh;
        max-height: 10vh;
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
    border-right: rgb(252,204,4) 5px solid;
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
    height: 20vh;
    max-height: 20vh;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin-top: 0vh;
    p:nth-child(2n){
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
`;
//# sourceMappingURL=AboutMe.js.map