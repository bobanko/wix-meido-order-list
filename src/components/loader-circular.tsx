import * as React from "react";
import classnames from "classnames";

import "./loader-circular.scss";

type Props = {
  text?: string | number;
  value?: number;
  ccw?: boolean;
  isLoading: boolean;
};

export default class LoaderCircular extends React.Component<Props> {
  setValue = (el, value) => {
    el && el.style.setProperty("--value", value || 0);
  };

  render() {
    return (
      <svg
        ref={el => this.setValue(el, this.props.value)}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 40 40"
        className={classnames("loader-circular", {
          "is-loading": this.props.isLoading,
          infinite: this.props.value === undefined,
          ccw: this.props.ccw
        })}
      >
        <circle className="loader-circular__track" />
        <circle className="loader-circular__indicator" />
        <text x="50%" y="50%" dy=".3em">
          {this.props.text}
        </text>
      </svg>
    );
  }
}
