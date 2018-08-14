import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';

import axios from 'axios';

let that;
class App extends Component {

  constructor(props) {
    super(props);
    that = this;
  }

  state = {
    display: '',
    data: ''
  }

  clickHandler(numVal) {
    if (numVal === '=') {
      that.setState({ display: eval(that.state.display).toString() })
    }
    else {
      that.setState({ display: that.state.display + numVal })
    }
  }

  buttonBuilder() {
    let a = []
    for (let i = 0; i < 10; i++) {
      a.push(i);
    }
    return a.map(b => {
      return (<Button key={b + 10} onClick={this.clickHandler}>{b}</Button>)
    })
  }

  render() {
    return (
      <div className="App-device">
        <div className="row">
          <Display value={this.state.display} ></Display>
        </div>

        <div className="row">

          <div className="col">
            <Button key={0} onClick={this.clickHandler}>7</Button>
          </div>
          <div className="col">
            <Button key={1} onClick={this.clickHandler}>8</Button>
          </div>
          <div className="col">
            <Button key={2} onClick={this.clickHandler}>9</Button>
          </div>
          <div className="col">
            <Button key={3} id="op_arithmatic" onClick={this.clickHandler}>/</Button>
          </div>


          <div className="col">
            <Button key={4} onClick={this.clickHandler}>4</Button>
          </div>
          <div className="col">
            <Button key={5} onClick={this.clickHandler}>5</Button>
          </div>
          <div className="col">
            <Button key={6} onClick={this.clickHandler}>6</Button>
          </div>
          <div className="col">
            <Button key={7} id="op_arithmatic" onClick={this.clickHandler}>*</Button>
          </div>


          <div className="col">
            <Button key={8} onClick={this.clickHandler}>1</Button>
          </div>
          <div className="col">
            <Button key={9} onClick={this.clickHandler}>2</Button>
          </div>
          <div className="col">
            <Button key={10} onClick={this.clickHandler}>3</Button>
          </div>
          <div className="col">
            <Button key={11} id="op_arithmatic" onClick={this.clickHandler}>+</Button>
          </div>

          <div className="col">
            <Button key={0} onClick={this.clickHandler}>0</Button>
          </div>
          <div className="col">
            <Button key={1} onClick={this.clickHandler}>.</Button>
          </div>
          <div className="col">
            <Button key={2} onClick={this.clickHandler}>=</Button>
          </div>
          <div className="col">
            <Button key={3} id="op_arithmatic" onClick={this.clickHandler}>-</Button>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
