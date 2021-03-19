import React, { useState, useEffect } from 'react';
import { useRandom } from '../hook/index'

export function HookDemo() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  // 第一次或者刷新，都会调用
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  const r = useRandom(count)

  function onClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <div>hook中返回的随机数 {r}</div>
      <button onClick={onClick}>
        Click me
      </button>
    </div>
  );
}