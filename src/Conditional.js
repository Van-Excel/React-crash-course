import React from 'react';


export const Conditional = () => {
  const isLoggedIn = true;
  return(
    <div>
      {isLoggedIn? <h2>Welcome</h2>: <p>Please Login</p>}
    </div>
  )
}