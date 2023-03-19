"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_hash_link_1 = require("react-router-hash-link");
const NavBar_1 = require("../Styles/NavBar");
const NavBar = ({}) => {
    return ((0, jsx_runtime_1.jsxs)(NavBar_1.Container, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.Title, { children: "PORTFOLIO" }), (0, jsx_runtime_1.jsxs)(NavBar_1.AnchorList, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/", className: "anchor1" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/about", className: "anchor2" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/projects", className: "anchor3" }) })] })] }));
};
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map