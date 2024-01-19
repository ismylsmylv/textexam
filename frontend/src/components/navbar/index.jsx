import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <ul>
                <li onClick={() => {
                    navigate("/")
                }}>
                    Home
                </li>
                <li onClick={() => {
                    navigate("/admin")
                }}>
                    Admin
                </li>
                <li onClick={() => {
                    navigate("/contact")
                }}>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Navbar