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

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题',
        content: '内容AAAAAAA',
        createTitme: 1561708693750,
        author: '李少师'
    }
}

module.exports = {
    getList,
    getDetail
}