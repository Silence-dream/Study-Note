import { GET_SCRECT, SAVE_SCRECT } from "./constants"
export function findScrect() {
  return {
    type: GET_SCRECT
  }
}


export function saveScrect(screct) {

  return {
    type: SAVE_SCRECT,
    screct: screct
  }
}