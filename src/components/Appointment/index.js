import React from 'react';
import "/src/components/Appointment/styles.scss";
import Header from "/src/components/Appointment/Header.js";
import Empty from "/src/components/Appointment/Empty.js";
import Show from "/src/components/Appointment/Show.js";


function Appointment(props) {



  return (
    <article className="appointment">
      {props.time}
    </article>

  )
}

export default  Appointment
