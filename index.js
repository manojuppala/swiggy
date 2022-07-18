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
      "INSERT INTO customer(customer_name,customer_city) VALUES($1,$2) RETURNING *",
      [customer_name, customer_city]
    );
    res.json(newCustomer.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/add", async (req, res) => {
  try {
    req.body.forEach(async (item) => {
      const { item_name, item_img, item_caption, item_rating, item_cost, item_time, item_count } =
        item;
      console.log(item);
      const newItem = await pool.query(
        "INSERT INTO item(item_name, item_img, item_caption, item_rating, item_cost, item_time, item_count) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
        [item_name, item_img, item_caption, item_rating, item_cost, item_time, item_count]
      );
    });
    res.json("rows inserted");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM item");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/order", async (req, res) => {
  try {
    const { customer_id, order_status, order_quantity, item_id } = req.body;
    const newOrder = await pool.query(
      "INSERT INTO orders(customer_id,order_status,order_quantity,item_id) VALUES($1,$2,$3,$4) RETURNING *",
      [customer_id, order_status, order_quantity, item_id]
    );
    res.json(newOrder);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/orderhistory/:id", async (req, res) => {
  try {
    const customer_id = parseInt(req.params.id);
    const orderHistory = await pool.query("SELECT * FROM orders WHERE customer_id = $1", [
      customer_id,
    ]);
    console.log(orderHistory.rows);
    res.json(orderHistory.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/items/:id", async (req, res) => {
  try {
    const item_id = parseInt(req.params.id);
    const itemOrdered = await pool.query("SELECT * FROM item WHERE item_id = $1", [item_id]);
    res.json(itemOrdered.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log("server has started on port 5000");
});
