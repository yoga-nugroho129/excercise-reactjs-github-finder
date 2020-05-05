import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import UserList from './components/users/UserList'
import UserDetail from './components/users/UserDetail'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'

import About from './components/pages/About'

import './App.css'

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  }

  // Display 30 user at Home page
  async componentDidMount() {
    this.setState({ loading: true })

    const response = await fetch(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ).then((res) => res.json())

    this.setState({
      users: response,
      loading: false,
    })
  }

  // Search User
  searchUsers = async (text) => {
    this.setState({ users: [], loading: true })

    const response = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ).then((res) => res.json())

    this.setState({
      users: response.items,
      loading: false,
    })
  }

  // Get User Detail
  getUserDetail = async (username) => {
    this.setState({ loading: true })

    const response = await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ).then((res) => res.json())

    this.setState({ user: response, loading: false })
  }

  // Get User Repos
  getUserRepos = async (username) => {
    this.setState({ loading: true })

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ).then((res) => res.json())

    this.setState({ repos: response, loading: false })
  }

  // Clear User
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  // Show Alert
  showAlert = (text) => {
    this.setState({ alert: { msg: text } })

    setTimeout(() => {
      this.setState({ alert: null })
    }, 3000)
  }

  render() {
    const { users, user, repos, loading } = this.state
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Alert alert={this.state.alert} />
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      showAlert={this.showAlert}
                    />
                    <hr />
                    <UserList users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <UserDetail
                    {...props}
                    getUserDetail={this.getUserDetail}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
