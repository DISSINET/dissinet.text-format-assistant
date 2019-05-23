import * as React from "react";

type Props = {};

export default class OutputComponent extends React.Component<Props> {
  props;
  outputRef;

  constructor(props) {
    super(props);
    this.outputRef = React.createRef();
  }

  shouldComponentUpdate() {
    console.log("should update");
    return true;
  }

  componentDidMount() {
    this.updateOutput();
  }
  componentDidUpdate() {
    this.updateOutput();
  }

  updateOutput() {
    const outputEl = this.outputRef.current;
    outputEl.innerHTML = this.props.html;
  }

  render() {
    console.log("rendering");
    return (
      <div className="output-wrapper" data-testid="output-wrapper">
        <h1 className="heading text-muni">Output</h1>
        <div className="output-html" ref={this.outputRef} />
      </div>
    );
  }
}
