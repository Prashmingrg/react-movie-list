import axios from "axios";

export const fetchData = (str) => {
  const apiEp = `http://www.omdbapi.com/?t=${str}&apikey=ec593b09`;
  try {
    return axios.get(apiEp);
  } catch (error) {
    console.log(error);
  }
};
