import React  from 'react';
class Baidupage extends React.Component{
	constructor(){
		super();
		this.state={message:'百度页'}
		this.state={value:0}
		this.handleClick=this.handleClick.bind(this);
	}
	handleClick(e){
		console.log(1);
		this.setState({value:this.state.value+1});
	}
	render(){
		return (
			<div>
				路由{this.state.message}{this.state.value}!!!<br/>
				<button onClick={this.handleClick}>add</button>
			</div>
		)
	}
}

export default Baidupage;