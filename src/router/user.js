const handleUserRouter = (req, res) =>{
    const method = req.method
    // const url = req.url 
    // const path = url.split('?')[1]
    
    // 登陆接口
    if(method=='GET' && req.path == "/api/user/login") {
        return {
            msg: '这是登陆接口'
        }
    }
}

module.exports = handleUserRouter