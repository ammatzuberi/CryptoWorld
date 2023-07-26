import React, { useEffect, useState } from "react";
import Home from "./Home";
import News from "./News";
import Trending from "./Trending";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Index(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
            <News get={props.getAllPost} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={6}>
          <Home get={props.getAllPost} />
          <Item></Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Item>
            <Trending get={props.getAllPost} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
