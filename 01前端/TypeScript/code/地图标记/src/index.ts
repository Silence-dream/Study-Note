import Company from "./Company"
import User from "./User"
import Map from './Map'
let user = new User()
let company = new Company()
console.log(user)
console.log(company)

let map = new Map("#map")
// map.addUserMarker(user)
// map.addCompanyMarker(company)


map.addMarker(user)
map.addMarker(company)