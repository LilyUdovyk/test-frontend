import API from '../../services/API'

import { UserData } from "../user/types";

export const retrieveUsers = async () => {
  try {
    const usersData = await API.get("/users");
    return usersData.data
  } catch (error) {
    return new Error(error)
  }
}

export const ignoreUsers = async (users: UserData[]) => {
  try {
    const response = await API.put(`/users/ignore`, users);
    return response
  } catch (error) {
    return new Error(error)
  }
}