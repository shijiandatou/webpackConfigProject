import React,{ Component } from "react";
//import hocComp from "./hocComp";使用装饰器 使用高级组件 @hocComp;
import { observer } from "mobx-react";

//这是观察者 数据一边变化的时候 就会重新渲染页面
@observer
export default class Todo extends Component{
    onButtonClick=()=>{
        this.props.store.changeTodoTitle({index:3,title:'我已经被改变了'})
    }
    render(){
        console.log('this.props',this.props.store);
        return(
            <div>
                <ul>
                    {   //这是进行数据展示的
                        this.props.store.unfinishedTodos.map((a,i)=><li key={i}>{a.title}</li>)
                    }
                </ul>
                <button onClick={this.onButtonClick}>点击我</button>
            </div>
        )
    }
}