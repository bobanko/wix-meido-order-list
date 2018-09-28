import * as React from "react";

import "./loader-linear.scss";

type Props = {
  isLoading: boolean;
};

export default class LoaderLinear extends React.Component<Props> {
  render() {
    //this.props.isLoading;

    return (
      <div
        className={["loader-linear", this.props.isLoading && "is-loading"].join(
          " "
        )}
      >
        <div className="loader-linear__track" />
        <div className="loader-linear__indicator" />
      </div>
    );
  }
}
