import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Clock from './components/Clock'
import SimpleList from './components/SimpleList'
import SimpleForm from './components/SimpleForm'
import Calculator from './components/Calculator'
import SignUpDialog from './components/SignUpDialog';
import HooksExample from './components/HooksExample';
import EffectHook from './components/EffectHook';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*
        <header className="App-header">
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
        </header>
      */}
        <Clock message={"HELLO, WORLD!"} />
        <hr />
        <EffectHook />
        <HooksExample />
        <hr />
        <SignUpDialog />
        <Calculator />
        <SimpleForm />
        <SimpleList items={[{id: 1, name: "foo"}, {id: 2, name: "bar"}]} />
      </div>
    );
  }
}

export default App;
