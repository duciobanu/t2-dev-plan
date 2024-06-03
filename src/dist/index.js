"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
var domNode = document.getElementById('root');
var root = client_1.createRoot(domNode);
root.render(react_1["default"].createElement(App_tsx_1["default"], null));
