import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
const moment = require("moment");

export default function Order({ order_id, order_date, order_quantity, item_id }) {
  const [item, setitem] = useState({});
  const getItem = async () => {
    try {
      //proxy
      const response = await fetch(`/items/${item_id}`);
      const jsonData = await response.json();
      setitem(jsonData[0]);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getItem();
  });
  moment(order_date).format("MMMM d, YYYY");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        bgcolor: "background.paper",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        fontWeight: "bold",
        maxWidth: "50rem !important",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Food Item"
        src={item.item_img}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 24, mt: 1 }}>
          {item.item_name}
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          {moment(order_date).format("MMMM d, YYYY")}
        </Box>
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          Quantity: {order_quantity}
        </Box>
        <Box component="span" sx={{ color: "primary.main", fontSize: 16 }}>
          Cost - ₹{item.item_cost}
        </Box>
      </Box>
    </Box>
  );
}
