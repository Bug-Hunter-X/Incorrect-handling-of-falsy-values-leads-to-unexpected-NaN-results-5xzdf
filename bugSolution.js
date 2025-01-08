function foo(a, b) {
  //Improved solution using explicit checks
  if(a == false || b == false || isNaN(a) || isNaN(b)){
    return 0; //Or handle falsy values appropriately
  } else {
    return a + b;
  }
}

console.log(foo(0, 1)); // 0
console.log(foo(1, 0)); // 0
console.log(foo(false, 1)); // 0
console.log(foo(1, false)); // 0
console.log(foo(null,1)); // 0
console.log(foo(1, null)); // 0
console.log(foo('',1)); // 0
console.log(foo(1,'')); // 0
console.log(foo(NaN, 1)); //0
console.log(foo(1, NaN)); //0