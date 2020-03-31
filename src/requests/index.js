import Axios from 'axios'
import { Toast } from 'antd-mobile';
const ajax = Axios.create({
  baseURL: 'http://rap2.taobao.org:38080/app/mock/121874'
})
ajax.interceptors.request.use(config => {
  Toast.loading('加载中', 0, () => {
    console.log('Load complete !!!');
  });
  return config
})
ajax.interceptors.response.use(config => {
  Toast.hide()
  return config
})
const loginMsg = (data) => {
  return ajax.post('/boke', data)
}

export default loginMsg 