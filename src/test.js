import importScript from './js/app';

test.each([
  ['true for valid ', '4916109847391848', true],
  ['false for invalid ', '7715964999', false],
])(('it should be %s'), (_, input, expected) => {
  expect(importScript.moonAlgorithm(input)).toBe(expected);
});

test.each([
  ['visa', '4916109847391848', 'visa'],
  ['amex', '374416078281322', 'amex'],
  ['diners', '36859517333669', 'diners'],
  ['electron', '4508084156751755', 'electron'],
  ['maestro', '5018710206034665', 'maestro'],
  ['mastercard', '5491529392439017', 'mastercard'],
  ['mir', '2345678998765432', 'mir'],
  ['unionpay', '7715964999', 'unionpay'],
  ['jsb', '3531547973796453', 'jsb'],
])(('it should be %s'), (_, input, expected) => {
  expect(importScript.detectCardType(input)).toBe(expected.mask);
});
