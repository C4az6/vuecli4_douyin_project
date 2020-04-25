import axios from 'axios'

var myaxios = axios.create({
  baseURL: "http://linyi.natapp1.cc/api/"
})


export default myaxios;