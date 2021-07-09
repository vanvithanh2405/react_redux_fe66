import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            name: "",
            email: "",
            phoneNumber: "",
            type: "USER",
        };
        this.close = React.createRef();
    }
    handleOnChange = (event) => {
        const { name, value } = event.target;
        // this.props.changeUserEdit(name,value);
        this.setState({
            [name]: value,
        });
        //gọi dispatch làm thay đổi giá trị edit user
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.close.current.click();
    };

    // //Chạy khi cả props hoặc state thay đổi
    static getDerivedStateFromProps(newProps, currentState) {
        //newProps là props đã được thay đổi trước khi render
        if (newProps.editUser.username !== currentState.username) {
            //Bấm edit
            currentState = { ...newProps.editUser };
        }
        return currentState;
        // userNguyen
        // this.props = {}
    }

    // //lifecycle này chỉ chạy khi props thay đổi
    // componentWillReceiveProps(newProps) {
    //     let newState = newProps.editUser;
    //     this.setState(newState);
       
    // }

    render() {
        const editUser = this.state; //editUser Từ redux
        console.log(editUser);
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
                            <h5 className="modal-title">
                                {editUser ? "EDIT USER" : "ADD USER"}
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={editUser.username}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={editUser.name}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={editUser.email}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phoneNumber"
                                        value={editUser.phoneNumber}
                                        onChange={this.handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <select
                                        className="form-control"
                                        name="type"
                                        value={editUser.type}
                                        onChange={this.handleOnChange}
                                    >
                                        <option>USER</option>
                                        <option>VIP</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
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

const mapStateToProps = (state) => {
    return {
        editUser: state.stateUser.editUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (user) => {
            const action = {
                type: "SUBMIT",
                payload: user,
            };
            dispatch(action);
        },
        changeUserEdit: (name, value) => {
            const action = {
                type: 'CHANGE_USER_EDIT',
                payload: {
                    name, value
                }

            }
            //Đưa dữ liệu khi người dùng change input về redux
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);