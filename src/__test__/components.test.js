import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';
import Home from '../pages/home';
import Quote from '../pages/quote';
import App from '../App';

describe('Test snapshot', () => {
  test('Render Home', () => {
    const component = render(<Home />);
    expect(component.container).toHaveTextContent('Welcome to our page!');
  });

  test('Render Calculator', () => {
    const component = render(<Calculator />);
    expect(component.container).toHaveTextContent('Let`s do some Math!');
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
