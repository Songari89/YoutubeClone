import axios from "axios";

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "YoutubeAPIs" : "YoutubeHotTrends"}.json`)
//     .then((res) => res.data.items);
// }

export default class fakeAPIClient {

  async search() {
    return axios.get("/videos/YoutubeAPIs.json");
  }
  async videos() {
    return axios.get("/videos/YoutubeHotTrends.json");
  }
}
