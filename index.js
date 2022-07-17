const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV) {
  app.use(express.static(path.join(__dirname, "client/build")));
}
// ROUTES //

app.post("/register", async (req, res) => {
  try {
    const { customer_name, customer_city } = req.body;
    const newCustomer = await pool.query(
      "INSERT INTO customer(customer_name,city) VALUES($1,$2) RETURNING *",
      [customer_name, customer_city]
    );
    res.json(newCustomer.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/add", async (req, res) => {
  try {
    const { item_name, item_img, item_caption, item_rating, item_cost, item_time, item_count } =
      req.body;
    const newItem = await pool.query(
      "INSERT INTO items(item_name, item_img, item_caption, item_rating, item_cost, item_time, item_count) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [item_name, item_img, item_caption, item_rating, item_cost, item_time, item_cost]
    );
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM items");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log("server has started on port 5000");
});
