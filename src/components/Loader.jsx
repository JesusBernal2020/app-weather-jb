import React from 'react'
import './styles/Loader.css'

const Loader = () => {
    return (
        <>
            <div class="container">
            <div class="cloud front">
                <span class="left-front"></span>
                <span class="right-front"></span>
            </div>
                <span class="sun sunshine"></span>
                <span class="sun"></span>
            <div class="cloud back">
                <span class="left-back"></span>
                <span class="right-back"></span>
            </div>
            </div>
            <div>
                <span className='font-clima font-semibold text-3xl'>Weather App</span>
            </div>
            </>
    )
}

export default Loader