import importScript from './js/app';

test('start', () => {
  const result = importScript.startmain();

  expect(result).toBe(result);
});
