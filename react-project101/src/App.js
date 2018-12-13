import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      toDisplay: false,
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data=>this.setState({users:data}));
  }
  

  // fetch()

  render() {
    const userList = this.state.users.map((user =>(
      <div key = {user.id}>
        <h3>{user.title}</h3>
        <p>{user.body}</p>
      </div>
    )))
    return (
      <div className="App">
        <h1>Displaying a list of items</h1>
            {userList}
      </div>
    );
  }
}

export default App;
