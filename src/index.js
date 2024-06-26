const express = require("express");
const moment = require("moment-timezone");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const timezones = [
  "Pacific/Kiritimati",
  "Pacific/Auckland",
  "Pacific/Guam",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Asia/Bangkok",
  "Asia/Jakarta", 
  'Asia/Kolkata',
  "Asia/Dubai",
  "Asia/Dhaka", 
  "Europe/Moscow", 
  "Europe/Helsinki", 
  "Europe/Paris", 
  "Europe/London",
  "Europe/Berlin",
  "Africa/Casablanca", 
  "Atlantic/Azores", 
  "America/Noronha", 
  "America/Argentina/Buenos_Aires", 
  "America/Caracas", 
  "America/New_York",
  "America/Chicago", 
  "America/Denver", 
  "America/Los_Angeles", 
  "Pacific/Honolulu", 
  "Pacific/Midway", 
  "Pacific/Tahiti", 
];

app.get("/", (req, res) => {
  try {
    const fivePMZones = timezones.filter((tz) => {
      const currentTime = moment.tz(tz);
      const hour = currentTime.hour();
      console.log(
        `Timezone: ${tz}, Current Time: ${currentTime.format()}, Hour: ${hour}`
      );
      return hour === 17;
    });

    res.render("index", { fivePMZones });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing time data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
