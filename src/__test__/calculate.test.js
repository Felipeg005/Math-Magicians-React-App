import calculate from '../logic/calculate';

describe('operator.js tests', () => {
  test('AC', () => {
    expect(calculate({}, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('.', () => {
    const obj = {
      total: null,
      next: '0.',
      operation: null,
    };
    expect(calculate(obj, '.')).toStrictEqual({
      total: null,
      next: '0.',
      operation: null,
    });
  });

  test('0', () => {
    expect(calculate({}, '0')).toStrictEqual({
      next: '0',
      total: null,
    });
  });

  test('Sum 5 + 2', () => {
    const obj = {
      total: '5',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, '=').total).toBe('7');
  });

  test('Multiply 3 x 3', () => {
    const obj = {
      total: '3',
      next: '3',
      operation: 'x',
    };
    expect(calculate(obj, '=').total).toBe('9');
  });

  test('Subtract 3 - 1', () => {
    const obj = {
      total: '3',
      next: '1',
      operation: '-',
    };
    expect(calculate(obj, '=').total).toBe('2');
  });

  test('Press 5', () => {
    const obj = {
      total: '3',
      next: null,
      operation: '-',
    };
    expect(calculate(obj, '5').next).toBe('5');
  });

  test('Press +', () => {
    const obj = {
      total: '3',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '+').operation).toBe('+');
  });
});
