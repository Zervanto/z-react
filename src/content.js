/*
* @Author: Zervanto
* @Date:   2017-05-13 21:54:15
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-14 21:09:36
*/

import React, { Component, PropTypes } from 'react'
import ThemeSwitch from './themeSwitch.js'

class Content extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount () {
    const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }
  _updateThemeColor () {
    const { store } = this.context
    const state = store.getState()
    this.setState({ themeColor: state.themeColor })
  }

  render () {
    return (
      <div>
        <p style={{ color: this.state.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}
export default Content