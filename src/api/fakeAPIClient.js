import axios from "axios";

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? "YoutubeAPIs" : "YoutubeHotTrends"}.json`)
//     .then((res) => res.data.items);
// }

export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular()
  }

  async #searchByKeyword(){
    return axios
      .get(`/videos/YoutubeAPIs.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular(){
    return axios
      .get(`/videos/YoutubeHotTrends.json`)
      .then((res) => res.data.items)
  }
}
