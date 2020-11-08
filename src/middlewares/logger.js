//Logger : A middleware
export function logger(fn) {
  return function (...rest) {
    console.group(fn.name);
    console.log({
      state: rest[0],
      action: rest[1],
    });
    console.groupEnd();
    return fn.apply(this, rest);
  };
}
