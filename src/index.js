import { isMainThread } from "worker_threads";

// 第一种方式
// 首次访问页面时，加载main.js(2mb)
// 当页面业务逻辑发生变化时，又要加载3mb的内容

//业务逻辑1mb
console.log(_.join(['a','b','1c'], '***'));
// 此处省略10万行业务逻辑
console.log(_.join(['a','b','c'], '***'));

// 第二种方式
// isMainThread.js被拆成lodash.js(1mb), main.js(1mb);
// 当页面业务逻辑发生变化时，只要加载main.js(1mb)即可

// Code spliting