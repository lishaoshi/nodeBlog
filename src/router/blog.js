const { getList, getDetail, newBlog, updataBlog } =  require('../controller/blog')
const { successModel, errorModel } = require('../model/resNodel')


const handleBlogRouter = (req, res) =>{
    const method = req.method
    // const url = req.url 
    // const path = url.split('?')[0]
    // res.end('hello')

    if(method === 'GET' && req.path === "/api/blog/list") {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        let result = getList(author, keyword)
        return result.then(blogData=>{
            console.log(blogData)
            return new successModel(blogData, '成功查到博客列表')
        })
        // const listData = getList(author, keyword)
        // return new successModel(listData, '成功查到博客列表')
    }

    // 获取博客详情接口
    if(method=='GET' && req.path == "/api/blog/detail") {
        const id = req.query.id
        const detailData = getDetail(id)
        return new successModel(detailData, '成功查到博客详情内容')
    }

    // 新建博客接口
    if(method=='POST' && req.path == "/api/blog/new") {
        // const data = req.body
        const data =  newBlog(req.body)
        console.log(req.body)
        return new successModel(data, '新建博客成功')
    }

    // 更新博客接口
    if(method=='POST' && req.path == "/api/blog/update") {
        const flag = updataBlog(req.body)
        // console.log(req.body)
       return flag? new successModel('更新成功'): new errorModel('更新失败')
    }

    // 删除博客接口
    if(method=='POST' && req.path == "/api/blog/del") {
        
    }
}

module.exports = handleBlogRouter