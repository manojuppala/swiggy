import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

export default function Order({ item_id }) {
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
        src={item.item_image}
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
        <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
          {item.item_name}
        </Box>
        <Box component="span" sx={{ color: "primary.main", fontSize: 22 }}>
          Cost - ₹{item.item_cost}
        </Box>
      </Box>
    </Box>
  );
}
