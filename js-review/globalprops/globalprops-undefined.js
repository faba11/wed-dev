function test(t) {
  if (t === undefined) {
    return 'Undefined value!';
  }
  return t;
}

let x;

console.log(re(x));
// expected output: "Undefined value!"