/*
* @Author: Zervanto
* @Date:   2017-05-13 21:53:05
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-05-14 21:09:27
*/

import React, { Component, PropTypes } from 'react'

class Header extends Component {
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
      <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
    )
  }
}

export default Header