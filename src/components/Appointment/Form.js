import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList'
import Button from 'components/Button'

function Form(props) {
  
  // const { interviewers, onCancel, onSave } = props;

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  function reset(){
    setStudent("");
    setInterviewer(null);
  }
  function cancel(){
    reset();
    props.onCancel();
  }
  
  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
  
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} 
        autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
          { error && <section className="appointment__validation">{error}</section>}
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          {/* <Button confirm onClick={() => props.onSave(student, interviewer)}>Save</Button> */}
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  )
}
export default Form
