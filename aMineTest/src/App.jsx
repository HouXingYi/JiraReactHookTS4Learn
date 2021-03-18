
import React from 'react'

import './App.css';
import { Clock } from './components/Clock';
import { Clock2 } from './components/Clock2';
import { Button } from './components/Button';

import {ThemeContext} from './context'


export default class App extends React.Component {

  static contextType = ThemeContext;

  componentDidMount() {
    console.log('this.context', this.context)
  }

  render() {
    return (
      <div className="App">
        <Clock date={new Date()} />
        <Clock2 date={new Date()} />
        <span>分割线 ----- context ------- 测试</span> <br/>

        {this.context.theme.background} <br/>

        <span>分割线 ----- context ------- 测试222</span> <br/>

        <Button></Button>

        {/* 这里的theme变量是响应式的 */}
        <ThemeContext.Consumer>
          {({theme}) => {
            return (
              <div>{theme.background}</div>
            )
          }}
        </ThemeContext.Consumer>

      </div>
    )
  } 
}


