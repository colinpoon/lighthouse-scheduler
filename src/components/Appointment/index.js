import React from 'react';
import "./styles.scss";

import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";
import Form from "./Form.js";
import Status from "./Status.js";
import Confirm from "./Confirm.js";
import Error from "./Error.js";
import useVisualMode from "hooks/useVisualMode";

function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const EDIT = "EDIT";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRMING = "CONFIRMING";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
    //CHECK to see how to add an edge case for ---> if no interviewer is selected
  function save(name, interviewer) {
    // console.log(interviewer);
    // console.log(name);
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch((err) => transition(ERROR_SAVE, true)) 
  }

  function deleteInterview(event) {
    transition(DELETING, true)
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch((err) => transition(ERROR_DELETE, true))

  }

  
  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRMING)}
          onEdit={() => transition(EDIT)}
        />
      )}

      {mode === CREATE &&
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />}
      {mode === EDIT && 
        <Form 
        interviewers={props.interviewers}
        interviewer={props.interview.interviewer.id}
        student={props.student}
        onCancel={back}
        // onCancel={() => transition(SHOW)}
        onSave={save}
      />}

      {mode === SAVING && <Status message="Saving"/>}
      {mode === ERROR_SAVE && <Error message="Unable to save" onClose={back}/>}
      {mode === DELETING && <Status message="Deleting"/>}
      {mode === ERROR_DELETE && <Error message="Unable to delete" onClose={back}/>}
      {mode === CONFIRMING && <Confirm message="Would you like to delete this appointment?" onCancel={back} onConfirm={deleteInterview}/>}

    </article>
  )
}
export default Appointment