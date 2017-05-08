/*
* @Author: Zervanto
* @Date:   2017-05-03 21:45:33
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-03 21:56:23
*/

const Comp = React.createClass({
    click(){
        this.refs.myinput.focus();
    },
    componentDidMount(){
        this.refs.myinput2.focus();
        console.log('component did mount');
    },
    render(){
        return <div>
        <input ref={fucntion(dom){dom.focus();console.log('ref fucntion ')}} />
        <input ref="myinput"/>
        <input ref="myinput2"/>
        <button onClick={this.click}>click me!</button>
        </div>
    }
});