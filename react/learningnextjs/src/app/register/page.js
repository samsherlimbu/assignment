import React from 'react'

const page = () => {
  return (
    <div className='form'>
      <form >
        <p>Enter your name:</p>
        <input type="text" name="name" />
        <p>Enter your email:</p>
        <input type="text" name="email" />
        <p>Enter your phone number:</p>
        <input type="text" name="phone" />
        <p>Enter your address:</p>
        <input type="text" name="address" />
        <p>Enter your password</p>
        <input type="text" name="password" />
        <p>confirm password</p>
        <input type="text" name="cpassword" /><br />
        <input className="button" type="submit" value="submit" />
      </form>
    </div>
  )
}

export default page
