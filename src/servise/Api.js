export default class Api {
  BASEURL = 'https://front-test.beta.aviasales.ru/';

  finalUrl = (endUrl, param = '') => `${this.BASEURL}${endUrl}?${param}`;

  async request(url) {
    const res = await fetch(url);
    return res;
  }

  async getSearchID() {
    const url = this.finalUrl('search');
    const res = await this.request(url);
    if (!res.ok) {
      this.getSearchID();
    }
    const data = await res.json();
    const searchID = data.searchId;
    return searchID;
  }

  async getData(searchID) {
    const url = this.finalUrl('tickets', `searchId=${searchID}`);
    const res = await this.request(url);
    const data = await res.json();
    return data;
  }

  async bufferJSON(data) {
    const res = await data.slice(0, 5);
    return res;
  }
}
