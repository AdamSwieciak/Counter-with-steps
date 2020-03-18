import React, { Component } from "react";
import "./Counter.css";
import Button from "../ButtonsPanel/ButtonsPanel";
import Step from "../Step/Step";

// KOMPONENT FUNCKYJNY
// let Counter = () => {
//   return <div className="counter">Licznik</div>;
// };

//KOMPONENT KLASOWY
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couterValue: parseInt(this.props.initVal),
      step: 0
    };
    //  jESLI ES5 TO TO PONIZEJ
    // this.changeVal = this.changeVal.bind(this);
  }

  //SET STATE PIERWSZA OPCJA
  //   changeVal = () => {
  //     this.setState({
  //       couterValue: this.state.couterValue + 1
  //     });
  //   };

  // DRUGA OPCJA
  changeVal = () => {
    this.setState(prevstate => {
      return {
        couterValue: prevstate.couterValue + prevstate.step
      };
    });
    //this.setState({ couterValue: this.state.couterValue + this.state.step });
  };

  resetOrReinit = resFlag => {
    this.setState(prevstate => {
      if (resFlag) {
        return {
          couterValue: 0
        };
      } else {
        return {
          couterValue: prevstate.couterValue - prevstate.step
        };
      }
    });
  };

  stepF = valInp => {
    this.setState({ step: parseInt(valInp) });
  };

  render() {
    return (
      <div className="counter">
        Licznik:
        <span className="value">{this.state.couterValue}</span>
        <Button
          changecouter={this.changeVal}
          resetCounterVal={this.resetOrReinit}
        />
        <span>Krok: </span>
        <Step StepInpValue={this.stepF} />
      </div>
    );
  }
}

export default Counter;
