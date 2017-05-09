/*
* @Author: Zervanto
* @Date:   2017-05-08 11:08:31
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-09 11:29:05
*/
const listarr =[
    "AAA",
    "BBB",
    "CCC",
    "DDD"
];
const Item = React.createClass({
    render(){
        let style = this.props.actived?{border:"1px solid green"}:{};
        return <li onClick={this.props.callback} style={style}>{this.props.name}</li>
    }
});
const Comp = React.createClass({
    getInitialState(){
        return {
            list:{}
        }
    },
    callback(item){
        alert(item.name)
    },
    componentWillMount(){
        this.state.list = this.props.data.map(item =>{
            return { name:item,actived:false}
        });
    },
    // componentWillMount(){
    //     this.state.list = this.props.data.map(function(item){
    //         return { name:item,actived:false}
    //     });
    // },
    componentDidMount(){
        setTimeout(()=>{
            this.state.list[1].actived = true;
            this.forceUpdate();
        },3000);
    },
    render(){
        return <ul>{this.state.list.map(
            item => <Item callback={this.callback.bind(this,item)} actived={item.actived} name={item.name}/>)}</ul>
    }
});
ReactDOM.render(
    <Comp data={listarr}/>,document.body
    );