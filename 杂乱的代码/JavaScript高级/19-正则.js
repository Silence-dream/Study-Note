// let regexp = new RegExp(/123/);
// let regexp2 = /^123$/;
// console.log(regexp.test("123"));
// console.log(regexp.test("122"));
// console.log(regexp.test("12334")); // 匹配字符中是否出现123

// console.log(regexp2.test("1234")); // 精确匹配出现

// var regexp = /[abc]/; //包含adc其中一个就行

// console.log(regexp.test("a"));
// console.log(regexp.test("ab"));
// console.log(regexp.test("abc"));
// console.log(regexp.test("abcd"));

// var regexp = /^[abc]$/; //匹配是否包含abc字母中的其中一个

// console.log(regexp.test("a"));
// console.log(regexp.test("c"));
// console.log(regexp.test("ab"));
// console.log(regexp.test("abc"));
// console.log(regexp.test("abcd"));

// var regexp = /^[a-z]$/;
// console.log(regexp.test("ž")); //false
// console.log(regexp.test("z")); //true

// var regexp = /^[a-zA-Z]$/;
// console.log(regexp.test("ž")); //false
// console.log(regexp.test("b")); //true

// var regexp = /^\d$/;
// console.log(regexp.test("1"));

// var regexp = /a*/; //重复0次或更多次
// console.log(regexp.test(""));
// console.log(regexp.test("a"));

// var regexp = /a+/; // 重复1次或更多次
// console.log(regexp.test("")); //false
// console.log(regexp.test("a"));
// console.log(regexp.test("aaaa"));

// var regexp = /^a?$/; //重复0次或1次
// // var regexp = /a?/; //重复0次或1次
// console.log(regexp.test(""));
// console.log(regexp.test("a"));
// console.log(regexp.test("aaa"));
