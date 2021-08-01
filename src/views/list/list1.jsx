import React from "react";
import {
  Link
} from "react-router-dom";
export default class List extends React.Component {
  render() {
    return (
      <div>
        <Link to="/index/detail">去detail</Link>
        {/* <a href='/index/detail'>去detail</a> */}
      </div>
    );
  }
}
