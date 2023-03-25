"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_hash_link_1 = require("react-router-hash-link");
const Title_1 = require("../Styles/Title");
const Title = ({}) => {
    return ((0, jsx_runtime_1.jsxs)(Title_1.TitleContainer, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "PERSONAL" }), (0, jsx_runtime_1.jsx)(react_router_hash_link_1.HashLink, Object.assign({ smooth: true, to: "/contact", className: "anchor3" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "/icons/correo-electronico.png" }) }))] }));
};
exports.Title = Title;
//# sourceMappingURL=Title.js.map