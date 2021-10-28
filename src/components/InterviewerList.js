import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';

function InterviewerList(props) {
  const interviewers = props.interviewers;
  const interviewerList = interviewers.map((interviewer) => {
    return (
  <InterviewerListItem 
    key={interviewer.id}
    name={interviewer.name}
    avatar={interviewer.avatar}
    setInterviewer={interviewer.setInterviewer}
    selected={interviewer.name === props.interviewer}
  />
    );
  })

  

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerList}
      </ul>
    </section>
  )
}

export default InterviewerList
// ul className="interviewers__list"></ul

// function DayList(props) {
//   const days = props.days;
//   const dayItems = days.map((item) => {
//     return (
//     <DayListItem
//         key={item.id}
//         name={item.name}
//         spots={item.spots}
//         selected={item.name === props.day}
//         setDay={props.setDay}
//       />
//     )
//   });
//   return (
//     <ul>
//     {dayItems}
//     </ul>
//   )
// }

// export default DayList