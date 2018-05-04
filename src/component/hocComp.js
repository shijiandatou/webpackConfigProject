import React,{ Component } from "react";

const HOC = (Comp)=>{
    return class prxoxy extends Component{
        componentDidMount(){
            console.log('我现在是好的');
        }
        render(){
            return(
               <div>
                   <p>我是高阶组件</p>
                    <Comp />   
                </div> 
            )
        }
    }
};
export default HOC;
