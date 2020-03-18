import React from "react";

class step extends React.Component {
  callb = () => {
    let steps = this._inputStep.value;
    this.props.StepInpValue(steps);
  };

  render() {
    return (
      <input
        type="number"
        ref={data => {
          this._inputStep = data;
        }}
        onChange={() => this.callb()}
      />
    );
  }
}

export default step;
