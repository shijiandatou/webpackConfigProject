import { observable, action, computed } from "mobx";

export default class Store{
    //被观察的数据
    @observable todo=[{
        title:'完成Mobx翻译',
        done:false
    },{
        title:'完成Mobx翻译2',
        done:true
    },{
        title:'完成Mobx翻译3',
        done:true
    },{
        title:'完成Mobx翻译4',
        done:true
    }];
    //通过action可以该state
    @action changeTodoTitle({index,title}){
        return this.todo[index].title=title;
    };
    @computed get unfinishedTodos(){
        return this.todo.filter((to)=>to.done)
    }
}
