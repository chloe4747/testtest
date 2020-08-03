import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function SpagePage() {
    const [imgSrc, setImgSrc] = useState(null)
    const [year, setYear] = useState('2020')
    const inputMonthRef = useRef(null)
    const inputDayRef = useRef(null)
    useEffect(() => {
        axios.get('/today_space_img').then((response) => {
            const imgSrc = response.data.url
            setImgSrc(imgSrc)
        })
    }, [])

    const onBtnSearchClick = () => {
        const month = inputMonthRef.current.value
        const day = inputDayRef.current.value
        axios.get(`/today_space_img?year=${year}&month=${month}&day=${day}`).then((response) => {
            const imgSrc = response.data.url
            setImgSrc(imgSrc)
        })
    }

    return (
        <div>
            <h1>오늘의 천문학 사진</h1>
            <input value={year} onChange={(e) => { setYear(e.target.value) }} placeholder="year"/>
            <input ref={inputMonthRef} placeholder="month"/>
            <input ref={inputDayRef} placeholder="day"/>
            <button onClick={onBtnSearchClick}>seacrh</button>
            {
                imgSrc
                ? <img src={imgSrc}/>
                : <div>Loading...</div>
            }
        </div>
    )
}

export default SpagePage