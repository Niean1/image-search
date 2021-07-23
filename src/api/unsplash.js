import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _NWb22ZhEuU80s5UMYdYUKAzxS0t2kuRM2yUbl-6pQw",
  },
});
