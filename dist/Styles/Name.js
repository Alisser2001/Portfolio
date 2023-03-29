"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameContainer = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    display: flex;
    flex-direction: row;
    justify-content: initial;
    width: 100vw;
    height: 25vh;
    border-bottom: rgb(252,204,4) 5px solid;
    position: absolute;
    top: 50vh;
    box-sizing: border-box;
    animation: slideName 1s backwards;
    @keyframes slideName{
    from{
        top: 100vh;
    }
    to{
        top: 50vh;
    }
}
`;
exports.NameContainer = (0, styled_components_1.default)(exports.Container) `
    h1{
        all: unset;
        display: flex;
        align-items: center;
        font-size: 8vw;
        height: 25vh;
        padding: 0px 100px;
        color: white;
        border-right: rgb(252,204,4) 5px solid;
        box-sizing: border-box;
        font-weight: 600;
    }
    @media(max-width: 900px){
        h1{
            font-size: 8vw;
            padding: 0px 50px;
        }
    }
    @media(max-width: 600px){
        h1{
            font-size: 8vw;
            padding: 0px 50px;
        }
    }
`;
//# sourceMappingURL=Name.js.map