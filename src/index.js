import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
import { HashRouter, Route , Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <h3>Home</h3>
        )
    }
}

class Index extends React.Component{
    render(){
        return(
            <h3>Index</h3>
        )
    }
}

class Third extends React.Component{
    render(){
        return(
            <h3>Third</h3>
        )
    }
}

class Second extends React.Component{
    change(){
        this.props.history.push({pathname:`${this.props.match.url}/messages/444`,search:'?dddd=11111',state:{ss:'111'}});
    }
    render(){
        return(
            <div>
                <h2>Second {this.props.match.url}</h2>
                <ul>
                    <li><Link to={`${this.props.match.url}/messages/111`}>message1</Link></li>
                    <li><Link to={`${this.props.match.url}/messages/222`}>message2</Link></li>
                    <li><Link to={`${this.props.match.url}/messages/333`}>message3</Link></li>
                    <li><button onClick={this.change.bind(this)}>message 4</button></li>
                </ul>                
                <Route path={`${this.props.match.url}/messages/:id`} component={Message}/>
            </div>
        )
    }
}

// const Second = ({ match }) => (
//     <div>
//       <h2>Second {match.url}</h2>
//       <Link to={`${match.url}/messages/111`}>advantage1</Link>
//       <Route path={`${match.url}/messages/:id`} component={Message}/>
   
//     </div>
//   )

// const Message = ({ match }) => (
//     <div>
//         <h3>new messages</h3>
//         <h3>{match.params.id}</h3>
//     </div>
// )
  

class Message extends React.Component{
    render(){
        return(
            <div>   
                          
                <h3>Message {this.props.match.params.id} {console.log(this.props.location)}</h3>
            </div>
            
        )
    }
}

class Routers extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/index">Index</Link></li>
                    <li><Link to="/second">Second</Link></li>
                    <li><Link to="/third">Third</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    // <BrowserRouter>
    //     <Routers>
    //         <Route exact  path="/" component={Home}/>
    //         <Route path="/index" component={Index}/>
    //         <Route path="/second" component={Second}/>
    //         <Route path="/third" component={Third}/>
    //     </Routers>        
    // </BrowserRouter>
    // , document.getElementById('root'));
    
    <div>
        <App/>
        <HashRouter>
            <Routers>
                <Route exact  path="/" component={Home}/>
                <Route path="/index" component={Index}/>
                <Route path="/second" component={Second}/>
                <Route path="/third" component={Third}/>
            </Routers>        
        </HashRouter>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
