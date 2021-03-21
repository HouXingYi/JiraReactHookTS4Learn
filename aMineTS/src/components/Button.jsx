import React from 'react'

import {ThemeContext} from '../context'


export class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  static contextType = ThemeContext;

  componentDidMount() {
    console.log(this.context)
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <button onClick={this.context.toggleTheme}>这是一个按钮</button>
      </div>
    );
  }
}
