import axios from 'axios';
// import baseUrl from '@/api'
const api = {
  requestData (keyValue) {
    return new Promise((resolve, reject) => {
      axios.get('http://139.224.132.114:3000/api/product/search?name=' + keyValue)
        .then(data => {
          console.log(data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestKind (keyValue) {
    return new Promise((resolve, reject) => {
      axios.get('http://139.224.132.114:3000/api/product/kind?kind=' + keyValue)
        .then(data => {
          console.log(data)
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
