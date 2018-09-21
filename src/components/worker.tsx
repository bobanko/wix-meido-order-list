
import * as React from "react";

import { Worker } from './types';
import "./worker.scss";

export type Props = {
  worker: Worker;
}

export class WorkerComponent extends React.Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
  }

  render() {

    const { worker } = this.props;

    const getAbbr = (str) => {
      const regex1stLetters = /(\w)\w+[\W](\w)\w+/;
      const [, a, b] = str.match(regex1stLetters);
      return `${a}${b}`.toLowerCase();
    }

    const contractorAbbr = getAbbr(worker.order.contractor);
    const nameAbbr = getAbbr(worker.name);

    const char1 = nameAbbr.charCodeAt(0);
    const char2 = nameAbbr.charCodeAt(1);

    const startChar = 97, endChar = 122;

    const
      h = (char1 - startChar) / (endChar - startChar) * 360,
      s = 80,
      l = 40;

    const style = {
      '--color': `hsl(${h},${s}%,${l}%)`
    }

    return (
      <div className="worker fl-row">

        <div className="av" style={style}>
          {nameAbbr}
        </div>

        <div className="fl-col">
          <div className="worker__title">
            <div className="worker__name">{worker.name}</div>
          </div>

          <div className="order">
            <div className="order__name">
              {worker.order.title}
            </div>
            { /*<div className="order__contractor">{worker.order.contractor}
            </div>*/}

          </div>
        </div>

      </div>);
  }
}