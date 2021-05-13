import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 这个对应每个action，里面对应每个reducer
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

const { setUser } = authSlice.actions;


// 这之后属于redux-thunk的内容了，异步操作
// 获取user
export const selectUser = (state) => state.auth.user;

// 柯里化
export const login = (form) => (dispatch) => {
  console.log('login form!')
  setTimeout(() => {
    console.log('login!')
    let user = {abc: 333}
    dispatch(setUser(user))
  }, 1000)
}

export const register = (form) => (dispatch) => {
  console.log(form)
  let user = {}
  dispatch(setUser(user))
}

export const logout = () => (dispatch) => {
  let user = null
  dispatch(setUser(user))
}
  
export const bootstrap = () => (dispatch) => {
  let user = {}
  dispatch(setUser(user))
}
