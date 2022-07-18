import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: { maxWidth: 275 },
  cardContent: { paddingBottom: "0px !important" },
  title: {
    color: "#282c3f",
    fontSize: "17px !important",
    fontWeight: 500,
    wordBreak: "break-word",
    marginBottom: "0px !important",
  },
  caption: { color: "#686b78 !important", fontSize: "13px !important" },
  metaData: {
    color: "#535665 !important",
    fontSize: "12px !important",
    marginTop: "1rem !important",
    marginBottom: "0.5rem !important",
  },
  badgeRoot: { marginLeft: "1.25rem !important", marginRight: "1.5rem !important" },
  badge: { borderRadius: "5px !important" },
});

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "15px", transform: "scale(0.8)" }}>
    •
  </Box>
);

function CommonCard({
  item_name,
  item_img,
  item_caption,
  item_rating,
  item_cost,
  item_count,
  item_time,
  handleOnClick,
}) {
  const classes = useStyles();

  const showRating = (rating) => {
    const badgeContent =
      String.fromCharCode(0x2605) + String((Math.round(rating * 100) / 100).toFixed(1));
    const color = rating >= 4 ? "success" : rating < 2 ? "error" : "warning";

    return (
      <Badge
        badgeContent={badgeContent}
        color={color}
        classes={{ root: classes.badgeRoot, badge: classes.badge }}
      />
    );
  };

  return (
    <Card className={classes.root}>
      <CardMedia component="img" height="140" image={item_img} alt="pizza" />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} gutterBottom>
          {item_name}
        </Typography>
        <Typography className={classes.caption}>{item_caption}</Typography>
        <Typography variant="h5" className={classes.metaData} component="div">
          {showRating(item_rating ?? 0)}
          {bull}
          {item_time} MINS
          {bull}₹{item_cost} FOR ONE
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOnClick}>
          <ShoppingCartIcon fontSize="small" />
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default CommonCard;
