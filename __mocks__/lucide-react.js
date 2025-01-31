module.exports = new Proxy(
  {},
  {
    get: (target, prop) => () => `mock-:${prop}`,
  },
);
