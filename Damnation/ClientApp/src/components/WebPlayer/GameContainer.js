"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//import { connect } from "react-redux";
var DamnationWebPlayer_1 = require("./DamnationWebPlayer");
var GameContainer = /** @class */ (function (_super) {
    __extends(GameContainer, _super);
    function GameContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameContainer.prototype.render = function () {
        return (React.createElement("div", { className: "GameContainer nes-container is-dark is-rounded" },
            React.createElement(DamnationWebPlayer_1.default, __assign({}, this.props))));
    };
    return GameContainer;
}(React.Component));
exports.default = GameContainer;
//# sourceMappingURL=GameContainer.js.map