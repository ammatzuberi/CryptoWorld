import React, { useEffect, useState } from "react";
import classes from "./Form.module.css";
import Input from "./Input";
import { Email } from "@mui/icons-material";
import { Image } from "cloudinary-react";
import { storage } from "../../../Firebase/Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";

export default function Form(props) {
  const [image, setImage] = useState(null);

  const [postData, setPostData] = useState({
    email: "",
    name: "",
    description: "",
    catagory: "",
    subCategory: "",
  });

  const handlePostData = (e) => {
    const { name, value } = e.target;
    setPostData((postData) => ({ ...postData, [name]: value }));
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", postData.name);
    formData.append("description", postData.description);
    formData.append("catagory", postData.catagory);
    formData.append("email", postData.email);
    formData.append("subCategory", postData.subCategory);
    console.log(formData);
    console.log(postData);

    const url = "http://localhost:5000/api/v1/products/uploads";

    axios
      .post(url, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        "An error occurred", error;
        console.log(error);
      });
  };
  return (
    <>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1>Post Form </h1>
          <Input
            label="Name"
            type="text"
            required
            onChange={handlePostData}
            name="name"
            value={postData.name}
          />
          <Input
            label="Email"
            type="email"
            required
            onChange={handlePostData}
            name="email"
            value={postData.email}
          />
          {/* <Input
            label="Date"
            type="date"
            onChange={handlePostData}
            name="Date"
            value={postData.Date}
          /> */}

          <label htmlFor="Category"> Service Category</label>
          <select name="catagory" id="" onChange={handlePostData}>
            <option value="">-Please Select-</option>
            <option value="Press Release">Press Release</option>
            <option value="Reviews">Reviews</option>
            <option value="Interviews">Interviews</option>
            <option value="Editorial">Editorial</option>
            <option value="Sponsored Post">Sponsored Post</option>

            <option value="NTFs">NTFs</option>
          </select>
          <label htmlFor="Category"> Sub Category</label>
          <select name="subCategory" id="" onChange={handlePostData}>
            <option value="">-Please Select-</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Crypto Currency">Crypto Currency</option>
            <option value="DeFi">DeFi</option>
            <option value="Metaverse">Metaverse</option>
            <option value="NFT">NFT</option>
          </select>

          <Input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            name="image"
            accept="image/*"
            // value={image}
          />
          <textarea
            name="description"
            id=""
            cols="10"
            rows="5"
            onChange={handlePostData}
            value={postData.description}
          ></textarea>
          <button type="submit" className={classes.button}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}
