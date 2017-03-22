/**
 * Created by xusong on 2016/11/1.
 */
var React = require('react');
var Simditor = require('simditor');
var $ = require('jquery');
import 'style!css!../../../node_modules/simditor/styles/simditor.css';
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
                <textarea ref='textarea' />
            </div>
        )
    }
});
