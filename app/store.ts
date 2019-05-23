import { keys, toJS, observable, action, computed } from "mobx";

export default class AppStore {
  _html;

  constructor() {
    this._html = observable.box("");
  }

  @computed
  get text(): string {
    return toJS(this._html);
  }

  @action
  changeText(newHtml): void {
    this._html.set(newHtml);
  }
}
