const express = require('express')
const app = express()

//配置访问静态资源
app.use('/img/', express.static('./img/'))
//render模板
app.engine('html', require('express-art-template'))

//路由跳转
app.get('/', (req, res) => {
    res.render('index.html')
})
app.get('/icon', (req, res) => {
    res.render('图标特效.html')
})
app.get('/antitheticalAd', (req, res) => {
    res.render('对联广告.html')
})
app.get('/alertAd', (req, res) => {
    res.render('弹窗广告.html')
})
app.get('/foldMenu', (req, res) => {
    res.render('折叠菜单.html')
})
app.get('/cyclicScrolling', (req, res) => {
    res.render('无限循环滚动.html')
})
app.get('/movieRanking', (req, res) => {
    res.render('电影排行榜.html')
})

//端口监听
app.listen('4000', function () {
    console.log("服务已启动。。。")
})