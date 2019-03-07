const helloWorld = require('./functions');

test('Verifies that helloWorld() returns the correct string', () => {
  expect(helloWorld()).toBe("Hello World");
});