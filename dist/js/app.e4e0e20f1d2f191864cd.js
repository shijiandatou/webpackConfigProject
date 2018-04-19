webpackJsonp(["app"],{

/***/ "./src/app.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _base = __webpack_require__("./src/css/base.less");

var _base2 = _interopRequireDefault(_base);

var _index = __webpack_require__("./src/common/index.js");

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _index.a)());
var app = document.getElementById('box');
// app.innerHTML='<div class="'+base.box+'"></div>';
// app.appendChild(img);
app.className = _base2.default.box;
// let func=()=>{};
// const NUM=45;
// let arr = [1,2,3];
// let arrB = arr.map(item=>item*2);
// console.log(arrB);
// console.log(new Set(arrB));
console.log('afs213132131212');

/***/ }),

/***/ "./src/common/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.a = a;
exports.b = b;
exports.c = c;

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function a() {
    return 'this is a';
}
function b() {
    return 'this is b';
}
function c() {
    return 'this is c';
}

/***/ }),

/***/ "./src/css/base.less":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"box":"_3WjJSPQ7avk41MOrKKU-oQ","boxBig":"rR2dEqIoGGKEQ8lMReHCZ"};

/***/ })

},["./src/app.js"]);