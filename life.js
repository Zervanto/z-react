// class Life extends React.Component{
//   constructor(props){
//        super(props)
//        console.log("构造函数")
//        // 初始化了我们的state，这是被推荐的写法
//        this.state = {
//            props1:"初始化state"
//        }
//    }
//
//    static defaultProps = {
//        name: "Zervanto",
//        age: 23
//    }
//
//    // 组件将要被渲染到真实的dom节点中
//    componentWillMount(){
//        console.log("componentWillMount");
//    }
//    // 组件已经插入到真实的dom节点中
//    componentDidMount(){
//        console.log("componentDidMount");
//    }
//    // 组件是否要被重新渲染
//    shouldComponentUpdate(){
//        console.log("shouldCompontentUpdate");
//        return true;
//    }
//    // 组件将要被重新渲染
//    componentWillUpdate(){
//        console.log("conpontentWillUpdate");
//    }
//    // 组件已经被重新渲染
//    componentDidUpdate(){
//        console.log("conpontentDidUpdate");
//    }
//    // 组件将要接受到新属性
//    componentWillReceiveProps(){
//        console.log("compintentWillReceiveProps");
//    }
//    click1 = ()=>{
//        console.log("点击了单击事件");
//        this.setState({
//            props1:"改变state的值"
//        })
//        console.log("点击了单击事件结束");
//    }
//    render() {
//        console.log("render");
//        return (
//            <div>
//                <h1 onClick={this.click1}>{this.state.props1}</h1>
//            </div>
//        )
//    }
// }




//es5版本

var Life = React.createClass({
   getDefaultProps(){
       console.log("getDefaultProps");
   },
   getInitialState(){
       console.log("getInitialState");
       return {
           prop1:"初始化state"
       }
   },
   componentWillMount(){
       console.log("componentWillMount");
   },
   componentDidMount(){
       console.log("componentDidMount");
   },
   shouldComponentUpdate(){
       console.log("shouldComponentUpdate");
       return true;
   },
   componentWillUpdate(){
       console.log("componentWillUpdate");
   },
   componentDidUpdate(){
        console.log("componentDidUpdate");
   },
   componentWillReceiveProps(){
       console.log("componentWillReceiveProps");
   },
   click1(){
       console.log('点击事件');
       this.setState({
           props1:'改变state的值'
       });
       console.log("2");
       console.log(this.state.props1);
   },
   render(){
       console.log("render");
       return (
          <div>
               <h1 onClick={this.click1}>{this.state.props1}</h1>
           </div>
       )
   }
});
ReactDOM.render(
  < Life/>,
  document.getElementById('app'))
