import axios from "../utils/axios";
import {
  MARVEL_API_TS,
  MARVEL_API_PUBLICK_KEY,
  MARVEL_API_HASH,
} from "../config";
import { randomInt } from "../utils/math";

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
            reject(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  getOne = () =>
    new Promise(async (resolve, reject) => {
      const data = await this.getAll();
      if (!data) {
        reject(`Opps`);
      }

      const randomNumber = randomInt(0, data.length);
      if (data[randomNumber]) {
        resolve([data[randomNumber]]);
      }

      reject(`Opps`);
    });

  searchByName = (characterName) =>
    new Promise(async (resolve, reject) => {
      axios
        .get(`/characters?${this.params}&nameStartsWith=${characterName}`)
        .then((response) => {
          if (response.data) {
            const { data } = response.data; // get clean data response.
            resolve(data.results);
          } else {
            reject(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  getCommicsByCharacterId = (id) =>
    new Promise(async (resolve, reject) => {
      const url = `/characters/${id}/comics?${this.params}`;
      axios
        .get(url)
        .then((response) => {
          if (response.data) {
            const { data } = response.data; // get clean data response.
            resolve(data.results);
          } else {
            reject(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
}

const marvelService = new MarvelService();

export default marvelService;
