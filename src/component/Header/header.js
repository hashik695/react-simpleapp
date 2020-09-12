import React from 'react'
import './header.css'
import {Link} from "react-router-dom"

export default function header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </header>
    )
}
