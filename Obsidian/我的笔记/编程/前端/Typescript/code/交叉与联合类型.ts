interface A {
  a: number
}

interface B {
  b: string;
  c: number;
}

// 交叉类型在数学上的理解就是 `并集` 而不是交集(切记)
let c: A & B = { a: 1, b: '2', c: 3 };



// 联合类型
// 在 TypeScript 中，可以使用 `|` 来表示联合类型。
// 例如，`string | number` 表示 `string` 或 `number`。


type IColor = 'red' | 'blue' | 'green';
type IColor2 = 'red' | 'blue' | 'green' | 'yellow';

let color: IColor = 'red';

let cc: IColor | IColor2 = "yellow"