import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';



class App extends Component {
	//* 设置默认props
	static defaultProps = {
				name:'yoyo'
	};
	constructor() {
      super();			
      this.state = {
        text:'Be happy!',
				author:{
					img:'http://placekitten.com/g/64/64',
					name:'yoyo'
				},
				arr:['崔不去','凤霄','蒋丞','顾飞'],
				value:'',
			}
	}
	handleChange(event){
		this.setState({value:event.target.value});
	}	
  render() {
    return (
      <div className="App">
{/*     <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
			 </header>*/}
			 	
				<HelloName name = {this.props.name}/>				
				<input value={this.state.value} onChange={this.handleChange.bind(this)} />
				<label>{this.state.value}</label>
       	<Comment text={this.state.text} author={this.state.author} arr = {this.state.arr} propsData={this.state.value} updateState={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

class HelloName extends Component{
	constructor(props){
		super(props);
		this.state = {
			isShowingText:true
		}
		setInterval(()=>{
			this.setState(previousState=>{
				return { isShowingText: !previousState.isShowingText };
			})
		},1000)
	}
	render(){
		// if(!this.state.isShowingText){
		// 		return null;
		// }
		return(
			<div>hello,{this.props.name}!!!!</div>
		)
	}
}

class Comment extends Component {
	callback(msg){
		console.log(msg);
	}
	render(){
	  return (
	    <div className="Comment">
	      <UserInfor user={this.props.author} propsData={this.props.propsData} updateState = {this.props.updateState}/>
	      <div className="Comment-text">
	        {this.props.text}
	      </div>
				<Names arr = {this.props.arr} callback={this.callback.bind(this)}/>
	    </div>
	  );
	}
}

class UserInfor extends Component{
	render(){
		return (
	    <div className="UserInfo">
	      <Avatar user={this.props.user} propsData={this.props.propsData} updateState = {this.props.updateState} />
	      <div className="UserInfo-name">
	        {this.props.user.name}
	      </div>
	    </div>
	  );
 }
}

class Names extends Component{
	cb(msg){
		console.log(msg);
		this.props.callback(msg) 
	}
	render(){		
		return(
			<div className="arr">
				{this.props.arr.map((name)=>{
					return <Item key={name} name={name}/>
				})}
				<button onClick={()=>{this.cb("我是子组件来的信息!")}}>click Me</button>
			</div>		
		)
	}
}

class Item extends Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		isShowingText: true 
	// 	}
	// 	setInterval(()=>{
	// 		this.setState(previousState=>{
	// 			return { isShowingText: !previousState.isShowingText };
	// 		})
	// 	},1000)
	// }
	render(){
		// if(!this.state.isShowingText){
		// 	return null;
		// }
		return(
			<p>hello,{this.props.name}</p>
		)
	}
}

class Avatar extends Component{	
	test(msg,e){
		console.log(msg);
		console.log(e);
	}
	render(){
		return (
			<div>
				<img className="Avatar" src={this.props.user.img} alt={this.props.user.name} />
				<div>
					<button onClick={this.test.bind(this,this.props.user.name)}>click Me!!!</button>
					<button onClick={(e)=>{this.test(this.props.user.name,e)}}>click Me!!!</button>
				</div>
				<input value={this.props.propsData} onChange={this.props.updateState}/>
				<label>{this.props.propsData}</label>
			</div>
		)
	}
}



export default App;
