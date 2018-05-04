import React,{Component} from "react";
import ReactDOM from "react-dom";
import Todo from './todo';
import Store from "./store";

const store =new Store();
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
                <Todo store={store}/>
            </div>
        )
    }
}
export default Button;