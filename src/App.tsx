import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputComponent } from "./component/InputComponent";


interface State {
    value: string;
}

interface Props {
    
}

class App extends Component<Props,State> {

  state: State = {value: ""}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <InputComponent value={this.state.value} onChange={typedValue => this.setState({ value: typedValue})} />
          <span>{this.state.value}</span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
