import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Content from './content.js'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const themeReducer = (state,action)=>{
  if(!state){
    return {
      themeColor:'#555'
    }
  }
  switch(action.type){
    case 'CHANGE_COLOR':
      return{...state,themeColor:action.themeColor}
    default:
      return state
  }
}
const store = createStore(themeReducer)
class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
    </Provider>,
  document.getElementById('root')
)