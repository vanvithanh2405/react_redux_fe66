import React, { Component } from "react";
import {connect} from 'react-redux';

class Search extends Component {
  

  handleSearch = (event) => {
    let {searchItem} = this.props;
    let keyword = event.target.value;
    searchItem(keyword);
  }
  
  render() {
    return (
        <input type="text" name="search" className="form-control mb-3 w-50" onChange={this.handleSearch} />
    ) 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    searchItem: (keyword) => {
      const action = {
        type: 'GET_KEYWORD',
        payload: keyword
      }

      dispatch(action)
    }
  }
}


export default connect(null,mapDispatchToProps) (Search);
