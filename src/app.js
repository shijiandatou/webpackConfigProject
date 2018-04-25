import React,{Component} from "react";
import ReactDOM from "react-dom";
import nin from'./css/base.less';
import { a } from "./common/index";


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
console.log(arrB);
console.log(new Set(arrB));
class Button extends Component{
    constructor(){
        super();
        this.state={}
    }
    onClicka=()=>{
        console.log('我已经执行了!');
    }
    render(){
        return(
            <div>
                <button onClick={this.onClicka}>点击</button>
            </div>
        )
    }
}
console.log('afs213132131212');
ReactDOM.render(<Button />,app);