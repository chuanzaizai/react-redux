
var $=require('jquery');

//定义处理函数,返回的值
function addPosts(){
    return{
        type: 'add_todo',
        payload:$.get('https://api.github.com/users')
    }
};

function deletePosts(){
    return{
        type: 'delete_todo',
        payload:$.get('https://api.github.com/users')
    }
};

////同时输出几个模块
exports.addPosts=addPosts;
exports.deletePosts=deletePosts;