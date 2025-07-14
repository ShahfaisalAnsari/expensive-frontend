import React from 'react'

const useAuth = () => {
    const user = {
        isAuth:localStorage.getItem("token")?true:false,
        role:"user"
    }
  return user;
}

export default useAuth