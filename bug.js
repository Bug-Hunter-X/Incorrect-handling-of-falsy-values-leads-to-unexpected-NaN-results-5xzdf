function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: should handle other falsy values
  }
  return a + b;
}

console.log(foo(0, 1)); // 0
console.log(foo(1, 0)); // 0
console.log(foo(false, 1)); // NaN (unexpected)
console.log(foo(1, false)); // NaN (unexpected)