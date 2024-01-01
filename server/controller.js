let Lcdscreen = [
  "Steam Deck!, AYA Neo Geek!, AYA Neo 2S!, Asus Rog Ally!, AOKZOE A1Pro!, AOKZOE1!, AYA Neo Air Plus!, AYA Neo 2!, AYA Neo Air Lite!, AYA Neo Slide!, ONEXPLAYER 2 Pro!, ONEXPLAYER Mini Pro!, Lenovo Legion Go!, GPD WIN 4!",
];

let Oledscreen = ["Steam Deck!"];

let Bigmemory = [
  "Steam Deck OLED!, AYA Neo Air Plus!, AYA Neo pro!, AYA Neo Geek!, AYA Meo Kun!, AYA Neo Next! ",
];

let Lowmemory = [
  "Steam Deck!, AYA Neo Air Plus!, AYN Loki!, AYN Loki Max!, AYN Loki Zero!, Lenovo Legion Go!",
];

let Largescreen = [
  "Steam Deck!, AOZKOE A1 Pro!, AYA Neo KUN!, AYA Neo Next II!, GPD WIN Max 2!, Lenovo Legion Go!, ONEXPLAYER!,ONEXPLAYER 2!, ONEXPLAYER 2 Pro!",
];

let Smallscreen = [
  "Steam Deck!, Anberic Win600!, AOKZOE A2!, Asus Rog Ally!, AYA Neo 2!, AYA Neo 2S!, AYA Neo Air!, AYA Neo 2S mini LED!, AYA Neo Air 1S!, AYA Neo Air Lite!, AYA Neo Air Plus!, AYA Neo Air Pro, AYA Neo Flip!, AYA Neo Slide!",
];

let Longbattery = [
  "AYA Neo KUN!, Steam Deck OLED!, ONEXPLAYER 2 Pro!, ONEPLAYER 2!, GPD Win Max 2!",
];

let Shortbattery = [
  "Steam Deck!, Anbernic Win600!, AOKZOE A2!, ASUS ROG Ally!, AYA Neo Air!, AYA Neo Air 1S!, AYA Neo Air Lite!",
];

module.exports = {
  getLcdscreen: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Lcdscreen.length);
    let randomLcdscreen = Lcdscreen[randomIndex];
    res.status(200).send(randomLcdscreen);
  },

  getOledscreen: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Oledscreen.length);
    let randomOledscreen = Oledscreen[randomIndex];
    res.status(200).send(randomOledscreen);
  },

  getBigmemory: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Bigmemory.length);
    let randomBigmemory = Bigmemory[randomIndex];
    res.status(200).send(randomBigmemory);
  },

  getLowmemory: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Lowmemory.length);
    let randomLowmemory = Lowmemory[randomIndex];
    res.status(200).send(randomLowmemory);
  },

  getLargescreen: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Largescreen.length);
    let randomLargescreen = Largescreen[randomIndex];
    res.status(200).send(randomLargescreen);
  },

  getSmallscreen: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Smallscreen.length);
    let randomSmallscreen = Smallscreen[randomIndex];
    res.status(200).send(randomSmallscreen);
  },

  getLongbattery: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Longbattery.length);
    let randomLongbattery = Longbattery[randomIndex];
    res.status(200).send(randomLongbattery);
  },

  getShortbattery: (req, res) => {
    let randomIndex = Math.floor(Math.random() * Shortbattery.length);
    let randomShortbattery = Shortbattery[randomIndex];
    res.status(200).send(randomShortbattery);
  },

  addItemToLcdscreen: (req, res) => {
    Lcdscreen.push(req.body.item);
    res.status(200).send(Lcdscreen);
  },

  addItemToOledscreen: (req, res) => {
    Oledscreen.push(req.body.item);
    res.status(200).send(Oledscreen);
  },

  addItemToBigmemory: (req, res) => {
    Bigmemory.push(req.body.item);
    res.status(200).send(Bigmemory);
  },

  addItemToLowmemory: (req, res) => {
    Lowmemory.push(req.body.item);
    res.status(200).send(Lowmemory);
  },

  addItemToLargescreen: (req, res) => {
    Largescreen.push(req.body.item);
    res.status(200).send(Largescreen);
  },

  addItemToSmallscreen: (req, res) => {
    Smallscreen.push(req.body.item);
    res.status(200).send(Smallscreen);
  },

  addItemToLongbattery: (req, res) => {
    Longbattery.push(req.body.item);
    res.status(200).send(Longbattery);
  },

  addItemToShortbattery: (req, res) => {
    Shortbattery.push(req.body.item);
    res.status(200).send(Shortbattery);
  },

  deleteItemFromLcdscreen: (req, res) => {
    const { item } = req.params;
    Lcdscreen = Lcdscreen.filter((i) => i !== item);
    res.status(200).send(Lcdscreen);
  },

  deleteItemFromOledscreen: (req, res) => {
    const { item } = req.params;
    Oledscreen = Oledscreen.filter((i) => i !== item);
    res.status(200).send(Oledscreen);
  },

  deleteItemFromBigmemory: (req, res) => {
    const { item } = req.params;
    Bigmemory = Bigmemory.filter((i) => i !== item);
    res.status(200).send(Bigmemory);
  },

  deleteItemFromLowmemory: (req, res) => {
    const { item } = req.params;
    Lowmemory = Lowmemory.filter((i) => i !== item);
    res.status(200).send(Lowmemory);
  },

  deleteItemFromLargescreen: (req, res) => {
    const { item } = req.params;
    Largescreen = Largescreen.filter((i) => i !== item);
    res.status(200).send(Largescreen);
  },

  deleteItemFromSmallscreen: (req, res) => {
    const { item } = req.params;
    Smallscreen = Smallscreen.filter((i) => i !== item);
    res.status(200).send(Smallscreen);
  },

  deleteItemFromLongbattery: (req, res) => {
    const { item } = req.params;
    Longbattery = Longbattery.filter((i) => i !== item);
    res.status(200).send(Longbattery);
  },

  deleteItemFromShortbattery: (req, res) => {
    const { item } = req.params;
    Shortbattery = Shortbattery.filter((i) => i !== item);
    res.status(200).send(Shortbattery);
  },
};
