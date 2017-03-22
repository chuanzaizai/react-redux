var React = require('react');
var Router = require('react-router');
var { DefaultRoute, Link, IndexRoute, IndexLink, Route, RouteHandler, hashHistory  } = require('react-router');

//引入首页模块
var Home =require('./components/home.js');
//引入项目经验模块
var Project =require('./components/project.js');
//引入博客模块
var Blog =require('./components/blog.js');
//引入redux测试模块
var More =require('./components/more.js');

let App = React.createClass({
  getInitialState:function(){
    return {
      ifNav:false
    }
  },
  showNav:function(){
      this.setState({
        ifNav:!this.state.ifNav
      })
  },
  render() {
    var styleObj={
      display:this.state.ifNav?"block":"none"
    }
    return (
      <div>
        <div className="head">
           <div className="head-left">
              <img src="http://img.zcool.cn/community/01bf7c555995cb0000009c50fe25f1.jpg"/>
              <p>25岁&nbsp;&nbsp;<span>前端架构、开发工程师</span></p>
              <p>上海&nbsp;&nbsp;2年工作经验</p>
            </div>
            <div className="head-right">
                  <ul>
                    <li><Link to="home" activeClassName="active">首页</Link></li>
                    <li><Link to="project" activeClassName="active">项目经验</Link></li>
                    <li><Link to="blog" activeClassName="active">技术博客</Link></li>
                    <li><Link to="more" activeClassName="active">更多</Link></li>
                  </ul>
              </div>
          </div>

        {this.props.children}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (  
   <Route name="app" path="/" handler={App}>
      <DefaultRoute name="home"  handler={Home}/>
      <Route name="project" path="/project" handler={Project}/>
      <Route name="blog" path="/blog" handler={Blog}/>
      <Route name="more" path="/more" handler={More}/>
  </Route>
);


Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});