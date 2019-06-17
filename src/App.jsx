import React, { Component } from 'react';
import CalcButton from './Components/CalcButton';
import ActionButton from './Components/ActionButton';
import './App.css';
import * as math from 'mathjs'
class App extends Component {
  state = {
    value: ' ',
    defaultZero: 0
  }
  valueString = (passedValue) => {
    this.setState({
      value: this.state.value + passedValue,
      defaultZero: null
    })
  }
  clearCalc = () => {
    this.setState({
      value: '',
      defaultZero: 0
    })
  }
  handleEqual = () => {
    this.setState({ value: math.eval(this.state.value) });
  }
  render() {
    return (
      <div className="App">
        <div className='calc'>
          <div className='calc__output'>
            {this.state.defaultZero}
            {this.state.value}
          </div>
          <div className='calc__row'>
            <CalcButton insertValue={this.valueString}>7</CalcButton>
            <CalcButton insertValue={this.valueString}>8</CalcButton>
            <CalcButton insertValue={this.valueString}>9</CalcButton>
            <CalcButton insertValue={this.valueString}>*</CalcButton>
          </div>
          <div className='calc__row'>
            <CalcButton insertValue={this.valueString}>5</CalcButton>
            <CalcButton insertValue={this.valueString}>4</CalcButton>
            <CalcButton insertValue={this.valueString}>6</CalcButton>
            <CalcButton insertValue={this.valueString}>/</CalcButton>
          </div>
          <div className='calc__row'>
            <CalcButton insertValue={this.valueString}>1</CalcButton>
            <CalcButton insertValue={this.valueString}>2</CalcButton>
            <CalcButton insertValue={this.valueString}>3</CalcButton>
            <CalcButton insertValue={this.valueString}>+</CalcButton>
          </div>
          <div className='calc__row'>
            <CalcButton insertValue={this.valueString} className='zero'>0</CalcButton>
            <CalcButton insertValue={this.valueString} >.</CalcButton>
            <CalcButton insertValue={this.valueString} >-</CalcButton>
          </div>
          <div className='calc__row'>
            <ActionButton action={this.clearCalc}>AC</ActionButton>
            <ActionButton action={this.handleEqual}>=</ActionButton>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
