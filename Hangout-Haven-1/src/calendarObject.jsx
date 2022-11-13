import calendarObject from "calendar-object";
import React from 'react';
const calendarOBJ = calendarObject.getCalendar([2022],[2023],[2024],[2025],[2026],[2027],[2028],[2029],[2030],[2031],[2032],[2033],[2034],[2035],[2036],[2037],[2038],[2039],[2040],[2041],[2042],[2043],[2044],[2045],[2046],[2047],);

//tests
calendarOBJ['2022']['11']['13'] = {tasks: ['7:30-8:30']};
calendarOBJ['2022']['11']['11'] = {tasks: ['7:30-8:30']};
calendarOBJ['2022']['11']['21'] = {tasks: ['7:30-8:30']};
calendarOBJ['2022']['11']['04'] = {tasks: ['7:30-8:30']};
calendarOBJ['2022']['11']['10'] = {tasks: ['7:30-8:30']};
calendarOBJ['2022']['11']['09'] = {tasks: ['7:30-8:30']};
calendarOBJ['2022']['11']['2'] = {tasks: ['7:30-8:30']};
calendarOBJ['2022']['11']['0'] = {tasks: ['7:30-8:30']};

export default function getDateEvents(date) {
  var year = new String(date.substring(0, 4));
  var month = new String(date.substring(5, 7));
  var day = new String(date.substring(8, 10));
  if (calendarOBJ[year][month][day] != null) {
    return calendarOBJ[year][month][day].tasks;
  }
  else{
    return ''
  }
}
