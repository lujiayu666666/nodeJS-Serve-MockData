const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//服务端接收参数数据解析

//解析json格式数据对应postman --> post请求 --> rawJSON参数格式
app.use(bodyParser.json()) 
//解析表单格式数据对应postman --> post请求 --> form-data表单参格式
app.use(bodyParser.urlencoded({extended: true}))


//简单的get请求
app.get('/getInfo', (req, res) => {
  let arr = [1,2,3,4,5]
  console.log('get请求参数：', req.query)
  res.send('鲅鱼圈下雪了')
})

//简单的post请求
app.post('/getList', (req, res) => {
  console.log('post请求参数：', req.body)
  res.json('北京什么时候下雪啊？')

})

//启动服务并配置端口号
app.listen('3000', () => {
  console.log('服务已启动，地址链接：http://localhost:3000/getInfo?name=邱诗梦&age=24' )
})

