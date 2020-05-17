import axios from "axios";
import {
  MARVEL_API_URL,
  MARVEL_API_HASH,
  MARVEL_API_PUBLICK_KEY,
  MARVEL_API_TS,
} from "../config";

const instance = axios.create({
  baseURL: MARVEL_API_URL,
  // Not working on the last axios persion [{-.-}]
  // https://github.com/axios/axios/pull/2656
  params: {
    ts: MARVEL_API_TS,
    apikey: MARVEL_API_PUBLICK_KEY,
    hash: MARVEL_API_HASH,
  },
});

export default instance;
