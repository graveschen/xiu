import axios from 'axios';
import baseUrl from '@/api'

const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/douban?count=5')
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestBannerData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/banner')
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
