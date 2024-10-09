// 

'use server'

import { allRoutes } from "./urlEnums";
import { GetRequest } from "./urlhandler";


export const getProd = async () => {
  const res = await GetRequest(allRoutes.HOME_PRODUCTS);
  return res.data
}

export const getAllShop = async () => {
  const response = await GetRequest(allRoutes.ALL_PRODUCT);
  return response.data
}