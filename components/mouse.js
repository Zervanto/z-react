/*
* @Author: Zervanto
* @Date:   2017-05-07 21:13:55
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-08 10:46:25
*/
const data = new Map();
data.set('id001','id001');
data.set('id002','id002');
data.set('id003','id003');
data.set('id004','id004');
const DND = React.createClass({
    getInitialState(){
        return {
            dragId:null,
            rightdata:this.props.data,
            leftdata:new Map()
        }
    },
    drag(e){
        this.state.dragId = e.target.id;
    },
    dropleft(e){
        var value = this.state.rightdata.get(this.state.dragId);
        this.state.leftdata.set(this.state.dragId,value);
        this.state.rightdata.delete(this.state.dragId);
        this.forceUpdate();
    },
    dropright(e){
        var value = this.state.leftdata.get(this.state.dragId);
        this.state.rightdata.set(this.state.dragId,value);
        this.state.leftdata.delete(this.state.dragId);
        this.forceUpdate();
    },
    render(){
        const rightList = [];
        const leftList = [];
        for(let item of this.state.rightdata){
            rightList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
                );
        }
        for(let item of this.state.leftdata){
            leftList.push(
                <p draggable={true} onDragStart={this.drag} id={item[0]}>{item[1]}</p>
                );
        }
        return(
        <div>
            <div id="leftsection"
                 onDragEnter={e=>e.preventDefault()}
                 onDragOver={e=>e.preventDefault()}
                 onDrop={this.dropleft}>{leftList}</div>
            <div id="rightsection"
                 onDragEnter={e=>e.preventDefault()}
                 onDragOver={e=>e.preventDefault()}
                 onDrop={this.dropright}>{rightList}</div>
        </div>
              )
    }
});
ReactDOM.render(<DND data={data}/>,document.getElementById('app'));