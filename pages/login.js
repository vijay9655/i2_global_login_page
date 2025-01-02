import React from 'react'
import Loginform from "../src/components/common/Login"

const Login = (users) => {


  return (
<Loginform users={users.users}/>
  )
}

export default Login