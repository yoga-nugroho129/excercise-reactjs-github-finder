import React from 'react'
import PropTypes from 'prop-types'

const UserRepoItem = ({ repo }) => {
  return (
    <div className="pb-1">
      <ul className="list-group">
        <li className="list-group-item">
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      </ul>
    </div>
  )
}

UserRepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default UserRepoItem
