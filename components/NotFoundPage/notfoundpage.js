import React  from 'react';
class Notfoundpage extends React.Component{
	constructor(){
		super();
		this.state={message:'未找到'}
		this.handleClick=this.handleClick;
	}
	
	render(){
		return (
			<div>
				路由{this.state.message}!!!<br/>
			</div>
		)
	}
}

export default Notfoundpage;