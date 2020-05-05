import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './UserItem.css'

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className="card text-center my-2">
      <img src={avatar_url} alt="profile" className="my-2" />
      <p className="my-2">{login}</p>
      <Link to={`/user/${login}`}>
        <button className="btn btn-dark mb-3">More</button>
      </Link>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
