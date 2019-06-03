import * as React from "react";
import InputComponent from "./input";
import OutputComponent from "./output";
import IconListComponent from "./iconlist";
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
        <div className="io-wrapper">
          <InputComponent changeHtml={store.changeHtml.bind(store)} />
          <OutputComponent html={store.html} />
        </div>
        <IconListComponent />
      </div>
    );
  }
}
