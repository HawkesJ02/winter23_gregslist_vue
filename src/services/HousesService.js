import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"

class HousesService{

async get_all_houses(){
  const res = await api.get('auth/api/houses')
  console.log("ATTEMPTIN TO GET HOUSES", res.data);
  AppState.houses = res.data
  console.log(AppState.houses);
}

async create_house(houseData){
  const res = await api.post('auth/api/houses', houseData)
  AppState.houses.push(res.data)
  return res.data
}

}

export const housesService = new HousesService()