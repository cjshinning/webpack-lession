// main.js 2mb
// 打包文件很大，加载时间长
// main.js 2mb
// 用户重新访问页面，又要重新加载2mb的内容

//业务逻辑1mb
console.log(_.join(['a','b','c'], '***'));
// 此处省略10万行业务逻辑
console.log(_.join(['a','b','c'], '***'));

