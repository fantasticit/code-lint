export const pipe = async (...fns) => {
  let current = null;

  for (const fn of fns) {
    if (typeof fn === 'function') {
      /* eslint-disable no-await-in-loop */
      current = await fn(current);
    } else {
      current = fn;
    }
  }
};
