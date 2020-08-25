import API from '../../services/API'

export const retrieveUsers = async () => {
  try {
    const usersData = await API.get("/users");
    return usersData.data
  } catch (error) {
    return new Error(error)
  }
}
