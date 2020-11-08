//Logger : A middleware
export function demo(fn) {
  return function (...rest) {
    console.log("Demo middleware", rest);
    return fn.apply(this, rest);
  };
}
