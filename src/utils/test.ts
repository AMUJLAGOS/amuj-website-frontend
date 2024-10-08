// 

'use server'

import { allRoutes } from "./urlEnums";
import { GetRequest } from "./urlhandler";


export const getProd = async () => {
  const res = await GetRequest(allRoutes.HOME_PRODUCTS);
  return res.data
}