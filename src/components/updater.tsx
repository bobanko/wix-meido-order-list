import * as React from "react";
import { connect } from "react-redux";
import * as moment from "moment";

import { fetchWorkers } from "../actions";

const { version } = require("../../package.json");

const updateTimeout = 60 * 10; //10mins
const updateTimeoutMs = 1000 * updateTimeout;

type Props = {
  lastUpdated: string;
  isLoading: boolean;
  error?: Error;
  fetchWorkers: (params: string) => any;
};

type State = {
  timeLeft: number;
};

export class Updater extends React.Component<Props, State> {
  state = { timeLeft: updateTimeout };

  componentDidMount() {
    //todo: maybe re-call server on error/down rapidly (1min)
    //and when response is ok - request each 10-60min
    //or just ping server for changes
    //and request orders only when changed?
    this.update();

    const tick = () => {
      this.setState(state => ({
        timeLeft: state.timeLeft - 1
      }));
    };

    setInterval(tick, 1000);
    setInterval(this.update, updateTimeoutMs);
  }

  update = () => {
    this.setState(() => ({ timeLeft: updateTimeout }));
    this.props.fetchWorkers(location.search);
  };

  render() {
    const { error, lastUpdated } = this.props;

    const lastUpdateTime = moment(lastUpdated).format(`ddd, MMM-D'YY HH:mm:ss`);

    return (
      <div className="app-info">
        <button onClick={this.update}>update</button>

        <div>last update: {lastUpdateTime} </div>
        <div>
          status:
          {error ? (
            <span style={{ color: "red" }}>
              {error.message}
              💔
            </span>
          ) : (
            <span style={{ color: "limegreen" }}>online💚</span>
          )}
        </div>
        <div>ver. {version}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { workers, isLoading, lastUpdated, error } = state;

  return {
    workers,
    lastUpdated,
    isLoading,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchWorkers: params => dispatch(fetchWorkers(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Updater);
