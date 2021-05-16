import AddTodoApp from './components/AddTodoApp'
import TestRedux from './container/TestRedux'
import { TestHookRedux } from './components/TestHookRedux'
import HookTest from './components/HookTest'
import { Button, Row, Col, Divider } from 'antd';
import { Counter } from '@/features/counter/Counter';

import LearnTs from '@/pages/LearnTs/LearnTs';


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
                  <Link to="/counter">counter</Link>
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
              <Col span={6}>
                <Button type="primary">
                  <Link to="/learnTS">learnTS</Link>
                </Button>
              </Col>
            </Row>
          </div>
          

          <Divider plain>Text</Divider>

          <Switch>
            <Route path="/counter">
              <Counter /> 
            </Route>

            <Route path="/testHookRedux">
              <TestHookRedux></TestHookRedux>
              <div>TestHookRedux</div>
            </Route>
            <Route path="/hookTest">
              <HookTest></HookTest>
            </Route>
            <Route path="/addTodoApp">
              <AddTodoApp></AddTodoApp>
            </Route>
            <Route path="/learnTS">
              <LearnTs></LearnTs> 
            </Route>
            <Route path="/">
              <TestRedux></TestRedux>
              <div>TestRedux</div>
            </Route>
          </Switch>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
