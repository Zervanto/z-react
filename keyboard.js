/*
* @Author: Zervanto
* @Date:   2017-05-05 17:30:32
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-07 20:30:09
*/
var Comp = React.createClass({
    getInitialState(){
        return{
            top:0,
            left:0
        }
    },
    handlekeyup(e){
        switch(e.keyCode){
            case 37:
                this.setState({left:this.state.left-5});break;
            case 38:
                this.setState({top:this.state.top-5});break;
            case 39:
                this.setState({left:this.state.left+5});break;
            case 40:
                this.setState({top:this.state.top+5});break;
        }
    },
    render(){

        return (
            <div style={{width:"450px",
            height:"450px",
            position:"relative",
            background:"yellow"}} tabIndex={1} onKeyUp={this.handlekeyup}>
                < div style={
                {position:'absolute',
                width:"10px",
                height:"10px",
                top:this.state.top+'px',
                left:this.state.left+'px',
                background:"red"}}>
                </div>
            </div>
            );
    }
});
ReactDOM.render(
    <Comp/>,
    document.getElementById('app')
);