import React from 'react'
import "components/DayListItem.scss";
import classNames from "classnames";

function DayListItem(props) {
  // day-list__item all the time
  const dayClass = classNames("day", "list", {
    // day-list__item--selected class name if props.selected is true
    "selected": props.selected === true,
    // day-list__item--full class name if props.spots is 0.
    "full": props.spots === 0
  })
  return (
    // <li onClick={() => props.setDay(props.name)}>
    //   <h2 className="text--regular">{props.name}</h2>
    //   <h3 className="text--light">{props.spots} spots remaining</h3>
    // </li>
    <li 
    className={dayClass}
    selected={props.selected}
    full={props.spots}
    >
      {props.children}
    </li>
  );
}

export default DayListItem

// The <li> represents the entire day item
// The <h2> should display the day name
// The <h3> should display the spots remaining for a day
