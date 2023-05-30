import React, { useEffect, useState } from 'react'
import { kelvinToCelcius, kelvinToFahrenheit } from '../utils/temp'
import './styles/buton.css'

const weatherImages = {
    '01d': '/images/weather/dia1.png',
    '02d': '/images/weather/dia2.png',
    '03d': '/images/weather/dia3.png',
    '04d': '/images/weather/dia4.png',
    '09d': '/images/weather/dia5.png',
    '10d': '/images/weather/dia6.png',
    '11d': '/images/weather/dia7.png',
    '13d': '/images/weather/dia8.png',
    '50d': '/images/weather/dia9.png',
    '01n': '/images/weather/noche1.png',
    '02n': '/images/weather/noche2.png',
    '03n': '/images/weather/noche3.png',
    '04n': '/images/weather/noche4.png',
    '09n': '/images/weather/noche5.png',
    '10n': '/images/weather/noche6.png',
    '11n': '/images/weather/noche7.png',
    '13n': '/images/weather/noche8.png',
    '50n': '/images/weather/noche9.png',
}

const Weather = ({ weatherInfo, handleSubmmit }) => {
    const [isCelcius, setIsCelcius] = useState(true)
    const [isDark, setIsDark] = useState(false)

    const handleChangeIsTemp = () => {
        setIsCelcius(!isCelcius)
    }

    const handleDarkMode = () => { 
        setIsDark(!isDark)
    }
    
    useEffect(() => {
        
        if (isDark) { 
            document.body.classList.add('dark')
        }else {
            document.body.classList.remove('dark')
        } 


    }, [isDark])

    return (
        <>
        <header className=' header--uno flex flex-wrap justify-around min-[400px]:p-5 sm:pr-10 sm:self-stretch sm:justify-around sm:items-center gap-y-4'>
            <div>
                <h1 className='font-clima text-xl font-semibold pb-6 sm:p-0 min-[400px]:text-2xl sm:text-lg'>Weather App</h1>
            </div>
            <div className='sm:order-3'>
            <label class="switch">
                <input onClick={handleDarkMode} type="checkbox"/>
                <span class="slider"></span>
            </label>
            </div>
                        
                        
                        

            <div className='flex justify-center'>
                <form onSubmit={handleSubmmit}>
                    <button className='w-10 h-[35px] rounded-l-lg shadow-inner shadow-[#d5f3fff6] bg-[#52B5E8] dark:bg-[#201F3C] dark:shadow-[#18172d] sm:w-10 min-[400px]:h-11'><i className='bx bx-search text-base'></i>
                    </button>
                    <input id='city' placeholder='Busca una ciudad' className=' w-60 sm:w h-[35px] rounded-r-lg shadow-inner shadow-[#D5F3FF] bg-[#52B5E8] dark:bg-[#201F3C] dark:shadow-[#18172d] p-2 outline-none min-[400px]:w-72 min-[400px]:h-11 sm:w-96 sm:mr-2'  type="text" />
                    </form>
            </div>
        </header>
    

        <section className='grid justify-center'>
            <article className='card dark:bg-gradient-to-r from-[#5836B3] from-10% via-[#5936B4] via-30% to-[#362A84] to-90% w-[300px] h-min-[300px] rounded-xl overflow-hidden shadow-lg shadow-[#5a96b5] dark:shadow-[#241f42eb] min-[400px]:w-[350px] sm:w-[500px] sm:h-[330px]'>
                <div className='flex justify-around items-center p-2 sm:pt-8'>
                    <span className='text-5xl text-[#026EED] dark:text-[#ffffff] font-clima min-[400px]:text-6xl sm:text-7xl'>{isCelcius ? kelvinToCelcius(weatherInfo?.main.temp) : kelvinToFahrenheit(weatherInfo.main.temp)}
                    </span>
                    <img className='min-[400px]:h-[6rem] sm:h-[7.5rem]' src={weatherImages[weatherInfo?.weather[0].icon]} alt="" />
                </div>
                <div className='flex flex-col pl-2 mb-3 font-clima sm:pl-4'>
                    <span className='text-[#56A5F1] text-left dark:text-[#9977fa] min-[400px]:text-xl'>viento: {weatherInfo?.wind.speed}
                    </span>
                    <span className='text-[#56A5F1] text-left dark:text-[#9977fa] text-base min-[400px]:text-xl'>nubes: {weatherInfo?.main.humidity}
                    </span>
                    <span className='text-[#56A5F1] text-left dark:text-[#9977fa] min-[400px]:text-xl'>precion: {weatherInfo?.main.pressure}hPa
                    </span>
                </div>
                <div className='flex justify-between items-center py-3 px-3'>
                    <h2 className=' text-[#026EED]  dark:text-[#ffffff] text-lg font-medium min-[400px]:text-2xl sm:text-3xl'>{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>
                    <h3 className='text-[#026EED]  dark:text-[#ffffff] font-normal min-[400px]:text-xl sm:text-2xl'>{weatherInfo?.weather[0].description}</h3>
                    </div>
            </article>
        </section>
        <section>
        <button onClick={handleChangeIsTemp} className='button bg-[#38a1d8] dark:bg-[#7d69f1] px-10 py-2 rounded-xl shadow-lg shadow-[#5a96b5] dark:shadow-[#241f42eb] font-clima font-semibold min-[400px]:text-xl sm:text-2xl'>Cambiar a F° / C°</button>
        </section>
            
        </>

    )
}

export default Weather