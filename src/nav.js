import React from 'react'
import  {Link} from 'react-router-dom'
import './App.css';

export default function Nav() {
    return (
        <div>
            <div><h3>React Todo List App</h3></div>
            <div className="topnav">
                <Link style={{ textDecoration: 'none' }} to="/tasklist"><li>Tasklist</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/tasks"><li>Tasks</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/contact"><li>Contact</li></Link>
            </div>

       </div>
    )
}