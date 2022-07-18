import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import Order from "./Order";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardDeck: { margin: "2rem 0rem 2rem 5rem !important" },
});

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const getOrder = async () => {
    try {
      //proxy
      const response = await fetch("/orderhistory/1");
      const jsonData = await response.json();
      setOrders(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getOrder();
  });

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.cardDeck}>
        <Grid container spacing={4}>
          {orders.map((cardProps) => (
            <Grid item key={orders.indexOf(cardProps)}>
              <Order {...cardProps} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default OrderHistory;
