import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"

class HousesService{

async get_all_houses(){
  const res = await api.get('auth/api/houses')
  console.log("ATTEMPTIN TO GET HOUSES", res.data);
  AppState.houses = res.data
  console.log(AppState.houses);
}

}

export const housesService = new HousesService()