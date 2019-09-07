function getComponent(){
    return import('lodash').then(({default: _}) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Jenny', 'Chen'], '-');
        return element;
    })
}

getComponent().then(element => {
    document.body.appendChild(element);
})

// 代码分割，和webpack无关
// webpack中实现代码分割两种方式：
// 1.同步代码：只需要在webpack.common.js中做optimization配置
// 2.异步代码（import）：无需做任何配置