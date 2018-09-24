import * as React from "react";

import "./progress.scss";

type Props = {
  isLoading: boolean;
};

export default class Progress extends React.Component<Props> {
  render() {
    //this.props.isLoading;

    return (
      <div
        className={["progress", this.props.isLoading && "is-loading"].join(" ")}
      >
        <div className="progress__track" />
        <div className="progress__indicator" />
      </div>
    );
  }
}
