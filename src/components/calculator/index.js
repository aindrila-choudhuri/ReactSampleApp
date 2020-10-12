
import React, { Component } from "react";
import "./index.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox1: 0,
      textBox2 :0,
      result: 0,
      isOperationDone: false
    };
  }
  handleText1Change(event){
    this.setState({
      textBox1: event.target.value
    });
  }

  handleText2Change(event){
    this.setState({
      textBox2: event.target.value
    });
  }

  handleAdd(event) {
    event.preventDefault();
    this.setState({
      result : parseInt(this.state.textBox1, 10) + parseInt(this.state.textBox2, 10),
      isOperationDone : true
    });
  }

  handleSub(event) {
    event.preventDefault();
    this.setState({
      result : parseInt(this.state.textBox1, 10) - parseInt(this.state.textBox2, 10),
      isOperationDone : true

    });
  }

  handleMul(event) {
    event.preventDefault();
    this.setState({
      result : parseInt(this.state.textBox1, 10) * parseInt(this.state.textBox2, 10),
      isOperationDone : true
    });
  }

  handleDiv(event) {
    event.preventDefault();
    this.setState({
      result : parseInt(this.state.textBox1, 10) / parseInt(this.state.textBox2, 10),
      isOperationDone : true
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      result : 0,
      isOperationDone : false,
      textBox1 : 0,
      textBox2: 0
    });
  }
  render() {
    return (
      <div className="layout-column align-items-center">
        <div data-testid="total-operations" className="pt-50 total-operations"></div>
        <div className="card">
          
          <section className="card-text">
            <div className="layout-row justify-content-around align-items-center mt-40">
              <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                    name="input1" value = {this.state.textBox1} onChange={this.handleText1Change.bind(this)}/>
              <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator"></label>
              <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                    placeholder="Eg: 2" value = {this.state.textBox2} onChange={this.handleText2Change.bind(this)}/>
            </div>

            <div className="layout-row justify-content-around mt-30">
              <button className="operationFont" type="submit" data-testid="addButton" onClick={this.handleAdd.bind(this)}>+</button>
              <button className="operationFont" type="submit" data-testid="subtractButton" onClick={this.handleSub.bind(this)}>-</button>
              <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={this.handleMul.bind(this)}>*</button>
              <button className="operationFont" type="submit" data-testid="divideButton" onClick={this.handleDiv.bind(this)}>/</button>
            </div>

            <div className="layout-row justify-content-between align-items-center mt-30">
              <button type="reset" data-testid="resetButton" className="outline danger" onClick={this.handleReset.bind(this)}>Reset</button>
              <div className="layout-row justify-content-center align-items-center result-container">
               {this.state.isOperationDone && <div data-testid="result" className="result-value ma-0 slide-up-fade-in">
                    {this.state.result}
                  </div>}
                  
              </div>
            </div>
          </section>

        </div>
      </div>
    );
  }
}