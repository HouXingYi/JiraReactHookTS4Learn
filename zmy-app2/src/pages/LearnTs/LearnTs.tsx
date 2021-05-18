
// import { demo } from './demo'

import { Button, Row, Col, Divider } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import Tsclass from './tsclass';
import Staticclass2 from './static';

import Abstract from './abstract'
import UnionType from './unionType'
import Decorator from './decorator'


function LearnTs() {

  let { path } = useRouteMatch();

  // demo()

  return (
    <div className="App">
      学习TS
      <Router>
        <div>

          <div style={{margin: '50px'}}>
            <Row>
              <Col span={6}>
                <Button type="primary">
                  <Link to={`${path}/tsclass`}>tsclass</Link>
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary">
                  <Link to={`${path}/static`}>static</Link>
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary">
                  <Link to={`${path}/unionType`}>unionType</Link>
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary">
                  <Link to={`${path}/abstract`}>abstract</Link>
                </Button>
              </Col>
              <Col span={6}>
                <Button type="primary">
                  <Link to={`${path}/decorator`}>decorator装饰器</Link>
                </Button>
              </Col>
            </Row>
          </div>

          <Divider plain>Text</Divider>

          <Switch>
            <Route path={`${path}/tsclass`}>
              <Tsclass></Tsclass>
            </Route>
            <Route path={`${path}/static`}>
              <Staticclass2></Staticclass2>
            </Route>
            <Route path={`${path}/abstract`}>
              <Abstract></Abstract>
            </Route>
            <Route path={`${path}/unionType`}>
              <UnionType></UnionType>
            </Route>
            <Route path={`${path}/decorator`}>
              <Decorator></Decorator>
            </Route>
            <Route path={path}>
              <h3>请选择一个模块</h3>
            </Route>
          </Switch>
          
        </div>
      </Router>
    </div>
  );
}

export default LearnTs;
