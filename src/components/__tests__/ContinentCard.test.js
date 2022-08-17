import { render } from '@testing-library/react';
import ContinentCard from '../ContinentCard';

describe('testing components', () => {
  test('card component', () => {
    const { getAllByText } = render(<ContinentCard />);
    const content = getAllByText('AFRICAN COUNTRIES');
    console.log(content.children);
    expect(content).toBeTruthy();
  });
});
