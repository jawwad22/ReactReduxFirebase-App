import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinked = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to='/'>Signup</NavLink>
            </li>

            <li>
                <NavLink to='/'>Log In</NavLink>
            </li>


        </ul>
    )
}

export default SignedOutLinked    