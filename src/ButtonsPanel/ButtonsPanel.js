import React from "react";
import "./ButtonsPanel.css";

class Button extends React.Component {
  resetOrReinitCounter = reset => {
    this.props.resetCounterVal(reset);
  };

  render() {
    return (
      <div className="buttons-panel">
        <button onClick={this.props.changecouter}>add step</button>
        <button onClick={() => this.resetOrReinitCounter(false)}>ReInit</button>
        <button onClick={() => this.resetOrReinitCounter(true)}>Reset</button>
      </div>
    );
  }
}

export default Button;
