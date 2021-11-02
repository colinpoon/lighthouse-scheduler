import React from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";
import Form from "./Form.js";
import useVisualMode from "hooks/useVisualMode";


function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

      {mode === CREATE && 
      <Form 
      interviewers={props.interviewers}
      onCancel={back}
      />}



    </article>
  )
}

export default Appointment

// return (
//   <article className="appointment">
//     <Header
//       time={props.time}
//     />
//     {props.interview && <Show student={props.interview.student} interview={props.interview.interview} />}
//     {!props.interview && <Empty />}
//   </article>
// )
