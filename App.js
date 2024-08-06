
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Child from './components/Player';

class App extends Component {
  
 state={ 
    Person : { fullName:"abcde",bio:"pppplk", imgSrc:'', profession:"dev"},
    Boolean:false,
    count:0
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({count:this.state.count+1})
    }, 1000);
   }
   
  render(){
    console.log(this.state.Boolean);
    return (
     <div className='app'> 
    {this.state.Boolean ?  <Child  state={this.state}  />: null}
     <p>{this.state.count}</p>
     <button  onClick={()=>this.setState({Boolean:!this.state.Boolean})}   >toggle</button>
  </div>

 ) }
}



export default App;