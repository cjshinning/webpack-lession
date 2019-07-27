import avatar from './avatar.jpg';

var img = new Image();
img.src = avatar;

console.log(avatar);

var root = document.getElementById('root');
root.append(img);


