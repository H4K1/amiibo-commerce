import axios from 'axios';
import { generateRandomPrice, generateId } from '../helpers'

class Amiibo {
  constructor(baseUrl='https://amiiboapi.com/api') {
    this.baseUrl = baseUrl
    this.service = axios.create({ baseURL: this.baseUrl })
    this.amiibos = []
    this.all()
  }

  async all(opts={}) {
    try {
      const params = new URLSearchParams({ gameseries: 'Super Mario', ...opts})
      const response = await this.service.get('/amiibo', { params });
      const { data } = response;
      const { amiibo } = data

      this.amiibos = this.setData(amiibo)
      return this.amiibos
    } catch (e) {
      console.log(e);
    }
  }

  setData(array) {
    return array.map(amiibo => {
      return { ...amiibo, id: generateId(), price: generateRandomPrice(1, 30), quantity: 1 }
    })
  }
}

export default Amiibo;
