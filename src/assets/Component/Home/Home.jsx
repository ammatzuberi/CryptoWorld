import * as React from "react";
import { styled } from "@mui/material/styles";
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
import classes from "./Home.module.css";
import { Box, Pagination } from "@mui/material";
import { Link } from "react-router-dom";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function Home(props) {
  return (
    <div className={classes.container}>
      {props.get.map((dataItem) => {
        // console.log(dataItem._id);
        return (
          <Card sx={{ maxWidth: 1000, minWidth: 600 }} key={dataItem._id}>
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
            <Link to={`${dataItem._id}`}>
              <CardMedia
                className={classes["hover-image"]}
                component="img"
                height="300"
                width="550"
                image={dataItem.image}
                alt="Paella dish"
                sx={{ objectFit: "fit" }}
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

      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  );
}
