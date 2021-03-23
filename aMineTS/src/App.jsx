import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { Alert } from 'antd';

import TestType from 'components/TestType.tsx';
import TestHookAndContext from 'components/TestHookAndContext.jsx';

import { Menu } from 'antd';
import { useState } from "react";

import { Counter } from 'views/counter/Counter'

import { useSelector } from 'react-redux';
import {
  selectCount,
} from 'views/counter/counterSlice';


export default function App() {

  const [current, setKey]= useState('Home')

  function handleClick (e) {
    console.log('click ', e);
    setKey(e.key);
  };
  
  return (
    <Router>
      <div>

        <Alert message="路由菜单" type="success"></Alert>
        <div>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="Home" >
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="About" >
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="testTypes" >
              <Link to="/testTypes">testTypes</Link>
            </Menu.Item>
            <Menu.Item key="TestHookAndContext" >
              <Link to="/TestHookAndContext">TestHookAndContext</Link>
            </Menu.Item>
            <Menu.Item key="Topics" >
              <Link to="/topics">Topics</Link>
            </Menu.Item>
          </Menu>
        </div>


        <br/>
        <br/>

        <div>----------------------  分割线  ---------------</div>
        <br/>
        <br/>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/testTypes">
            <TestType />
          </Route>
          <Route path="/TestHookAndContext">
            <TestHookAndContext />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

function Home() {
  return <h2>
    <Counter></Counter>
  </h2>;
}

function About() {
  const count = useSelector(selectCount);
  return (
    <h2>
      <div style={{
        color: 'red', 
        fontSize: '26px'
      }}>
          {count}
      </div>
      About
    </h2>
  );
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}