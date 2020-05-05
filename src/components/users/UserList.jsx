import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

import PropTypes from 'prop-types'
import './UserList.css'

const UserList = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="user-list">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
export default UserList
