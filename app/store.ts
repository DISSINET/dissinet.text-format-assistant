import { keys, toJS, observable, action, computed } from "mobx";

export default class AppStore {
  _html;

  constructor() {
    this._html = observable.box("");
  }

  @computed
  get html(): string {
    return toJS(this._html);
  }

  @action
  changeHtml(newHtml): void {
    newHtml = newHtml.split("className=").join("class=");
    if (this.validateHtml(newHtml)) {
      this._html.set(newHtml);
    }
  }

  validateHtml(html) {
    var doc = document.createElement("div");
    doc.innerHTML = html;
    const valid = doc.innerHTML === html;
    console.log("valid", valid);
    return valid;
  }
}
