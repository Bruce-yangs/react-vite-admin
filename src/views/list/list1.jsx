import React from "react";
import {
  Link
} from "react-router-dom";
export default class List extends React.Component {
  constructor(props) {
    console.log(props)

    super(props);
  }
  goToDetail(id){
    console.log(id)
    this.props.history.push({pathname:'/index/detail/3/a'/* , query:{id:3} */})
  }
  render() {
  
    return (
      <div>
        <Link to="/index/detail">去detail</Link>
        {/* <a href='/index/detail'>去detail</a> */}
        <div onClick={()=>this.goToDetail(1)} style={{cursor: "pointer"}}>编程路由跳转去detail页</div>
      </div>
    );
  }
}
