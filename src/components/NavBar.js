import React from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import Logo from '../assets/main.png'

const NavBar = () => {
    return (
        <div className='Navcontainer'>
            <div className='Navlogo'>
                <Link to="/"><img src={Logo}/></Link>
            </div>
            <div className='Navdiv'>
                <Link to="/todo">todoapp</Link>
                <Link to="/#">componasd</Link>
                <Link to="/#">culkasd</Link>
                <Link to="/#">tomato</Link>
                <Link to="/#">hotsss</Link>
            </div>
        </div>
    )
}


export default NavBar