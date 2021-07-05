import React, { Component } from "react";
import {connect} from 'react-redux';

class UserItem extends Component {
  render() {
    let { user, deleteUser, editUser } = this.props;
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              console.log(user)
              editUser(user);
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => {
            deleteUser(user.id);
          }}>Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    deleteUser: (id) => {
      const action = {
        type: 'DELETE_USER',
        payload: id
      }

      dispatch(action);
    },

    editUser: (user) => {
      const action = {
        type: 'EDIT',
        payload: user
      }

      dispatch(action);
    }
    
  };
}

export default connect(null, mapDispatchToProps) (UserItem);