"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = exports.Img = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    align-items: center;
    top: 100vh;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    box-sizing: border-box;
`;
exports.Img = styled_components_1.default.img `
    width: 40vw;
    max-width: 40vw;
    height: 90vh;
    max-height: 90vh;
    padding: 0px 5vw;
    border-radius: 50%;
`;
exports.Info = styled_components_1.default.p `
    width: 40vw;
    max-width: 40vw;
    height: 90vh;
    max-height: 90vh;
    padding: 0px 5vw;
    border-left: rgb(252,204,4) 5px solid;
    font-family: 'Open Sans', sans-serif; 
    color: white;
    font-size: 1.813vw;
`;
