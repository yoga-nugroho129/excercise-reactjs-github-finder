import React from 'react'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className="alert alert-warning mt-3" style={{ color: 'red' }}>
        <i className="fas fa-exclamation-circle"></i> {alert.msg}
      </div>
    )
  )
}

export default Alert
