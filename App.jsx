import React  from 'react';
class App extends React.Component{
	handleClick(e){
		console.log(1);
	}
	render(){
		return (
			<div>
				Hello Word!!!<br/>
				欢迎来到React
				<button onClick={this.handleClick} >按钮</button>
			</div>
		)
	}
}
export default App;
