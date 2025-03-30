var re = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(re.func());
// expected output: 42