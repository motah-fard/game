import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;
export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
export const register = async (newUser) => {
  try {
    const response = await axios.post(`${apiURL}/auth/register`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
export const login = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/auth/login`, userInfo);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
export const logout = async () => {
  try {
    await axios.get(`${apiURL}/auth/logout`);
  } catch (error) {
    console.error(error.message);
  }
};
// get the words
export const getAllWords = async () => {
  try {
    const response = await axios.get(`${apiURL}/words/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
// create word
export const createWord = async (newWord) => {
  try {
    await axios.post(`${apiURL}/words/`, newWord);
  } catch (error) {
    console.error(error.message);
  }
};
// adding the game
export const addGame = async (wordId) => {
  try {
    const response = await axios.post(`${apiURL}/words/games/${wordId}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
//get the word by id
export const getWordsById = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/words/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
// delete the word do not have any use in the game
export const deleteWord = async (id) => {
  try {
    const response = await axios.delete(`${apiURL}/words/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
//updating the word
export const updateWord = async (id, word) => {
  try {
    const response = await axios.put(`${apiURL}/words/${id}`, word);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// get all the games
export const getAllGames = async () => {
  try {
    const response = await axios.get(`${apiURL}/words/games/`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

// get games by id
export const getGameById = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/words/game/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// delete the game

export const deleteGame = async (id) => {
  try {
    const response = await axios.delete(`${apiURL}/words/game/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// edit game

export const updateGame = async (id, win) => {
  try {
    const response = await axios.put(`${apiURL}/words/game/${id}`, win);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
