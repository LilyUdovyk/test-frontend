import API from '../../services/API'

export const createUser = async (name: string, email: string, picture: string, role: string) => {
  try {
    const response = await API.post('/users', { name, email, picture, role });
    return response
  } catch (error) {
    return new Error(error)
  }
}

export const retrieveUser = async (id: string) => {
  try {
    const userData = await API.get(`/users/${id}`);
    return userData.data
  } catch (error) {
    return new Error(error)
  }
}

export const updateUser = async (id: string, name: string, email: string, picture: string, role: string) => {
  try {
    const response = await API.put(`/users/${id}`, { name, email, picture, role });
    return response
  } catch (error) {
    return new Error(error)
  }
}

export const deleteUser = async (id: string) => {
  try {
    const response = await API.delete(`/users/${id}`);
    return response
  } catch (error) {
    return new Error(error)
  }
}