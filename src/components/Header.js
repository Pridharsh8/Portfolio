import React from 'react'
import './head.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className='head'>
        <FontAwesomeIcon icon={faInfinity} size="3x" color="pink" />
        <div className='tag'>
        <Link to='/Portfolio/' className='link'>Home</Link>
        <Link to='/Projects' className='link'>Projects</Link>
        <Link to='/Achievements' className='link'>Achievements</Link>
        <Link to='/Certifications' className='link'>Certifications</Link>
        </div>
    </div>
  )
}

export default Header;