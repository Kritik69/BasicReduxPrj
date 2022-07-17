import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import {increment} from './../Actions/Actions'
import {decrement} from './../Actions/Actions'
import {card} from './../Actions/Actions'
import {useDispatch} from 'react-redux'

function Home() {
    const dispatch = useDispatch();
    const plus = () => {
      dispatch(increment())
    }
    const minus = () => {
      dispatch(decrement())
    }
    const addCard = () => {
        dispatch(card())
    }
  return (
    <>
        <div className="wrapper p-5">
            <div className="container">
            <h1>Home</h1>
                <button onClick={plus} className='btn-primary btn text-white m-1'>Add</button>
                <button onClick={minus} className='btn-primary btn text-white m-1'>Sub</button>
                <button onClick={addCard} className='btn-primary btn text-white m-1'>Add Card</button>
                <Link to='/aboutus' className='m-1 links'>About Us</Link>
            </div>
        </div>
    </>
  )
}

export default Home