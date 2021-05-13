import './App.css';

import AddTodoApp from './components/AddTodoApp'
import TestRedux from './components/TestRedux'
import { TestHookRedux } from './components/TestHookRedux'
import HookTest from './components/HookTest'
import { Button, Row, Col, Divider } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// 函数式组件

function App() {

  return (
    <div className="App">
      <Router>
        <div>

          <div style={{margin: '50px'}}>
            <Row>
              <Col span={6}>
                <Button type="primary">
                  <Link to="/">home</Link>
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary">
                  <Link to="/testHookRedux">TestHookRedux</Link>
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary">
                  <Link to="/hookTest">HookTest</Link>
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary">
                  <Link to="/addTodoApp">AddTodoApp</Link>
                </Button>
              </Col>
            </Row>
          </div>
          

          <Divider plain>Text</Divider>

          <Switch>
            <Route path="/testHookRedux">
              <TestHookRedux></TestHookRedux>
            </Route>
            <Route path="/hookTest">
              <HookTest></HookTest>
            </Route>
            <Route path="/addTodoApp">
              <AddTodoApp></AddTodoApp>
            </Route>
            <Route path="/">
              <TestRedux></TestRedux>
            </Route>
          </Switch>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
