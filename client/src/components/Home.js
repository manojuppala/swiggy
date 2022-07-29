import React, { useEffect, useState, useCallback } from "react";
import Card from "./Card";
import { Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles({
  cardDeck: { margin: "2rem 0rem 2rem 5rem !important" },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "15px", transform: "scale(0.8)" }}>
    •
  </Box>
);

function Home() {
  const [items, setItems] = useState([]);
  const [selectItem, setSelectItem] = useState({});
  const [open, setOpen] = React.useState(false);
  const [textInput, setTextInput] = useState(1);

  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };
  const getItems = async () => {
    try {
      //proxy
      const response = await fetch("/items");
      const jsonData = await response.json();
      setItems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getItems();
  });

  const handleClickOpen = useCallback(
    (item) => () => {
      setSelectItem(item);
      setOpen(true);
    },
    []
  );

  const handleClose = () => {
    setOpen(false);
  };

  const placeOrder = async (e) => {
    console.log("placing order...");
    try {
      const itemOrder = {
        item_id: selectItem.item_id,
        customer_id: 1,
        order_status: "Delivered",
        order_quantity: textInput,
      };
      console.log(JSON.stringify(itemOrder));
      axios.post(`/order`, itemOrder).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    } catch (e) {
      console.error(e);
    }
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.cardDeck}>
        <Grid container spacing={4}>
          {items.map((cardProps) => (
            <Grid item key={items.indexOf(cardProps)}>
              <Card {...cardProps} handleOnClick={handleClickOpen(cardProps)} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        maxWidth="xl"
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{selectItem.item_name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div style={{ display: "table-caption" }}>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="Food Item"
                src={selectItem.item_img}
              />
              {selectItem.item_caption}
              <Typography style={{ color: "black" }}>
                Price: ₹{selectItem.item_cost}
                {bull}
                {selectItem.item_time} MINS
              </Typography>
              <TextField
                id="outlined-basic"
                type="number"
                label="Quantity"
                variant="outlined"
                value={textInput}
                onChange={handleTextInputChange}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              placeOrder();
            }}
          >
            Place Order
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Home;
