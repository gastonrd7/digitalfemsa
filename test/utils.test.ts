import { formatDate, formatNumber } from '../src/utils';

test('Fecha: 9 de Diciembre, 2022', () => {
    expect(formatDate('2022-12-09T06:34:25.607Z')).toBe('9 de Diciembre, 2022');
});

test('Numeros: 100000', () => {
    expect(formatNumber(100000)).toBe('100,000.00');
});

test('Numeros: 100000.22', () => {
    expect(formatNumber(100000.22)).toBe('100,000.22');
});