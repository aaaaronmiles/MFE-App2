import React from "react";
import { Button } from "@org/componentUtil";

export default function Root(props) {
  return (
    <div>
      <section>{props.name} is mounted!</section>
      <Button id="button1" buttonText="My Button from App 2" isHidden={true} />
    </div>
  );
}
