// ES Module 模块引入方式
// Commonjs 模块引入规范
// CMD
// AMD
// webpack 模块打包工具
// import Header from './header';
// import Sidebar from './sidebar';
// import Content from './content';

var header = require('./header');
var sidebar = require('./sidebar');
var content = require('./content');

new Header();
new Sidebar();
new Content();


