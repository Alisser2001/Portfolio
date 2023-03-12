"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastNameContainer = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100vw;
    height: 25vh;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    top: 75vh;
    box-sizing: border-box;
`;
exports.LastNameContainer = (0, styled_components_1.default)(exports.Container) `
    h1{
        all: unset;
        display: flex;
        align-items: center;
        font-size: 8vw;
        height: 25vh;
        padding: 0px 100px;
        color: white;
        border-left: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
        font-weight: 600;
    }
    @media(max-width: 900px){
        h1{
            font-size: 5vw;
            padding: 0px 50px;
        }
    }
    @media(max-width: 600px){
        h1{
            font-size: 7vw;
            padding: 0px 50px;
        }
    }
`;
