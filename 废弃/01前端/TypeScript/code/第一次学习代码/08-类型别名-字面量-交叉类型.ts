/*
 * @Author: ℳ๓₯㎕白月初
 * @Date: 2020-11-13 21:14:59
 * @LastEditors: OBKoro1
 * @LastEditTime: 2020-11-13 21:15:00
 * @FilePath: \code\08.ts
 */


// type aliase
let sum: (x: number, y: number) => number
const result = sum(1, 2)
type PlusType = (x: number, y: number) => number
let sum2: PlusType
const result2 = sum2(2, 3)
type StrOrNumber = string | number
let result3: StrOrNumber = '123'
result3 = 123

const str: 'name' = 'name'
const number: 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left'

interface IName {
  name: string
}
type IPerson = IName & { age: number }
let person: IPerson = { name: '123', age: 123 }