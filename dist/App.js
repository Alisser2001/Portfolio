"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Home_1 = require("./Components/Home");
const NavBar_1 = require("./Components/NavBar");
const react_router_dom_1 = require("react-router-dom");
const AboutMe_1 = require("./Components/AboutMe");
const App_1 = require("./Styles/App");
const App = ({}) => {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(App_1.AppStyle, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.NavBar, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", Component: Home_1.Home }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/about", Component: AboutMe_1.AboutMe })] })] }) }));
};
exports.default = App;
//# sourceMappingURL=App.js.map