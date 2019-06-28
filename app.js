const querystring = require('querystring')

const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')



const serverHandle = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const url = req.url
    req.path = url.split('?')[0]

    req.query = querystring.parse(url.split('?')[1])

    // const resData = {
    //     name: '李少师',
    //     sex: 'supermen',
    //     env: process.env.NODE_ENV
    // }

    // res.end(
    //     JSON,stringify(resData)
    // )
    
    // 处理blog路由
    const blogData = handleBlogRouter(req, res)
    if(blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    // 处理user路由
    const userData = handleUserRouter(req, res)
    if(userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }
}

module.exports = serverHandle