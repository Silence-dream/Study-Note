// src/Company.ts
import faker from "@faker-js/faker";

export default class Company {
  // 公司名称
  companyName: string;
  // 公司口号
  catchPhrase: string;
  // 公司位置
  location: {
    // 纬度
    lat: number;
    // 经度
    lng: number;
  };
  constructor() {
    // 随机创建公司名称
    this.companyName = faker.company.companyName();
    // 随机创建公司口号
    this.catchPhrase = faker.company.catchPhrase();
    // 随机创建公司位置
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}