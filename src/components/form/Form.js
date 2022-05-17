import React from "react";
import { Button } from "../button/Button";

export const Form = (props) => {
  return (
    <div>
      <h2>Counter Form</h2>
      <Button {...props} />
    </div>
  );
};
