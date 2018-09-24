import * as React from "react";

import { Worker } from "./types";
import "./worker.scss";

export type Props = {
  worker: Worker;
};

export class WorkerComponent extends React.Component<Props> {
  props: Props;

  nameAbbr: String;
  avatarEl: HTMLElement;

  constructor(props) {
    super(props);
    const { worker } = this.props;
    this.nameAbbr = this.getAbbr(worker.name);
  }

  componentDidMount() {
    this.avatarEl.style.setProperty(
      "--color",
      this.getAvatarColor(this.nameAbbr)
    );
  }

  getAbbr(str: String) {
    const regex1stLetters = /(\w)\w+[\W](\w)\w+/;
    const [, a, b] = str.match(regex1stLetters);
    return `${a}${b}`.toLowerCase();
  }

  getAvatarColor(abbr: String) {
    const char1 = abbr.charCodeAt(0);
    const char2 = abbr.charCodeAt(1);

    const startChar = 97,
      endChar = 122;

    const h = ((char1 - startChar) / (endChar - startChar)) * 360,
      s = 100,
      l = 40;

    return `hsl(${h},${s}%,${l}%)`;
  }

  render() {
    const { worker } = this.props;

    return (
      <div className="worker fl-row">
        <div className="av" ref={el => (this.avatarEl = el)}>
          {this.nameAbbr}
        </div>

        <div className="fl-col">
          <div className="worker__title">
            <div className="worker__name">{worker.name}</div>
          </div>

          <div className="order">
            <div className="order__name">{worker.order.title}</div>
          </div>
        </div>
      </div>
    );
  }
}
