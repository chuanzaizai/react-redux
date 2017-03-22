var React = require('react');
var Simditor = require('simditor');
var $ = require('jquery');
//引入插件css
module.exports = React.createClass({
	componentDidMount : function(){
		var textbox = React.findDOMNode(this.refs.textarea);
		var editor = new Simditor({
			textarea: $(textbox)
		});
	},
	render : function(){
		return (
			<div>
				<div className="edit-cont">
					<textarea ref='textarea' />
				</div>
			</div>
		)
	}
});
