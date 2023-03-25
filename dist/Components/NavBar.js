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
    return ((0, jsx_runtime_1.jsxs)(NavBar_1.Container, { children: [(0, jsx_runtime_1.jsx)(NavBar_1.Title, { children: "PORTFOLIO" }), (0, jsx_runtime_1.jsxs)(NavBar_1.AnchorList, { children: [width > 900 && (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, Object.assign({ smooth: true, to: "/", onClick: () => viewOnChange(1) }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/icons/home-page.png" }) })) }), width > 900 ?
                        (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, Object.assign({ smooth: true, to: "/about", onClick: () => viewOnChange(2) }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/icons/hacker.png" }) })) }) :
                        view === 1 ?
                            (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, Object.assign({ smooth: true, to: "/about", onClick: () => viewOnChange(2) }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/icons/hacker.png" }) })) }) :
                            view === 2 ?
                                (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, Object.assign({ smooth: true, to: "/projects", onClick: () => viewOnChange(3) }, { children: (0, jsx_runtime_1.jsx)("img", { src: "icons/innovacion.png" }) })) }) :
                                (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, Object.assign({ smooth: true, to: "/", onClick: () => viewOnChange(1) }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/icons/home-page.png" }) })) }), width > 900 && (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, Object.assign({ smooth: true, to: "/projects", onClick: () => viewOnChange(3) }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/icons/innovacion.png" }) })) })] })] }));
};
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map