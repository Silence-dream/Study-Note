let arr1: [number, string] = [1, "hello"];
console.log(arr1);

// 对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
let arr2: [boolean, string];
arr2[0] = false; // Variable 'arr2' is used before being assigned
arr2[1] = "1"; // Variable 'arr2' is used before being assigned

arr2 = [false, "12"];

// 如果数组越界直接 push 注解的类型没有注解的类型无法添加
arr1.push(1);
arr1.push(false);
export {};
