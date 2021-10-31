const { topla, cikar, carp, bol } = require('./mathlib');

describe('Dört işlem testleri', () => {
  test('topla fonksiyonu parametre olarak aldığı iki sayısal değeri toplamalıdır.', () => {
    expect(topla(1, 2)).toBe(3);
  });

  test('cikar fonksiyonu parametre olarak aldığı iki sayısal değeri birbirinden çıkarmalıdır.', () => {
    expect(cikar(1, 2)).toBe(-1);
  });

  test('carp fonksiyonu parametre olarak aldığı iki sayısal değeri çarpmalıdır.', () => {
    expect(carp(5, 1)).toBe(5);
    expect(carp(5, 0)).toBe(0);
  });

  test('bol fonksiyonu parametre olarak aldığı iki sayısal değeri birbirine bölmelidir.', () => {
    expect(bol(5, 1)).toBe(5);
    expect(bol(5, 0)).toBe(Infinity);
  });
});

describe('X testleri', () => {
  //....
});
