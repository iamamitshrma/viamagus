import moment from 'moment';
import React, { useEffect, useState } from 'react'
import './date.css';

const DatePage = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [duration, setDuration] = useState("");

  const [durationType, setDurationType] = useState("hours");

  const [toDate, setToDate] = useState(new Date());

  function calculateDate(a, b) {
    if(durationType === "hours") {
      b.setTime(b.getTime() + a * 60 * 60 * 1000);
    }
    if(durationType === "minutes") {
      b.setTime(b.getTime() + a * 60 * 1000);
    }
    if(durationType === "days") {
      b.setTime(b.getTime() + a * 60 * 60 * 24 * 1000);
    }
    return b;
  }

  const durationHandler = (e) => {
    setDuration(e.target.value);
    // const cal = calculateDate(Number(duration), new Date(fromDate));
    // setToDate(cal);
  }

  const durationTypeHandler = (e) => {
    setDurationType(e.target.value);
  }

  useEffect(() => {
    const cal = calculateDate(Number(duration), new Date(fromDate));
    setToDate(cal);
  }, [duration])
  return (
    <div className='date--container'>
      <div className="center">
        <label htmlFor="birthdaytime">Date From:</label>
        <input onChange={(e)=>setFromDate(e.target.value)} defaultValue={new Date()} type="datetime-local" id="birthdaytime" name="time" value={fromDate}></input>

        <label htmlFor="duration">Duration(in {durationType})</label>
        <div>
          <input style={{width: '50%'}} onChange={durationHandler} type="number" name="duration" id="duration" value={duration} placeholder={`Enter duration in ${durationType}`}/>
          <select onChange={durationTypeHandler} style={{height: '30px', width: '50%', outline: 'none'}} defaultValue="hours" name="durationType" id="durationType">
            <option value="hours">Hours</option>
            <option value="minutes">Minutes</option>
            <option value="days">Days</option>
          </select>
        </div>

        <label htmlFor="Totime">Date To:</label>
        <input type="datetime-local" id="Totime" name="time" value={moment(toDate).format('YYYY-MM-DDTHH:mm')}></input>
      </div>
    </div>
  )
}

export default DatePage;