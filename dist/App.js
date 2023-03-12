"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Home_1 = __importDefault(require("./Components/Home"));
const AboutMe_1 = __importDefault(require("./Components/AboutMe"));
const App_1 = require("./Styles/App");
function App() {
    return ((0, jsx_runtime_1.jsxs)(App_1.AppStyle, { children: [(0, jsx_runtime_1.jsx)(Home_1.default, {}), (0, jsx_runtime_1.jsx)(AboutMe_1.default, {})] }));
}
exports.default = App;
