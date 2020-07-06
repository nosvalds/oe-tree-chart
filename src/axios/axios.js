import axios from 'axios';

export default axios.create({
  baseURL: "https://api.offset.earth/trees", // url 
  headers: {
    Accept: "application/json",
  }
})