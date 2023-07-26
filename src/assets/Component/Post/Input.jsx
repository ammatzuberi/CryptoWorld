import React from "react";

export default function Input(props) {
  return (
    <>
      <label htmlFor="">{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        required={props.required}
        name={props.name}
        value={props.value}
        accept={props.accept}
      />
    </>
  );
}
