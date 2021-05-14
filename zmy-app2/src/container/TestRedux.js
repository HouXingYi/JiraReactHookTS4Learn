import React, { Component } from "react";

import { connect } from "react-redux";

import { authActions, login as loginThunk } from "@/store/auth.slice";


class TestRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
    // console.log('props', props)
  }

  render() {

    const {
      user,
      setUser,
      login
    } = this.props;

    return (
      <div>
        TestRedux <br/>
        user: { user?.abc } <br/>
        <button onClick={setUser}>点击试试setUser</button>
        <button onClick={login}>点击试试login</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: () => {
      console.log('login!!', authActions)
      dispatch(authActions.setUser({abc: 123}))
    },
    login: () => {
      console.log('login thunk')
      dispatch(loginThunk())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);
