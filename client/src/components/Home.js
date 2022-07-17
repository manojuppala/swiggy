import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardDeck: { margin: "2rem 0rem 2rem 5rem !important" },
});

function Home() {
  // const [items, setItems] = useState([]);
  // const getItems = async () => {
  //   try {
  //     //proxy
  //     const response = await fetch("/items");
  //     const jsonData = await response.json();
  //     setItems(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   getItems();
  // });
  const items = [
    {
      item_id: 1,
      item_name: "Bread Toast",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/sapna82ja2m7tvd278wn",
      item_caption: "Healthy foods, Salads",
      item_time: "36",
      item_count: "300",
      item_rating: "4.4",
      item_cost: "300",
    },
    {
      item_id: 2,
      item_name: "Vegetable Curry",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vkwvdvyrnc3upink6ji4",
      item_caption: "South Indian",
      item_time: "35",
      item_count: "200",
      item_rating: "3.8",
      item_cost: "200",
    },
    {
      item_id: 3,
      item_name: "Chicken Shawarma",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yfiwrlvsgpqall3gycaf",
      item_caption: "Arabian, Fast food",
      item_time: "45",
      item_count: "250",
      item_rating: "3.8",
      item_cost: "250",
    },
    {
      item_id: 4,
      item_name: "Cake",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rbydmdq5jxwrc3ezuzjd",
      item_caption: "Desserts, Bakery",
      item_time: "44",
      item_count: "500",
      item_rating: "4.1",
      item_cost: "500",
    },
    {
      item_id: 5,
      item_name: "Creame Shakes",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/znuumrwd9kvxbkhbeylz",
      item_caption: "Beverages",
      item_time: "35",
      item_count: "200",
      item_rating: "4",
      item_cost: "200",
    },
    {
      item_id: 6,
      item_name: "Chicken Curry",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/l7ov5igdkklj1xtwz1py",
      item_caption: "North Indian",
      item_time: "40",
      item_count: "250",
      item_rating: "3.5",
      item_cost: "250",
    },
    {
      item_id: 7,
      item_name: "Creame Castle",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ymizpwegp6jgqnfapdkj",
      item_caption: "Beverages",
      item_time: "33",
      item_count: "200",
      item_rating: "3.9",
      item_cost: "200",
    },
    {
      item_id: 8,
      item_name: "Chicken Biryani",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oda962oysmdtbrv78lnk",
      item_caption: "Biryani, South Indian",
      item_time: "41",
      item_count: "400",
      item_rating: "2.5",
      item_cost: "400",
    },
    {
      item_id: 9,
      item_name: "The Red Box",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wjdpzw6eblbsoscf6awp",
      item_caption: "Chinese",
      item_time: "43",
      item_count: "450",
      item_rating: "3.7",
      item_cost: "450",
    },
    {
      item_id: 10,
      item_name: "Vegetable Pizza",
      item_img:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/it5vi0tgtnvgnq9ifhdw",
      item_caption: "Pizzas, Italian",
      item_time: "41",
      item_count: "350",
      item_rating: "3.4",
      item_cost: "350",
    },
  ];
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
