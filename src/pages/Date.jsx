import React, { useState } from 'react'

const DatePage = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [duration, setDuration] = useState("");

  const [toDate, setToDate] = useState(new Date());

  function calculateDate(a, b) {
    b.setTime(b.getTime() + a * 60 * 60 * 1000);
    return b;
  }

  const durationHandler = (e) => {
    setDuration(e.target.value);
    const cal = calculateDate(duration, fromDate);
    console.log(cal);
  }

  return (
    <div>
        <label htmlFor="birthdaytime">Date From:</label>
        <input onChange={(e)=>setFromDate(e.target.value)} type="datetime-local" id="birthdaytime" name="time" value={fromDate}></input>

        <label htmlFor="duration">Duration</label>
        <input onChange={durationHandler} type="number" name="duration" id="duration" value={duration}/>

        <label htmlFor="Totime">Date To:</label>
        <input type="datetime-local" id="Totime" name="time" value={toDate} ></input>
    </div>
  )
}

export default DatePage;