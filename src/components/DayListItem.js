import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const formatSpots = (spots) => {
    let output = "";
    if (spots === 0) {
      output += "no spots remaining";
    } else if (spots === 1) {
      output += "1 spot remaining";
    } else {
      output += `${spots} spots remaining`
    }
    return output;
  }
  const spots = formatSpots(props.spots)

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": props.spots === 0
  });
  return (
    <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name) }>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spots}</h3>
    </li>
  );
}


// import React from 'react'
// import "components/DayListItem.scss";
// import classNames from "classnames";


// function DayListItem(props) {

//   // function formatSpots (spots) {
//   //   return (
//   //     if(spots === 0){
//   //       return "no spots remaining";
//   //     }
//   //     if(spots === 1){
//   //       return " 1 spot remaining";
//   //     }
//   //     if(spots >= 2) {
//   //       return `${spots} spots remaining`;
//   //     }
//   //   );
//   // }

//   const dayClass = classNames("day-list__item", {
//     "day-list__item--selected": props.selected === true,
//     "day-list__item--full": props.spots === 0
//   })

  
//   return (
//     <li
//       className={dayClass}
//       onClick= {() => props.setDay(props.name)}
//       selected={props.selected}
//       full={props.spots}
//     >
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light">
//         {/* {formatSpots(props.spots)} <---- function */}
//         {props.spots === 0 ? "no spots remaining" : props.spots === 1 ? "1 spot remaining" : `${props.spots} spots remaining`}
//       </h3>
//     </li>
//   );
// }
// export default DayListItem;