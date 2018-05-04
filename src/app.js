import React from "react";
import ReactDOM from "react-dom";
import nin from'./css/base.less';
import { a } from "./common/index";
import App from "./component/index";


console.log(a());
const app = document.getElementById('box');
// app.innerHTML='<div class="'+base.box+'"></div>';
// app.appendChild(img);
console.log(nin);
app.className=nin.box;
let func=()=>{};
const NUM=45;
let arr = [1,2,3];
let arrB = arr.map(item=>item*2);
ReactDOM.render(<App />,app);