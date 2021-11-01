//APPOINTMENTS
const getAppointmentsForDay = (state, dayName) => {
  const foundDay = state.days.find((day) => day.name === dayName);
  //if no day found, return empty array
  if (!foundDay) {
    return [];
  }
  //return an array of the appointments for the day
  const result = foundDay.appointments.map((Id) => {
    return state.appointments[Id];
  });
  return result;
}


// INTERVIEW
const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer;

  return {
    ...interview,
    interviewer: state.interviewers[interviewerId],
  };
}



export {getAppointmentsForDay, getInterview};