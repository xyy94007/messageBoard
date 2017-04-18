import React from 'react';
import ReactDom from 'react-dom';
var keyindex = 0;
class Bottomwork extends React.Component {
	constructor(props){
		super(props);
		this.sendMessage = this.sendMessage.bind(this);
	}
	sendMessage(){
		//console.log(this.refs.inputName.value);
		var inputName = this.refs.inputName.value;
		var putContent = this.refs.inputContent.value;
		var hdate = new Date().getHours();
		var mdate = new Date().getMinutes();
		var curTime = hdate +':'+mdate;
		if(inputName!=''&&putContent!=''){
			keyindex += 1;
			var obj = {
					inputName:inputName,
					putContent:putContent,
					curTime:curTime,
					keyindex:keyindex
				};
			this.props.bott(obj);	
		}else{
			alert('内容不能为空!')
		}

		this.refs.inputName.value ='';
		this.refs.inputContent.value='';
	}
	render(){
		return (
				<div className="bottom">
					<input type="text" ref="inputName" placeholder="输入名字" className="putName"/>
					<br/>
					<textarea className="putContent" ref="inputContent" cols="50" rows="10"></textarea>
					<br/>
					<button onClick={this.sendMessage}>发表评论</button>
				</div>
		)
	}
}
module.exports = Bottomwork;