import * as React from "react";
import { groupBy, map } from 'lodash';

import { hash } from "../../config.js";
import { Worker } from './types';
import { WorkerComponent } from './worker';

import "./app.scss";

type State = {
  workers: Array<Worker>,
  isLoading: boolean,
  error?: object,
};


export class App extends React.Component<any, State> {
  state: State = {
    isLoading: false,
    workers: [],
    error: null,
  };

  hash: string = '';

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(location.search);
    this.hash = searchParams.get('hash');
    this.getOrders();
  }

  getOrders = () => {
    this.setState({ isLoading: true });

    fetch(`/orders/?hash=${this.hash}`)
      .then(data => data.json())
      .then((workers) => this.setState({ workers }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { workers } = this.state;
    const currentDate = new Date().toLocaleDateString();

    return (
      <div>
        <h1>{`Orders for ${currentDate}`}</h1>

        <div className="workers">
          {
            workers.length === 0 &&
            <div className="loader">Loading...</div>
          }
          {
            workers.map((worker, index) =>
              (<WorkerComponent key={index} worker={worker} />)
            )
          }
        </div>

      </div>
    );

  }
}

