import React from 'react'
import '../styles/App.css'

function ResetpasswordForm() {
  return (
      <div id='passResetContainer'>
          <form>
              <label>New Password </label>
              <input type='text' id='newpass' placeholder='Enter the Password...' />
              <label>Confirm Password </label>
              <input type='text' id='confirmpass' placeholder='Enter the Password...' />
              <button type='submit' id='resetpass'>save</button>
          </form>
    </div>
  )
}

export default ResetpasswordForm;