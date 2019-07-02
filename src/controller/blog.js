const getList = (author, keyword) => {
    // 模拟返回假数据
    return [
        {
            id: 1,
            title: '标题',
            content: '内容AAAAAAA',
            createTitme: 1561708693750,
            author: '李少师'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容BBBBBBB',
            createTitme: 1561708693750,
            author: '李少师'
        }
    ]
}

// 返回博客详情
const getDetail = (id) => {
    return {
        id: 1,
        title: '标题',
        content: '内容AAAAAAA',
        createTitme: 1561708693750,
        author: '李少师'
    }
}

// 新建博客路由
const newBlog = (blogData={}) =>{
    // blogData是新增博客的内容对象   标题、内容
    return {
        id:3,
        author: '王五',
        content: '这是博客内容'
    }
}

//更新博客
const updataBlog = (updata={}) =>{
    // console.log(Object(updata).keys)
    return false
    // if(!Object(updata).keys.length) {
    //     return false
    // } else {
    //     return true
    // }
}


//

module.exports = {
    getList,
    getDetail,
    newBlog,
    updataBlog
}