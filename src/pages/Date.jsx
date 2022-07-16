import moment from 'moment';
import React, { useEffect, useState } from 'react'
import './date.css';

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
    // const cal = calculateDate(Number(duration), new Date(fromDate));
    // setToDate(cal);
  }

  useEffect(() => {
    const cal = calculateDate(Number(duration), new Date(fromDate));
    setToDate(cal);
  }, [duration])
  return (
    <div className='date--container'>
      <div className="center">
        <label htmlFor="birthdaytime">Date From:</label>
        <input onChange={(e)=>setFromDate(e.target.value)} type="datetime-local" id="birthdaytime" name="time" value={fromDate}></input>

        <label htmlFor="duration">Duration(in hours)</label>
        <input onChange={durationHandler} type="number" name="duration" id="duration" value={duration} placeholder="Enter duration in hours"/>

        <label htmlFor="Totime">Date To:</label>
        <input type="datetime-local" id="Totime" name="time" value={moment(toDate).format('YYYY-MM-DDTHH:mm')}></input>
      </div>
    </div>
  )
}

export default DatePage;