import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BwlPrF09Xnaln3HNBar_9_8BImInXHfPhyjvn_lrtdk",
  },
});
