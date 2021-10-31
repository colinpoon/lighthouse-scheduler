import React, { useState, useEffect } from "react";
import axios from 'axios';

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
// import { getAppointmentsForDay } from "helpers/selectors";

function Application(props) {
  const setDay = day => setState({ ...state, day });
  //const setDays = days =>  setState({...state, days});

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ]).then((all) => {
      console.log("DAYS", all[0]);
      console.log("APPOINTMENTS", all[1]);
      console.log("INTERVIEWERS", all[2]);
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  const dailyAppointments = [];
  // const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointmentList = dailyAppointments.map(appointment => {
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
      />
    )
  });
////////////////////////////
// RENDER 
////////////////////////////
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            // value={state.day}
            day={state.day}
            onChange={setDay}
          // setDay={state.setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentList}
        {/* <Appointment key={last} time={5} /> */}
      </section>
    </main>
  );
}

export default Application;