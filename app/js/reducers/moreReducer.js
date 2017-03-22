/**
 * Created by xusong on 2016/11/3.
 */

////定义方法,用于更新视图
let moreReducers= function(state, action){

    if(typeof state === 'undefined'){
        return [{
            login:"这是初始化login",
            id:"这是初始化id",
            avatar_url:"这是初始化avatar_url",
            html_url:"这是初始化html_url",
            completed: false
        }];
    }
    //打印ajax取到的值
    switch(action.type){
        case 'add_todo':
            return state.concat({
                login: action.payload[0].login,
                id: action.payload[0].id,
                avatar_url:action.payload[0].avatar_url,
                html_url:action.payload[0].html_url,
                completed: false
            });
            break;
        case 'delete_todo':
            return state.concat({
                login: action.payload[1].login,
                id: action.payload[1].id,
                avatar_url:action.payload[1].avatar_url,
                html_url:action.payload[1].html_url,
                completed: false
            });
            break;
        default:
            return state;
    }
};

module.exports=moreReducers;
