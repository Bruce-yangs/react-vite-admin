import React from "react";
import {
  Link
} from "react-router-dom"
export default class Detail extends React.Component {
  constructor(props) {
    console.log(props.match.params.id)
    console.log(props.match.params)

    super(props);
  }
  
  render() {
    return <div>
          {/* <a href='/index'>详情</a> */}
        <Link to="/index">详情</Link>

        </div>;
  }
}
