import * as React from "react";

type Props = {};

export default class OutputComponent extends React.Component<Props> {
  props;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="output-wrapper" data-testid="output-wrapper">
        <h1 className="heading text-muni">Output</h1>
      </div>
    );
  }
}
