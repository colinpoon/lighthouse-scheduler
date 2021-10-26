import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));
  storiesOf("DayListItem", module) //1
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  }) // 2
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />) // 3
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />) 
  .add("Full", () => <DayListItem name="Monday" spots={0} />) // add no spots remaining 
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} /> // 4
  ));


// 1 Initiates Storybook and registers our DayListItem component
// 2.Provides the default background color for our component
// 3. To define our stories, we call add() once for each of our test states to generate a story
// 4. action() allows us to create a callback that appears in the actions panel when clicked