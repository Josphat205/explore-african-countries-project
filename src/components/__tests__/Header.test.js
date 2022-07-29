import Header from "../Header";
import renderer from 'react-test-renderer';
import store from "../../redux/configureStore";
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('Test header', () => {
    it('test if the heander is rendered correctly', () => {
      const header = renderer
        .create(
          <Provider store={store}>
            <Router>
              <Header />
            </Router>
          </Provider>,
        )
        .toJSON();
      expect(header).toMatchSnapshot();
    });
  });
  