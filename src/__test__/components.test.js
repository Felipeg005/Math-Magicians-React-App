import React from 'react'; // eslint-disable-line
import { render } from '@testing-library/react'; // eslint-disable-line
import '@testing-library/jest-dom/extend-expect'; // eslint-disable-line
import Calculator from '../components/calculator'; // eslint-disable-line
import Home from '../pages/home'; // eslint-disable-line
import Quote from '../pages/quote'; // eslint-disable-line
import renderer from 'react-test-renderer'; // eslint-disable-line
import App from '../App'; // eslint-disable-line

describe('Test snapshot', () => {
  test('Render Home', () => {
    const component = render(<Home />);
    expect(component.container).toHaveTextContent('Welcome to our page!');
  });

  test('Render Calculator', () => {
    const component = render(<Calculator />);
    expect(component.container).toHaveTextContent(`Let's do some Math!`); // eslint-disable-line
    expect(component.container).toHaveTextContent('1');
    expect(component.container).toHaveTextContent('0');
    expect(component.container).toHaveTextContent('AC');
  });

  test('Render Calculator', () => {
    const component = render(<App />);
    expect(component.container).toHaveTextContent('Home');
    expect(component.container).toHaveTextContent('Calculator');
    expect(component.container).toHaveTextContent('Quote');
  });

  test('Render Quote', () => {
    const component = render(<Quote />);
    expect(component.container).toHaveTextContent('Albert Einstein');
  });

  test('Snapshot', () => {
    const component = renderer.create(< App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
