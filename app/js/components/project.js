var React = require('react');
var $=require('jquery');
module.exports= React.createClass({
	getInitialState:function(){
		return {
			count:0,
			stopState:false,
			startState:true
		}
	},
	componentWillMount:function () {
		var self=this;
		this.timer=setInterval(function(){
			self.setState({
				count:self.state.count +1
			})
		},1000)
	},
	test:function(){
		console.log($("#hcont").html());
	},
	componentWillUnmount:function(){
		clearInterval(this.timer);
	},
	stopTimer:function(){
		//React.unmountComponentAtNode(document.getElementById('deleteId'));
		console.log("停止计时");
		clearInterval(this.timer);
		this.setState({
			stopState:!this.state.stopState,
			startState:!this.state.startState
		})
	},
	startTimer:function(){
		console.log("开始计时");
		var self=this;
		this.timer=setInterval(function(){
			self.setState({
				count:self.state.count +1
			})
		},1000)
		this.setState({
			stopState:!this.state.stopState,
			startState:!this.state.startState
		})
	},
	render:function(){
		var startStyle=this.state.startState?true:false;
		var stopStyle=this.state.stopState?true:false;
		return (
			<div>
			<div className="cont" id="deleteId">
			<h1 onClick={this.test} id="hcont">这是项目经验的标题</h1>
			<button className="btn btn-success" onClick={this.startTimer} disabled={startStyle}>开始计时</button>
			<mark>计数：{this.state.count}</mark>
			<button className="btn btn-primary" onClick={this.stopTimer} disabled={stopStyle}>停止计时</button><br/>
		</div>
		</div>
		)
	}
});

