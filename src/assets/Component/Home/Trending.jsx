import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
export default function Trending(props) {
  const data = props.get;
  let tempData = [...data];
  const sorting = tempData.sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );

  return (
    <>
      <h2> Trending</h2>
      {sorting.map((dataItem) => {
        return (
          <Card
            sx={{
              maxWidth: 280,
              margin: "0 auto",
              padding: "0.em",
            }}
            key={dataItem._id}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={dataItem.name}
              subheader={dataItem.createdAt}
            />
            <Link to={`/${dataItem._id}`}>
              <CardMedia
                sx={{ objectFit: "fit" }}
                component="img"
                height="200"
                width="550"
                image={dataItem.image}
                alt="Paella dish"
              />
            </Link>
            ;
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {dataItem.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
