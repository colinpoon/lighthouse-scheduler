import React from 'react'

function DayListItem(props) {
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}

export default DayListItem

/* <DayListItem
names={day.name}
spots={day.spots}
full={day.spots === 0}
selected={day.name === props.day}
setDay={props.setDate}
/> */

// The <li> represents the entire day item
// The <h2> should display the day name
// The <h3> should display the spots remaining for a day


// function DayListItem(props) {
//   const {day, avail} = props

//   return (
//     <li>
//       <h2 className="text--regular">Day Name</h2>
//       <h3 className="text--light">X spots remaining</h3>
//     </li>
//   );
// }