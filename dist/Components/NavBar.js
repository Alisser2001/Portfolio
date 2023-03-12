"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const NavBar_1 = require("../Styles/NavBar");
function NavBar() {
    return ((0, jsx_runtime_1.jsxs)(NavBar_1.Container, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.Title, { children: "PORTFOLIO" }), (0, jsx_runtime_1.jsxs)(NavBar_1.AnchorList, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: " ", className: "anchor1" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: " ", className: "anchor2" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: " ", className: "anchor3" }) })] })] }));
}
exports.default = NavBar;
