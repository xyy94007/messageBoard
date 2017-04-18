import React from 'react';
import ReactDom from 'react-dom';
import Scss from './homework.scss';
import Topwork from './es6_top.js';
import Bottomwork from './es6_bottom.js';

class Mainwork extends React.Component {
	constructor(props){
		super(props);
		this.getBottFn = this.getBottFn.bind(this);
		this.state={
			list:[]
		}
	}
	getBottFn(obj){
		//console.log(obj);
		var arr = this.state.list;
		arr.push(obj);
		this.setState({
			list:arr
		})
	}
	render(){
		return (
			<div className="big">
				<p>评论</p>
				<hr/>
				
				<Topwork getFu={this.state.list}/>
				
				<Bottomwork bott={this.getBottFn}/>
			</div>
		)
	}
}
ReactDom.render(<Mainwork/>,document.getElementById("app"));