import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'R2-D2'
  }

  changeCharacterNameHandler = (newName) => {
    this.setState({ username: newName });
  }

  inputNewNameHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserOutput 
          username={this.state.username}
          click={this.changeCharacterNameHandler.bind(this, "Luke Skywalker")}/>
        <UserOutput 
          username={this.state.username}
          click={this.changeCharacterNameHandler.bind(this, "Leia Organa")}/>
        <UserOutput 
          username={this.state.username}
          click={this.changeCharacterNameHandler.bind(this, "Han Solo")}/>
        <UserInput 
          username={this.state.username}
          change={this.inputNewNameHandler}/>
      </div>
    );
  }
}

export default App;
