import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import './AboutUs.css'
import { removeCard } from './../Actions/Actions'

function AboutUs() {
    const counter = useSelector(state => state.counter)
    const card1 = useSelector(state => state.card1)
    const dispatch = useDispatch()

    const deleteCard = () => {
      dispatch(removeCard())
  }
  return (
    <>
        <div className="about-wrapper p-5">
          <div className="container text-center">
            <h1>ABOUT US</h1>
            <h1>Counter: {counter}</h1>
            <div className='card' dangerouslySetInnerHTML={{ __html: card1}}></div>
            <button className='btn-primary m-1' onClick={deleteCard}>Remove Card</button>
            <Link to='/' className='m-1 links' >Home</Link>
          </div>
        </div>
    </>
  )
}

export default AboutUs