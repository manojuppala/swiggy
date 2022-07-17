import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardDeck: { margin: "2rem 0rem 2rem 5rem !important" },
});

function Home() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/items");
      const jsonData = await response.json();
      setItems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getItems();
  });

  const classes = useStyles();
  console.log(items);
  return (
    <>
      <Navbar />
      <div className={classes.cardDeck}>
        <Grid container spacing={4}>
          {items.map((cardProps) => (
            <Grid item key={items.indexOf(cardProps)}>
              <Card {...cardProps} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Home;