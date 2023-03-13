"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.AppStyle = styled_components_1.default.div `
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
    background-color: #161616;
    height: 100vh;
    max-height: 100vh;
    overflow-x: hidden;

    ::-webkit-scrollbar {
    background-color: transparent;
    }
    ::-webkit-scrollbar:vertical {
        width: 1vw;
    }
    ::-webkit-scrollbar-button:increment{
        
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar:horizontal {
        height: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgb(252,204,4);
        border-radius: 20px;
        border: 2px solid rgb(252,204,4);
        margin: 1vw;
    }
`;
//# sourceMappingURL=App.js.map