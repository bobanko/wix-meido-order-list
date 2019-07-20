import * as React from "react";
import classnames from "classnames";

const { users } = require("../users.config");

import { Worker } from "./types";
import "./worker.scss";

export type Props = {
  worker: Worker;
};

const userNames = new Map(users);
function getEmoji(userName) {
  return userNames.get(userName);
}

export class WorkerComponent extends React.Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
  }

  getAbbr(str: String) {
    const regex1stLetters = /(\w)\w*[\W]+(\w)\w*/;
    try {
      const [, a, b] = str.match(regex1stLetters);
      return `${a}${b}`.toLowerCase();
    } catch {
      console.warn("wrong string format", str);
      return null;
    }
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

    const emoji = getEmoji(worker.name);
    const nameAbbr = this.getAbbr(worker.name);

    const setAvColor = el => {
      el && el.style.setProperty("--color", this.getAvatarColor(nameAbbr));
    };

    return (
      <div className="worker fl-row">
        <div
          className={classnames("avatar", { emoji: !!emoji, abbr: !emoji })}
          ref={el => setAvColor(el)}
        >
          {emoji || nameAbbr}
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
