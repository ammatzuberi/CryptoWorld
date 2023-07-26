import { Label } from "@mui/icons-material";
import React from "react";

export default function DropDown(props) {
  return (
    <>
      <label htmlFor="">{props.label}</label>
      <select name="" id="" onChange={props.onChange}>
        {props.select}
        <option value={props.value}>{props.option}</option>
      </select>
    </>
  );
}
