import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import UserReposList from './UserReposList'

import PropTypes from 'prop-types'

import './UserDetail.css'

export class UserDetail extends Component {
  componentDidMount() {
    this.props.getUserDetail(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
  }

  static propsTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUserDetail: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  }

  render() {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      blog,
    } = this.props.user

    const { loading, repos } = this.props

    if (loading) return <Spinner />
    return (
      <Fragment>
        <Link to="/">
          <button className="btn btn-info my-1 mt-3">Back To Search</button>
        </Link>
        <div className="card user-detail-card p-4 mt-2">
          <div className="text-center ">
            <img src={avatar_url} alt="avatar" className="user-detail-img" />
            <h3>{name}</h3>
            <p>Location : {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h4>Bio</h4>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url}>
              <button className="btn btn-dark">Visit Github Profile</button>
            </a>
            <ul className="list-group text-left mt-3">
              {login && (
                <Fragment>
                  <li className="list-group-item p-2">
                    <p className="m-1">Username: {login}</p>
                  </li>
                </Fragment>
              )}
              {company && (
                <Fragment>
                  <li className="list-group-item p-2">
                    <p className="m-1">Company: {company}</p>
                  </li>
                </Fragment>
              )}
              {blog && (
                <Fragment>
                  <li className="list-group-item p-2">
                    <p className="m-1">Website: {blog}</p>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center my-3">
          <div className="more-detail">
            {hireable ? (
              <span className="badge badge-success my-1">
                Hireable <i className="fas fa-check-circle"></i>
              </span>
            ) : (
              <span className="badge badge-danger my-1">
                Hireable <i className="fas fa-times-circle"></i>
              </span>
            )}
            <span class="badge badge-primary">Followers: {followers}</span>
            <span class="badge badge-warning">Following: {following}</span>
            <span class="badge badge-dark">Public Repos: {public_repos}</span>
            <span class="badge badge-secondary">
              Public Gists: {public_gists}
            </span>
          </div>
        </div>
        <div className="mb-3">
          <UserReposList repos={repos} />
        </div>
      </Fragment>
    )
  }
}

export default UserDetail
