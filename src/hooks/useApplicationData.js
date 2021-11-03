import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {
  //state KEY
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  //setday KEY
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ]).then((all) => {
      console.log("DAYS", all[0]);
      console.log("APPOINTMENTS", all[1]);
      console.log("INTERVIEWERS", all[2]);
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  //bookInterview KEY
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, { interview })
      .then(() => {
        const days = spotCounter(state, appointments)
        setState({ ...state, days, appointments });
      })
  }
  //cancelInterview KEY
  function cancelInterview(id, interview){
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`, { interview })
      .then(() => {
        const days = spotCounter(state, appointments)
        setState({ ...state, days, appointments });
      })
  }

  const spotCounter = function (state, appointments) {

    const prevDays = [...state.days];
    //find the current day
    const day = prevDays.find(day => day.name === state.day);

    let spots = 0;

    for (const id of day.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }
    const newDay = {...day, spots};
    const updatedDays = prevDays.map(day => day.name === state.day ? newDay : day)

    return updatedDays;
  };


  return { state, setDay, bookInterview, cancelInterview };
}
