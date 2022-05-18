interface Person {
  title: string
  description: string
}


let obj: Person = { title: "1", description: "2" }

obj.title = '李四'

let test: Readonly<Person> = { title: "2", description: "3" }

test.title = "李虎" // Cannot assign to 'title' because it is a read-only property.ts(2540)


type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}


let my: MyReadonly<Person> = { title: "2", description: "3" }
my.title = "123"


export {}