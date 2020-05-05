import React from 'react'
import UserRepoItem from './UserRepoItem'

import PropTypes from 'prop-types'

const UserReposList = ({ repos }) => {
  return repos.map((repo) => <UserRepoItem key={repo.id} repo={repo} />)
}

UserReposList.propType = {
  repos: PropTypes.array.isRequired,
}

export default UserReposList
