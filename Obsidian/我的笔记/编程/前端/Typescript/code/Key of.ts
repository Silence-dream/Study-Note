interface Person {
  id: string
  name: string
}
type PersonKey = keyof Person // "id" | "name"
let a: PersonKey = "id"
let b: PersonKey = "name"


export { }