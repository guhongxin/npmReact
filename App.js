import React  from 'react';
class App extends React.Component{
	constructor(){
		super();
		this.state={value:0}
		this.handleClick=this.handleClick.bind(this);
	}
	
	handleClick(){
  	//参数变化
	    this.setState({
	      value:this.state.value+1,
	    })
  	}
	render(){

		console.log(this)
		return (
			<div>
				Hello Word{this.state.value}!!!<br/>
				热加载React
				<div id='mountNode'></div>
				<button onClick={this.handleClick}  >按钮</button>
			</div>
		)
	}
}

export default App;
