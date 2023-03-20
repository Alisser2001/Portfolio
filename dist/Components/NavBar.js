"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_hash_link_1 = require("react-router-hash-link");
const NavBar_1 = require("../Styles/NavBar");
const NavBar = ({}) => {
    const [view, setView] = (0, react_1.useState)(1);
    const viewOnChange = (view) => {
        setView(view);
    };
    const width = window.innerWidth;
    return ((0, jsx_runtime_1.jsxs)(NavBar_1.Container, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.Title, { children: "PORTFOLIO" }), (0, jsx_runtime_1.jsxs)(NavBar_1.AnchorList, { children: [width > 900 && (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/", className: "anchor1", onClick: () => viewOnChange(1) }) }), width > 900 ?
                        (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/about", className: "anchor2", onClick: () => viewOnChange(2) }) }) :
                        view === 1 ?
                            (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/about", className: "anchor2", onClick: () => viewOnChange(2) }) }) :
                            view === 2 ?
                                (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/projects", className: "anchor3", onClick: () => viewOnChange(3) }) }) :
                                (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/", className: "anchor1", onClick: () => viewOnChange(1) }) }), width > 900 && (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, { smooth: true, to: "/projects", className: "anchor3", onClick: () => viewOnChange(3) }) })] })] }));
};
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map