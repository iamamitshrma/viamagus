import React from 'react'

const Date = () => {
  return (
    <div>
        <label for="time">Date From:</label>
        <input type="datetime-local" id="birthdaytime" name="time"></input>

        <label htmlFor="duration">Duration</label>
        <input type="text" name="duration" id="duration" />


        <label for="time">Date To:</label>
        <input type="datetime-local" id="birthdaytime" name="time"></input>
    </div>
  )
}

export default Date;