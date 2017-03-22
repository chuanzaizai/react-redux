var React = require('react');
var store=require('../store/moreStore');
//同时接收几个方法
var {addPosts,deletePosts}=require('../actions/moreAction');
//////////////////
////////////注意，render直接给map出来的元素绑定方法，不生效

module.exports= React.createClass({
    getInitialState: function(){
        return {
            items: store.getState()
        };
    },
    componentDidMount: function(){
       store.subscribe(this.onChange);
    },
    onChange: function(){
        this.setState({
            items: store.getState()
        });
    },
    handleAdd: function(){
        let value = document.getElementById('tit').value;
        let cont = document.getElementById('tcont').value;
        if(value !=null && value !="" && cont !=null && cont !=""){
            store.dispatch( addPosts());
        }
    },
    handleDelete:function(id){
        console.log(id);
        store.dispatch( deletePosts());
    },
    testClick:function(){
        console.log("这是测试本地服务器第十次");
    },
    render: function(){
        var arr1 = this.state.items;
        var newArry=[];
        for(var i=0;i<arr1.length;i++){
            newArry.push(
            <li><h3>{arr1[i].login}</h3><p>{arr1[i].id}</p><p>{arr1[i].avatar_url}</p><p>{arr1[i].html_url}</p>
            <br/><button className="btn btn-danger" onClick={this.handleDelete.bind(this,arr1[i].id)}>删除</button></li>
            )
        }
        return (
            <div>
                <div style={{marginLeft:'200px'}}>
                    <input id="tit" type="text" placeholder="标题" /><br/>
                    <textarea id="tcont" placeholder="内容"></textarea><br/>
                    <button onClick={this.testClick}>点击测试</button><br/>
                    <button onClick={this.handleAdd} className="btn btn-success">点击添加</button>
                    <ul>
                        {newArry}
                    </ul>
                </div>
            </div>
        )
    }
});

