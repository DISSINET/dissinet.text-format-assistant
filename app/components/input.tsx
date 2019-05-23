import * as React from "react";
import config from "/config";

type Props = {};

export default class InputComponent extends React.Component<Props> {
  props;

  constructor(props) {
    super(props);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.changeHtml(e.target.value);
  }

  render() {
    return (
      <div className="input-wrapper" data-testid="input-wrapper">
        <h1 className="heading text-muni">Input</h1>
        <textarea
          onChange={this.handleChange.bind(this)}
          defaultValue={config.defaultInputHTML}
        />
      </div>
    );
  }
}
