const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("client"));

const lcdscreen = [];

const {
  getLcdscreen,
  getOledscreen,
  getBigmemory,
  getLowmemory,
  getLargescreen,
  getLongbattery,
  getShortbattery,
  getSmallscreen,
  addItemToLcdscreen,
  deleteItemFromLcdscreen,
  addItemToOledscreen,
  deleteItemFromOledscreen,
  addItemToBigmemory,
  deleteItemFromBigmemory,
  addItemToLowmemory,
  deleteItemFromLowmemory,
  addItemToLargescreen,
  deleteItemFromLargescreen,
  addItemToLongbattery,
  deleteItemFromLongbattery,
  addItemToShortbattery,
  deleteItemFromShortbattery,
  addItemToSmallscreen,
  deleteItemFromSmallscreen,
} = require("./controller");

app.get("/api/lcdscreen", getLcdscreen);

app.get("/api/oledscreen", getOledscreen);

app.get("/api/bigmemory", getBigmemory);

app.get("/api/lowmemory", getLowmemory);

app.get("/api/largescreen", getLargescreen);

app.get("/api/smallscreen", getSmallscreen);

app.get("/api/longbattery", getLongbattery);

app.get("/api/shortbattery", getShortbattery);

app.post("/api/lcdscreen", addItemToLcdscreen);

app.delete("/api/lcdscreen/:item", deleteItemFromLcdscreen);

app.post("/api/oledscreen", addItemToOledscreen);

app.delete("/api/oledscreen/:item", deleteItemFromOledscreen);

app.post("/api/bigmemory", addItemToBigmemory);

app.delete("/api/bigmemory/:item", deleteItemFromBigmemory);

app.post("/api/lowmemory", addItemToLowmemory);

app.delete("/api/lowmemory/:item", deleteItemFromLowmemory);

app.post("/api/largescreen", addItemToLargescreen);

app.delete("/api/largescreen/:item", deleteItemFromLargescreen);

app.post("/api/longbattery", addItemToLongbattery);

app.delete("/api/longbattery/:item", deleteItemFromLongbattery);

app.post("/api/shortbattery", addItemToShortbattery);

app.delete("/api/shortbattery/:item", deleteItemFromShortbattery);

app.post("/api/smallscreen", addItemToSmallscreen);

app.delete("/api/smallscreen/:item", deleteItemFromSmallscreen);

app.listen(8080, () => console.log("Server running on 8080"));
