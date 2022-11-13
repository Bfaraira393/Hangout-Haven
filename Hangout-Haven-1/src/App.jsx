import React,{ useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import getDateEvents from './calendarObject';
import './App.css';

export default function App() {
  const [date, set] = useState(new Date()); 
  var c = getDateEvents(date.toISOString());
  const stateFarm = {
    fontFamily: 'Franklin Gothic',
    color: '#ff0000',
    fontWeight: 'bold',
    fontStyle: 'italic'
  };
  return (
    <div className='app'>
      <h1 style={stateFarm} className='text-center'>Hangout Haven Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={set} value={date} />
      </div>
      <p className='text-center'>
      <span className='bold'>Selected Date:</span>{' '}
      {date.toDateString()}
      </p>
      <p>Events Planned:</p>
      <p>{c}</p>
    </div>
  )
}