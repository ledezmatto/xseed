import axios from "axios";

const getCharactersService = () => {
  const response = axios.get("https://swapi.dev/api/people");
  return response;
};

export default getCharactersService;
