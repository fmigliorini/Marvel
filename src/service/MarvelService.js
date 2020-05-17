import axios from "../utils/axios";
import {
  MARVEL_API_TS,
  MARVEL_API_PUBLICK_KEY,
  MARVEL_API_HASH,
} from "../config";

class MarvelService {
  // Params are not working on createInstance in the current
  // version of axios. (should work as utils/axios example)
  params = `ts=${MARVEL_API_TS}&apikey=${MARVEL_API_PUBLICK_KEY}&hash=${MARVEL_API_HASH}`;

  getAll = () =>
    new Promise((resolve, reject) => {
      axios
        .get(`/characters?${this.params}`)
        .then((response) => {
          if (response.data) {
            const { data } = response.data; // get clean data response.
            resolve(data.results);
          } else {
            reject("Error in the request");
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
}

const marvelService = new MarvelService();

export default marvelService;
