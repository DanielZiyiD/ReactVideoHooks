import axios from "axios";

const KEY = "AIzaSyA3Ywb8k1CWeA9Ykkqt4DM3ftg5wwBBo2I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
