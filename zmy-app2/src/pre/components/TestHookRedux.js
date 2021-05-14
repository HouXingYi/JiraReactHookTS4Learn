import { useDispatch, useSelector } from "react-redux";

import { authActions, login as loginThunk, selectUser } from "../../app/auth.slice";


export const TestHookRedux = () => {

  let user = useSelector(selectUser)

  const dispatch = useDispatch();
  return (
    <div>
      123456 <br/>
      <button onClick={()=>{dispatch(authActions.setUser({abc: 555}))}}>可以点击</button> <br/>
      <button onClick={()=>{dispatch(loginThunk())}}>可以点击2</button> <br/>
      user: { user?.abc }
    </div>
  );
};
