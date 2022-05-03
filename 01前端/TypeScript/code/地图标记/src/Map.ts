import Company from "./Company";
import User from "./User"

export default class Map {
  private googleMap: google.maps.Map
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }
  // 标记用户位置
  addUserMarker(user:User){
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
  // 标记公司位置
  addCompanyMarker(company:Company){
    new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:company.location.lat,
        lng:company.location.lng
      }
    })
  }

  // 上面的方法合并一下
  addMarker(mappable:User|Company){
    new google.maps.Marker({
      map:this.googleMap,
      position:{
        lat:mappable.location.lat,
        lng:mappable.location.lng
      }
    })
  }
}