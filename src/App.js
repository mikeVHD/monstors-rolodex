import React , {Component} from 'react';

import './App.css';


class App extends Component{

 constructor (){
   super();
   this.state = {
     monstors : []
   }

}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monstors:users}));
}
render(){
  
    return (
      <div className="App">
          {this.state.monstors.map( m =>
            <h1 key={m.id}>{m.name}</h1>
            )}
      </div> 
    );
  }
}


export default App;
