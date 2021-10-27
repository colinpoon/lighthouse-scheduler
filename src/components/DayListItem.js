import React from 'react'
import "components/DayListItem.scss";
import classNames from "classnames";

function DayListItem(props) {
  // function spotsFormatter(spots){
  //   return (
  //     {spots === 0 ? "zero" : spots === 1 ? "one" : `${spots} this `}
  //   );
  // }

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": props.spots === 0
  })
  return (
    <li
      className={dayClass}
      // onClick= {props.setDay(props.name)}
      selected={props.selected}
      full={props.spots}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">
        {/* {spotsFormatter(props.spots)} */}
        {props.spots === 0 ? "no spots remaining" : props.spots === 1 ? "1 spot remaining" : `${props.spots} spots remaining`}
      </h3>
    </li>
  );
}

export default DayListItem

