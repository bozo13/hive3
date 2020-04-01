import React from "react";
import { Grow } from "@material-ui/core";

export default function GrowOnScroll(props) {
  const { children, trigger, ...other } = props;
  return (
    <Grow appear={false} direction="down" in={!trigger} {...other}>
      {children}
    </Grow>
  );
}
