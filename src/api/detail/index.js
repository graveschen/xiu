import axios from 'axios';
import baseUrl from '@/api'
const api = {
  requestData (id) {
    return new Promise((resolve, reject) => {
      axios.get( 'http://139.224.132.114:3000/api/product/searchpro?id=' + id)
        .then(data => {
          console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestDetailData (id) {
    return new Promise((resolve, reject) => {
      axios.get('http://139.224.132.114:3000/api/product/searchpro?id='+id)
        .then(data => {
          // console.log(data)
          resolve(data.data) // 将数据传给组件
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
