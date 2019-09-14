async function getComponent(){
    const {default: _} = await import(/* webpackChunkName:"lodash" */'lodash');
    const element = document.createElement('div');
    element.innerHTML = _.join(['Jenny', 'Chen'], '-');
    return element;
}

document.addEventListener('click', () => {
    getComponent().then(element => {
        document.body.appendChild(element);
    })
})
