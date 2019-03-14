import axios from 'axios';
import baseUrl from '@/api';

const api = {
  requestData (obj) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/users/login', obj)
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestUser (obj) {
    return new Promise((resolve, reject) => {
      axios.post(baseUrl + '/users/register', obj)
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },  
  requestCode (phoneNumber) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/users/sendCode?tel=' + phoneNumber)
        .then(data => {
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
