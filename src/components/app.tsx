import * as React from "react";
import * as moment from "moment";
import { Worker } from "./types";
import { WorkerComponent } from "./worker";

const { version } = require("../../package.json");

import "./app.scss";

type State = {
  workers: Array<Worker>;
  isLoading: boolean;
  error?: Error;
};

export class App extends React.Component<any, State> {
  state: State = {
    isLoading: false,
    workers: [],
    error: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getOrders(location.search);
  }

  getOrders = params => {
    this.setState({ isLoading: true });

    fetch(`/orders/${params}`)
      .then(data => data.json())
      .then(workers => this.setState({ workers }))
      .catch(error => this.setState({ error }))
      .then(() => this.setState({ isLoading: false }));
  };

  render() {
    const { workers, isLoading, error } = this.state;

    const currentDate = moment().format("dddd, MMMM Do, YYYY");
    const lastUpdateTime = moment().format(`ddd, MMM-D'YY HH:mm:ss`);

    return (
      <div>
        <h1>Orders for {currentDate}</h1>

        <div className="workers">
          {error && <div>{error.message}</div>}
          {isLoading && <div className="loader">Loading...</div>}
          {workers.map((worker, index) => (
            <WorkerComponent key={index} worker={worker} />
          ))}
          {!isLoading && workers.length === 0 && <h2>No orders</h2>}
        </div>

        <div className="app-info">
          <div>last update: {lastUpdateTime} </div>
          <div>status: offline</div>
          <div>ver. {version}</div>
        </div>
      </div>
    );
  }
}
