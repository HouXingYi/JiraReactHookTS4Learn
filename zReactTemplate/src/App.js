import logo from './logo.svg';
import './App.css';

import { getBannerData } from './request/api'

function App() {

  // 获取赛事轮播图数据
  function getBannerData2 () {
    const params = {
      aid: 1
    }
    getBannerData(params).then((res) => {
      console.log(res)
      // this.bannerList = res.data
    }).catch(err => {
      console.log('banner', err)
    })
  }
  getBannerData2()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
