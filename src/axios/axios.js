import axios from 'axios';

export default axios.create({
  baseURL: "https://api.offset.earth/trees", // base API url 
  headers: {
    Accept: "application/json",
  }
})