import {
    render, screen,
  } from '@testing-library/react';
  import { Provider } from 'react-redux';
  import '@testing-library/jest-dom/extend-expect';
  import CountryList from '../../CountryList';
  import store from '../../../redux/configureStore'
  
  describe('app check', () => {
    test('CountryList component', () => {
      render(<Provider store={store}><CountryList/></Provider>);
      expect(screen.getByTestId('lookingBugs')).toBeInTheDocument();
    });
  });
  