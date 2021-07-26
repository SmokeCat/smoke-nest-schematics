// 正式环境配置文件
export default {
  mysql: {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
  },
  redis: {
    port: 6379,
    host: "127.0.0.1",
    password: "auth",
    db: 0,
  }
}