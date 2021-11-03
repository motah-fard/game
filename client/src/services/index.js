import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "produrl";
axios.defaults.withCredentials = true;
export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
} 
export const register = async (newUser) => {
  try {
    const response = await axios.post(`${apiURL}/auth/register`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
export const login = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/auth/login`, userInfo);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
export const logout = async () => {
  try {
    await axios.get(`${apiURL}/auth/logout`);
  } catch (error) {
    console.error(error.message);
  }
}

export const getAllWords = async () => {
  try {
    const response = await axios.get(`${apiURL}/words/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const createWord = async (newWord) => {
  try {
    await axios.post(`${apiURL}/words/`, newWord);
  } catch (error) {
    console.error(error.message);
  }
}

export const addGame = async (wordId) => {
  try {
    const response = await axios.post(`${apiURL}/words/games/${wordId}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
