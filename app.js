const querystring = require('querystring')

const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')


// 处理路由
const getPostData = req=>{
    const promise = new Promise((resolve, reject)=>{
        if(req.method!=="POST") {
            resolve({})
            return
        }
        if(req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk=>{
            postData += chunk.toString()
        })
        req.on('end', ()=>{
            if(!postData) {
                resolve({})
                return
            } else {
                resolve(
                    JSON.parse(postData)
                )
            }
        })
    })
    return promise
}



const serverHandle = (req, res) => {
    res.setHeader('content-type', 'application/json')
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

    // 处理post data
    getPostData(req).then(postData=>{
        console.log(req.method)
        req.body = postData
        console.log(postData)
         // 处理blog路由
        const blogData = handleBlogRouter(req, res)
        if(blogData) {
            blogData.then(data=>{
                return res.end(
                    JSON.stringify(data)
                )
            })
        }

        // 处理user路由
        const userData = handleUserRouter(req, res)
        if(userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }
    })
}

module.exports = serverHandle