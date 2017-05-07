const Form = React.createClass({
  getinitalState(){
    return {
      inputValue:'leo'
    }
  },
  changeHandle(e){
     this.setState({
       inputValue:e.target.value
     });
  },
  changeCheckboxHandle(){
    this.setState({
      checkboxValue:!this.state.checkboxValue
    });
  },
  changeRadioHandle(){
    this.setState({
      radioValue:!this.state.radioValue
    });
  },
  render(){
    return <form>
        <input type="text" defaultValue="abc" onChange={this.changeHandle2}/>
        
        <input type="checkbox"/>
        <input type="radio"/>
        <select>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
  }
});
ReactDOM.render(
  < Form />,
  document.getElementById('app');
);
