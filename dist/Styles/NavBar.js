"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorList = exports.OptionsList = exports.Options = exports.Title = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    display: flex;
    width: 100vw;
    height: 25vh;
    justify-content: initial;
    color: white;
    background-color: #161616;
    margin: 0;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    box-sizing: border-box;
`;
exports.Title = styled_components_1.default.h1 `
    all: unset;
    display: flex;
    align-items: center;
    font-size: 8vw;
    height: 25vh;
    padding: 0px 300px 0px 50px;
    color: white;
    width: 30%;
    font-weight: 600;
    @media(max-width: 900px){
        font-size: 5vw;
        padding: 0px 50px;
    }
    @media(max-width: 600px){
        font-size: 7vw;
        padding: 0px 30px;
    }
`;
exports.Options = styled_components_1.default.ul `
    all: unset;
    display: flex;
    flex-direction: row;
    width:70%;
    height: 25vh;
    justify-content: center;
    margin: 0;
    list-style: none;
`;
exports.OptionsList = (0, styled_components_1.default)(exports.Options) `
    li{
        all: unset;
        width: 33%;
        height: 25vh;
        max-height: 25vh;
        max-width: 33%;
        justify-content: center;
        margin: 0px;
        border-left: rgb(252,204,4) 5px solid;
    }
    li:nth-child(3){
        border-right: rgb(252,204,4) 5px solid;
    }
    @media(max-width: 900px){
        li:nth-child(1), li:nth-child(3){
            display: none;
        }
        li:nth-child(2){
            width: 66%;
            max-width: 66%;
        }
    }
`;
exports.AnchorList = (0, styled_components_1.default)(exports.OptionsList) `
    a{
        width: 100%;
        display: flex;
        height: 25vh;
        max-width: 100%;
        background-size: 10vw 20vh;
        background-repeat: no-repeat;
        background-position: center;
    }
    @media(max-width: 900px){
        .anchor2{
            background-size: 25vw 15vh;
            padding-left: 10vw;
        }
    }
    .anchor1 {
        background-image: url("https://cdn-icons-png.flaticon.com/512/9980/9980489.png");
    }
    .anchor2 {
        background-image: url("https://cdn-icons-png.flaticon.com/512/9980/9980463.png");
    }
    .anchor3 {
        background-image: url("https://cdn-icons-png.flaticon.com/512/9980/9980435.png");
    }
`;
//# sourceMappingURL=NavBar.js.map