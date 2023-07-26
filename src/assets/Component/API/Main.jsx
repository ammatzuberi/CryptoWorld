import React from "react";
import Post from "./Post";

export default function Main() {
  async function PostArticle(post) {
    const response = fetch(
      "https://foodapp-d0520-default-rtdb.firebaseio.com/Crypt.json",
      {
        method: "POST",
        body: JSON.stringify(),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = response.json(post);
    console.log(data);
  }
  return (
    <>
      <section>
        <Post onAddPost={PostArticle} />
      </section>
    </>
  );
}
