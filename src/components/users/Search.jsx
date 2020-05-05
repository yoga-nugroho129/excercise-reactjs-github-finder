import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Search.css'

export class Search extends Component {
  state = {
    text: '',
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
  }

  searchText = (e) => {
    this.setState({ text: e.target.value })
  }

  submitText = (e) => {
    e.preventDefault()
    if (this.state.text === '') {
      this.props.showAlert(`Please enter some text...`)
    } else {
      /* send the props up to the parrent */
      this.props.searchUsers(this.state.text)
      this.setState({ text: '' })
    }
  }

  render() {
    const { clearUsers, showClear } = this.props
    return (
      <div className="my-3">
        <form className="form-group" onSubmit={this.submitText}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.searchText}
          />
          <button className="btn btn-secondary btn-block">Search</button>
        </form>
        {showClear && (
          <button
            className="btn btn-light btn-block"
            style={{ border: '1px solid #dadada' }}
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    )
  }
}

export default Search
