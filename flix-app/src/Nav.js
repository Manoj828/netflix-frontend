import React, { useEffect, useState } from 'react'
import  './Nav.css'

function Nav() {
    const[show,handleShow]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return()=>{
            window.removeEventListener('scroll')
        }
    },[])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <span className='nav_logo' >Netflix</span>
            <span className='nav_avatar' >N</span>
        </div>
    )
}

export default Nav
