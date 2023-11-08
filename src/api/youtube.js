

export default class Youtube { //네트워크 통신을 하지 않고 받아온 데이터들에서 필요한 정보만 query한다. 
  constructor(apiClient) { //클라이언트관한 데이터를 받아온다(DI), 
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({ //get()으로 데이터를 받아오는게 아니라 Client함수에서 받아서 전달해준 데이터에 접근 -> 그 전달받은 데이터에서 params를 사용
        params: { part: "snippet", maxResults: 25, type: "video", q: keyword },
      }) //API주소에서 가져온 params
      .then((response) => response.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      }) //API주소에서 가져온 params
      .then((res) => res.data.items);
  }
}
