/**
 * Created by xusong on 2016/11/4.
 */
var {createStore,applyMiddleware} = require('redux');
var moreReducer=require('../reducers/moreReducer');
var DeferredMiddleware =require('redux-deferred');
//默认输出
let store =createStore(moreReducer,applyMiddleware(DeferredMiddleware));
module.exports = store;