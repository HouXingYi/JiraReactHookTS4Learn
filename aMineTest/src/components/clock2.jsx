import React from 'react'

export class Clock2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    // 等五秒后再计时
    setTimeout(() => {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {

    const numbers = [1, 2, 3, 4, 5];

    return (
      <div>
        <div> 手动切割线 ---------------------  这是分割线 ------------------------- </div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString() + 5}.</h2>
        <ul>
          {
            numbers.map((number) =>
              <li key={number.toString()}>{number}</li>
            )
          }
        </ul>
      </div>
    );
  }
}
