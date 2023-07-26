import axios from "axios";
import React from "react";
import Form from "./Form";

export default function FormPost() {
  const postRequest = (postData) => {
    axios
      .post("http://localhost:5000/api/v1/products/uploads", { postData })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        "An error occurred", error;
      });
  };

  return (
    <>
      <Form onSubmit={postRequest} />
    </>
  );
}
