const toKey = args => Object.values(args).join('_');

export const cache = fn => (() => {
  const storage = {};

  return args => {
    const key = toKey(args);
    return (storage[key]) ? storage[key] : storage[key] = fn(args);
  };
})();
