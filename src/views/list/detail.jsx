import React from "react";
import {
  Link
} from "react-router-dom"
export default class Detail extends React.Component {
  render() {
    return <div>
          {/* <a href='/index'>详情</a> */}
        <Link to="/index">详情</Link>

        </div>;
  }
}
