"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_hash_link_1 = require("react-router-hash-link");
const NavBar_1 = require("../Styles/NavBar");
function NavBar() {
    return ((0, jsx_runtime_1.jsxs)(NavBar_1.Container, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.Title, { children: "PORTFOLIO" }), (0, jsx_runtime_1.jsxs)(NavBar_1.AnchorList, { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/home", className: "anchor1" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/projects", className: "anchor2" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/about", className: "anchor3" }) })] })] }));
}
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map