import * as React from "react";
import { connect } from "react-redux";
import * as moment from "moment";

import { fetchWorkers } from "../actions";

const { version } = require("../../package.json");

const updateTimeout = 1000 * 60 * 10; //10mins

type Props = {
  lastUpdated: string;
  error?: Error;
  fetchWorkers: (params: string) => any;
};

export class Updater extends React.Component<Props> {
  componentDidMount() {
    const update = () => this.props.fetchWorkers(location.search);

    //todo: maybe re-call server on error/down rapidly (1min)
    //and when response is ok - request each 10-60min
    //or just ping server for changes
    //and request orders only when changed?
    update();
    setInterval(update, updateTimeout);
  }

  render() {
    const lastUpdateTime = moment(this.props.lastUpdated).format(
      `ddd, MMM-D'YY HH:mm:ss`
    );

    const { error } = this.props;

    return (
      <div className="app-info">
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
