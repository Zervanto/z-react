/*
* @Author: Zervanto
* @Date:   2017-05-08 11:08:31
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-08 16:14:02
*/
const list =[
    "AAA",
    "BBB",
    "CCC",
    "DDD"
];
const Item = React.createClass({
    render(){
        let style = this.props.actived?{border:"1px solid green"}:{};
        return <li style={style}>{this.props.item}</li>
    }
});
const Comp = React.createClass({
    getInitialState(){
        return {
            list:[]
        }
    },
    componentWillMount(){
        this.state.list = this.props.data.map(item=>{return{name:item,actived:false}});
    },
    componentDidMount(){
        setTimeout(()=>{
            this.state.list[1].actived = true;
            this.forceUpdate();
        },3000);
    },
    render(){
        return <ul>{this.props.data.map(item =>{return <Item actived={item.actived} name={item.name}/>})}</ul>
    }
});
ReactDOM.render(
    <Comp data={list}/>,document.body
    );