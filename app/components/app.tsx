import * as React from "react";
import InputComponent from "./input";
import { observer } from "mobx-react";

type Props = {
  store: any;
};
@observer
export default class App extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const store = this.props.store;
    return (
      <div>
        <InputComponent />
        test
      </div>
    );
  }
}
