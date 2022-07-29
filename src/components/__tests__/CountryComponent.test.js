import {
    render, screen,
  } from '@testing-library/react';
  import { Provider } from 'react-redux';
  import store from '../../redux/configureStore';
  import '@testing-library/jest-dom/extend-expect';
  import CountryComponent from '../CountryComponent'
  
  describe('app check', () => {
    test('CountryComponent', () => {
      render(<Provider store={store}><CountryComponent/></Provider>);
      expect(screen.getByTestId('cheking-test')).toBeInTheDocument();
    });
  });
  
