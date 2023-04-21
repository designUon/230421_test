import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/style.css'

export default function NavHeader() {

    const [onClick, setOnclick] = useState('/');

    return (
        <div className='header'>
            <Link to='/'
                className={onClick === '/' ? "green" : ""}
                onClick={()=>{
                    setOnclick('/');
                }}
            >Home</Link>
            <Link to='/story'
                className={onClick === '/story' ? "green" : ""}
                onClick={()=>{
                    setOnclick('/story');
                }}
            >Story</Link>
        </div>
    )
}
