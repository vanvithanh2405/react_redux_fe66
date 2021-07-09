import React, { Component } from "react";
import UserItem from "./UserItem";

import { connect } from 'react-redux';


class Users extends Component {

  renderTBody = () => {
    let { keyword, userList } = this.props;
    // return userList.map((user, index) => {
    //   return <UserItem user={user} key={index}></UserItem>
    // });

    if (keyword === "") {
      return userList.map((user, index) => {
        return <UserItem user={user} key={index}></UserItem>
      }
      );
    }
    else {
      return userList.filter(user => {
        return user.username.toLowerCase().includes(keyword.toLowerCase());
      }).map((user, index) => {
        return <UserItem user={user} key={index}></UserItem>
      })
    }
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTBody()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.stateUser.userList,
    keyword: state.stateUser.keyword
  }
}

export default connect(mapStateToProps, null)(Users);