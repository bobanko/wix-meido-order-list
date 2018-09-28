import * as React from "react";
import * as moment from "moment";
import { connect } from "react-redux";

import { Worker } from "./types";
import { WorkerComponent } from "./worker";
import Updater from "./updater";
import LoaderLinear from "./loader-linear";

import "./app.scss";

type Props = {
  workers: Array<Worker>;
  isLoading: boolean;
  error?: Error;
  updateWorkers: (string) => any;
};

export class App extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { workers, isLoading, error } = this.props;

    const currentDate = moment().format("dddd, MMMM Do, YYYY");

    return (
      <div>
        <LoaderLinear isLoading={isLoading} />
        <Updater />

        <h1>Orders for {currentDate}</h1>

        <div className="workers">
          {workers.map((worker, index) => (
            <WorkerComponent key={index} worker={worker} />
          ))}
          {!isLoading && workers.length === 0 && <h2>No orders</h2>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { workers, isLoading, error } = state;

  return {
    workers,
    isLoading,
    error
  };
};

export default connect(mapStateToProps)(App);
