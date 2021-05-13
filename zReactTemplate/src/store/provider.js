import { Provider } from "react-redux";
import { store } from "./index";

export const AppProviders = ({ children }) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
