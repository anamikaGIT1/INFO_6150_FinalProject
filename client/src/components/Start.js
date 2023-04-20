import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import './Start.css'
const Start = () => {
    return(
        <div className='caro'>
        <h1 align="center"><b>Fixerr</b></h1>
        <Carousel autoPlay interval="500" transitionTime="1400" infiniteLoop>
            <div>
                <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <Link to='/home'>
                <p className="legend">Web Development</p>
                </Link>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80" alt="" />
                <Link to='/home'>
                <p className="legend">Business</p>
                </Link>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <Link to='/home'>
                <p className="legend">Finance & Accounting</p>
                </Link>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="" />
                <Link to='/home'>
                <p className="legend">IT & Software</p>
                </Link>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                <Link to='/home'>
                <p className="legend">Office Productivity</p>
                </Link>
            </div>
        </Carousel>
        <div align="center" className='butt'>
            <Link to='/home'>
            <button className='btn btn-danger' >Take Courses</button>
            </Link>
        </div>
    </div>
    )
}

export default Start