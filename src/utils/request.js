import axios from 'axios'


//请求拦截器
const request = axios.create()
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//响应拦截器
request.interceptors.response.use(
  res => {
    if (res.data.code === 401) {
      // ElMessage.error(res.data.msg)
      // router.replace('/login')

      return res
    }
    return res
  },
  error => {
    // router.replace("/500");
    return Promise.reject(error)
  }
)

request.defaults.baseURL = '/api'
request.defaults.withCredentials = true //允许请求带上跨域cookie

export default request
