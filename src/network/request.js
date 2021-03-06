import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 100000
  })
  instance.interceptors.request.use(res => {
    return res
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err =>{
    console.log(err)
  })
  return instance(config)
}
