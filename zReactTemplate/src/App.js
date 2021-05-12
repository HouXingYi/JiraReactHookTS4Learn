import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'

import { getBannerData, hot } from './request/api'
import { useEffect } from 'react';

// 获取赛事轮播图数据
async function getBannerData2 () {
  console.log('getBannerData2!')
  const params = {
    aid: 1
  }
  getBannerData(params).then((res) => {
    console.log('res222', res)
    // this.bannerList = res.data
  }).catch(err => {
    console.log('banner', err)
  })

  let res = await hot()
  console.log('res333', res)
}


// 函数式组件

function App() {

  let [a, seta] = useState(0)
  let [b, setb] = useState(0)

  // mounted生命周期  
  useEffect(() => {
    console.log('mounted!')
    getBannerData2()
  }, [])
  
  useEffect(() => {
    // getBannerData2()
    console.log('a 依赖 更新')
  }, [a])

  useEffect(() => {
    // getBannerData2()
    console.log('b 依赖 更新')
  }, [b])

  setTimeout(() => {
    seta(200)
  }, 1000)

  setTimeout(() => {
    setb(200)
  }, 3000)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          { a }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


// class组件

// class App extends React.Component {

//   componentDidMount() {
//     getBannerData2()
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     )
//   }
// }

export default App;
