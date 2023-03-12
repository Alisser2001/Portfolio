"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LastName_1 = __importDefault(require("./LastName"));
const Name_1 = __importDefault(require("./Name"));
const Home_1 = require("../Styles/Home");
const Title_1 = __importDefault(require("./Title"));
const NavBar_1 = __importDefault(require("./NavBar"));
function Home() {
    return ((0, jsx_runtime_1.jsxs)(Home_1.HomeStyle, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.default, {}), (0, jsx_runtime_1.jsx)(Title_1.default, {}), (0, jsx_runtime_1.jsx)(Name_1.default, {}), (0, jsx_runtime_1.jsx)(LastName_1.default, {})] }));
}
exports.default = Home;
