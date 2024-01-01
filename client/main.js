const lcdscreenButton = document.getElementById("lcdscreenButton");
const oledscreenButton = document.getElementById("oledscreenButton");
const bigmemoryButton = document.getElementById("bigmemoryButton");
const lowmemoryButton = document.getElementById("lowmemoryButton");
const largescreenButton = document.getElementById("largescreenButton");
const smallscreenButton = document.getElementById("smallscreenButton");
const longbatteryButton = document.getElementById("longbatteryButton");
const shortbatteryButton = document.getElementById("shortbatteryButton");
const addItemInput = document.getElementById("addItemInput");
const deleteItemInput = document.getElementById("deleteItemInput");

const getLcdscreen = () => {
  axios
    .get("http://localhost:8080/api/lcdscreen/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("Error fetching data from /api/lcdscreen:", error);
      alert("Error fetching data from /api/lcdscreen");
    });
};

const getOledscreen = () => {
  axios
    .get("http://localhost:8080/api/oledscreen/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("Error fetching data from /api/oledscreen:", error);
      alert("Error fetching data from /api/oledscreen");
    });
};

const getLowmemory = () => {
  axios
    .get("http://localhost:8080/api/lowmemory/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("Error fetching data from /api/lowmemory:", error);
      alert("Error fetching data from /api/lowmemory");
    });
};

const getBigmemory = () => {
  axios
    .get("http://localhost:8080/api/bigmemory/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("Error fetching data from /api/bigmemory:", error);
      alert("Error fetching data from /api/bigmemory");
    });
};

const getLargescreen = () => {
  axios
    .get("http://localhost:8080/api/largescreen/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("Error fetching data from /api/largescreen:", error);
      alert("Error fetching data from /api/largescreen");
    });
};
const getSmallscreen = () => {
  axios
    .get("http://localhost:8080/api/smallscreen/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("Error fetching data from /api/smallscreen:", error);
      alert("Error fetching data from /api/smallscreen");
    });
};
const getLongbattery = () => {
  axios
    .get("http://localhost:8080/api/longbattery/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("Error fetching data from /api/longbattery:", error);
      alert("Error fetching data from /api/longbattery");
    });
};
const getShortbattery = () => {
  axios
    .get("http://localhost:8080/api/shortbattery/")
    .then((res) => {
      const data = res.data;
      alert(data);
    })
    .catch((error) => {
      console.error("Error fetching data from /api/shortbattery:", error);
      alert("Error fetching data from /api/shortbattery");
    });
};

const addItem = () => {
  const item = addItemInput.value;
  const endpoint = document.getElementById("arraySelect").value;
  axios
    .post(`http://localhost:8080/api/${endpoint}/`, { item })
    .then((res) => {
      console.log("Success:", res.data);
    })
    .catch((error) => {
      console.error(`Error adding item to /api/${endpoint}:`, error);
    });
};

const deleteItem = () => {
  const item = deleteItemInput.value;
  const endpoint = document.getElementById("arraySelect").value;
  axios
    .delete(`http://localhost:8080/api/${endpoint}/${item}`)
    .then((res) => {
      console.log("Success:", res.data);
    })
    .catch((error) => {
      console.error(`Error deleting item from /api/${endpoint}:`, error);
    });
};

lcdscreenButton.addEventListener("click", getLcdscreen);
oledscreenButton.addEventListener("click", getOledscreen);
bigmemoryButton.addEventListener("click", getBigmemory);
lowmemoryButton.addEventListener("click", getLowmemory);
largescreenButton.addEventListener("click", getLargescreen);
smallscreenButton.addEventListener("click", getSmallscreen);
longbatteryButton.addEventListener("click", getLongbattery);
shortbatteryButton.addEventListener("click", getShortbattery);
addItemButton.addEventListener("click", addItem);
deleteItemButton.addEventListener("click", deleteItem);
