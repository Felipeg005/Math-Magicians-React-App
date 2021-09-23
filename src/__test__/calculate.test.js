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

  test('Operate 2÷2', () => {
    const obj = {
      total: '2',
      next: '2',
      operation: '÷',
    };
    expect(calculate(obj, '=').total).toBe('1');
  });

  test('Operate 2÷-2', () => {
    const obj = {
      total: '2',
      next: '-2',
      operation: '÷',
    };
    expect(calculate(obj, '=').total).toBe('-1');
  });

  test('Fails operating 2÷0', () => {
    const obj = {
      total: '2',
      next: '0',
      operation: '÷',
    };
    expect(calculate(obj, '=').total).toBe("Can't divide by 0.");
  });
  
  test('Press +/-', () => {
    const obj = {
      total: '3',
      next: null,
      operation: null,
    };
    expect(calculate(obj, '+/-').total).toBe('-3');
  });

  test('Press +/- with object on next', () => {
    const obj = {
      total: null,
      next: '3',
      operation: null,
    };
    expect(calculate(obj, '+/-').next).toBe('-3');
  });

  test('Press +/- with 0 loaded', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    expect(calculate(obj, '+/-').next).toBe('0');
  });

  test('Operate 10 % 200', () => {
    const obj = {
      total: '200',
      next: '10',
      operation: '%',
    };
    expect(calculate(obj, '=').total).toBe('0');
  });

  test('Operate 200 % 10', () => {
    const obj = {
      total: '10',
      next: '200',
      operation: '%',
    };
    expect(calculate(obj, '=').total).toBe('10');
  });

});
