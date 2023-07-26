import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./assets/Component/Root";
import Index from "./assets/Component/Home/Index";
import Form from "./assets/Component/Post/Form";
import Error from "./Error";
import Post from "./assets/Component/Post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [getAllPost, setGetAllPost] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/v1/products/")
      .then((response) => {
        // console.log(response);
        const { data } = response;
        setGetAllPost(data || []);
      })
      .catch((error) => {
        console.log("Error in the getting the data ", error);
      });
  };
  useEffect(() => {
    fetchData();
    // console.log(getAllPost);
  }, []);
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Index getAllPost={getAllPost} /> },
        { path: "/form", element: <Form /> },
        { path: "/:id", element: <Post onShow={getAllPost} /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
