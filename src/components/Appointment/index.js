import React from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";
import useVisualMode from "hooks/useVisualMode";


function Appointment(props) {
const { mode } = useVisualMode("Show");

  return (
    <article className="appointment">
    <Header 
      time={props.time}
    />
  {props.interview && <Show student={props.interview.student} interview={props.interview.interview} />}
  {!props.interview && <Empty />}
    </article>
  )
}

export default  Appointment
