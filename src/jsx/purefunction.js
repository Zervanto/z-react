function pureFn(state){
    //1.创建一个新state
    let num = ++state.num;
    return {
        num
    }
    //2.返回原来的state
    // return state
}
   let state = {
        aaa:{name:'Zervanto'},
        bbb:{group:'javascript'},
        ccc:{age:23}
    }
function store(){

    const keys = Object.keys(updaters);
    keys.forEach(key=>{
        let updater= updaters[key];
        let value = state[key];
        let newSubState[key];
        newState[key]=newSubState;
    });
    Object.assign({},state,newState);
    console.log(newState);
}
function aaaUpdater(substate){

}
function bbbUpdater(substate){

}