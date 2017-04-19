import React  from 'react';
class Homepage extends React.Component{
	constructor(){
		super();
		this.state={message:'首页'}
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

export default Homepage;