import SocialNetworkApp from './App';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
