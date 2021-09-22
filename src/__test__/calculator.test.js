import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/calculator';
import operate from '../logic/operate';

describe( 'operator.js tests', () => {
  test('Render Calculator', () => {
    const component = render(<Calculator />);
    expect(component.container).toHaveTextContent(`Let's do some Math!`);
    expect(component.container).toHaveTextContent('1');
    expect(component.container).toHaveTextContent('0');
    expect(component.container).toHaveTextContent('AC');
  });

  test('sum', () => {
    // operate(numberOne, numberTwo, operation)
    expect(operate(5, 4, '+')).toBe('9');
  });
}
)