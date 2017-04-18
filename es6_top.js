import React from 'react';
import ReactDom from 'react-dom';

class Topwork extends React.Component {
	constructor(props){
		super(props);	
	}
	
	render(){
		var detail = this.props.getFu;
		var detailArr=[];
		for(var item of detail){
			detailArr.push(
				<section key={item.keyindex}>
						<p className="todoName">
							<i className="todoNamea">{item.inputName}</i>
							<b className="todoTime">{item.curTime}</b>
						</p>
						<p className="todoContent">{item.putContent}</p>
					</section>
			)
		}
		return (
				<div className="top">
					{detailArr}
				</div>
		)
	}
}
module.exports = Topwork;