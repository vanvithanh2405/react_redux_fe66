import React, { Component } from "react";
import { connect } from 'react-redux';
class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      name: '',
      email: '',
      phoneNumber: '',
      type: 'USER'
    }

    this.close = React.createRef();
  }


  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.props.onSubmit(this.state);
    this.close.current.click();
  }



  render() {
    const {editUser} = this.props;
    console.log(editUser)
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="title">
                {(editUser) ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.handleOnChange}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProp = (state) => {
  return {
    editUser: state.stateUser.editUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (user) => {
      const action = {
        type: 'SUBMIT',
        payload: user
      }

      dispatch(action)
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(Modal);
