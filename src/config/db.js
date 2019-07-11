
const env = process.env.NODE_ENV  //环境参数

let MYSQL_CONFIG
if(env === 'dev') {
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'myblog'
    }
} else {
    // MYSQL_CONFIG = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: 'root',
    //     port: '3306',
    //     database: 'myblog'
    // })
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONFIG
}