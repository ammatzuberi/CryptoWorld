import { useParams } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Trending from "../Home/Trending";
import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import { ForkLeft } from "@mui/icons-material";

export default function Post(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const params = useParams();
  // console.log(params);
  console.log(props.onShow);

  var a = props.onShow.filter((data) => {
    return params.id === data._id;
  });
  console.log(a);
  return (
    <>
      <Grid container spacing={3} justifyContent="flex-end">
        <Grid item xs={12} sm={6} md={4} lg={8}>
          {a.map((dataItem) => {
            return (
              <Card sx={{ maxWidth: 800, minWidth: 500 }} key={dataItem._id}>
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
                <CardMedia
                  sx={{ objectFit: "cover" }}
                  component="img"
                  height="550"
                  width="50vh"
                  image={dataItem.image}
                  alt="Paella dish"
                />
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
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          // sx={{ flex: 6, position: "absolute", right: 0, marginRight: "2rem" }}
        >
          <Item>
            <Trending get={props.onShow} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
