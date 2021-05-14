import React, { useState } from 'react'

import { getBannerData, hot } from '../request/api'
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

function HookTest() {

  let [adata, seta] = useState(0)
  let [bdata, setb] = useState(0)

  // mounted生命周期  
  useEffect(() => {
    console.log('mounted!')
    getBannerData2()
  }, [])
  
  useEffect(() => {
    console.log('a 依赖 更新')
  }, [adata])

  useEffect(() => {
    console.log('b 依赖 更新')
  }, [bdata])

  setTimeout(() => {
    seta(200)
  }, 1000)

  setTimeout(() => {
    setb(200)
  }, 3000)

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
        a: { adata } <br/>
        b: { bdata }
      </p>
    </div>
  );
}

export default HookTest;
