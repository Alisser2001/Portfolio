"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleContainer = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    display: flex;
    flex-direction: row;
    justify-content: initial;
    width: 100vw;
    height: 25vh;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    top: 25vh;
    box-sizing: border-box;
`;
exports.TitleContainer = (0, styled_components_1.default)(exports.Container) `
    h1{
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 8vw;
        height: 25vh;
        color: white;
        width: 86.8vw;
        box-sizing: border-box;
        font-weight: 600;
    }
    @media(max-width: 900px){
        h1{
            font-size: 8vw;
            padding: 0px 50px;
            width: 60vw;
            max-width: 60vw;
        }
    }
    @media(max-width: 600px){
        h1{
            font-size: 9vw;
            padding: 0px 50px;
            width: 60vw;
            max-width: 60vw;
        }
    }
    a{
        width: 13vw;
        max-width: 13vw;
        height: 25vh;
        border-left: rgb(252,204,4) 5px solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        /*background-image: url("https://cdn-icons-png.flaticon.com/512/9946/9946475.png");
        background-size: 10vw 20vh;
        background-repeat: no-repeat;
        background-position: center;*/
    }
    a>img{
        width: 10vw;
        max-width: 10vw;
        height: 20vh;
        max-height: 20vh;
    }
    a>p{
        width: 13vw;
        max-width: 13vw;
        height: 2vh;
        max-height: 2vh;
        color: white;
        margin: 1vh 0 0 0;
        font-size: 4vw;
    }
    a>img:hover{
        transform: scale(0.9);
    }
    @media(max-width: 900px){
        a{
            width: 40vw;
            max-width: 40vw;
            display: flex;
            justify-content: center;
            //background-size: 25vw 15vh;
            box-sizing: border-box;
        }
        a>img{
            width: 25vw;
            max-width: 25vw;
            height: 16vh;
            max-height: 16vh;
        }
    }
    @media(max-width: 600px){
        a{
            width: 40vw;
            max-width: 40vw;
            box-sizing: border-box;
        }
    }
`;
//# sourceMappingURL=Title.js.map