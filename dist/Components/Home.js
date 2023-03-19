"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const LastName_1 = require("./LastName");
const Name_1 = require("./Name");
const Home_1 = require("../Styles/Home");
const Title_1 = require("./Title");
const Home = ({}) => {
    return ((0, jsx_runtime_1.jsxs)(Home_1.HomeStyle, Object.assign({ id: "home" }, { children: [(0, jsx_runtime_1.jsx)(Title_1.Title, {}), (0, jsx_runtime_1.jsx)(Name_1.Name, {}), (0, jsx_runtime_1.jsx)(LastName_1.LastName, {})] })));
};
exports.Home = Home;
//# sourceMappingURL=Home.js.map