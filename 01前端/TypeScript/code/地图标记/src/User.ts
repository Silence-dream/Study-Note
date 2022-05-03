import faker from "@faker-js/faker";

export default class User {
  name: string;
  location: {
    lat: number
    // 维度
    lng: number
  }
  constructor(){
    this.name=faker.name.findName()
    this.location={
      lat:parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    }
  }
}

export const  a =10