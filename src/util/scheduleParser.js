const axios = require("axios");
const parser = require("node-html-parser");
const _ = require("lodash");

module.exports = {
  getSched: async function() {
    const schedule = [];

    const res = await axios.get(
      "https://www6.whentowork.com/cgi-bin/w2wFF.dll/empshiftlist.htm?SID=181268317041A4&UTF8=Y&date=11/01/2019"
    );

    const root = parser.parse(res.data);

    const sftstart = root.querySelectorAll(".sftstart");
    const sftend = root.querySelectorAll(".sftend");
    const sftpos = root.querySelectorAll(".sftpos");

    // Ensure each list is equal length
    if (sftpos.length != sftstart.length || sftpos.length != sftend.length) {
      throw new Error("Incoming Shift Data Error");
    }

    const startTimes = [];
    const employees = [];

    for (let i = 0; i < sftpos.length; i++) {
      const name = sftpos[i].childNodes[0].rawText.trim();
      const start = sftstart[i].childNodes[0].rawText.trim();
      const end = sftend[i].childNodes[0].rawText.trim();

      if (!startTimes.includes(start)) startTimes.push(start);

      const employee = {
        name,
        start,
        end
      };

      if (employee.name) employees.push(employee);
    }

    startTimes.forEach(start => {
      schedule.push({
        start,
        employees: _.filter(employees, { start: start })
      });
    });

    // console.log(schedule);

    return schedule;
  }
};

// fs.readFile("dailySchedule.html", async (err, data) => {
//   const root = parser.parse(data.toString());

//   const sftstart = root.querySelectorAll(".sftstart");
//   const sftend = root.querySelectorAll(".sftend");
//   const sftpos = root.querySelectorAll(".sftpos");

//   // Ensure each list is equal length
//   if (sftpos.length != sftstart.length || sftpos.length != sftend.length) {
//     throw new Error("Incoming Shift Data Error");
//   }

//   const startTimes = [];
//   const employees = [];

//   for (let i = 0; i < sftpos.length; i++) {
//     const name = sftpos[i].childNodes[0].rawText.trim();
//     const start = sftstart[i].childNodes[0].rawText.trim();
//     const end = sftend[i].childNodes[0].rawText.trim();

//     if (!startTimes.includes(start)) startTimes.push(start);

//     const employee = {
//       name,
//       start,
//       end
//     };

//     if (employee.name) employees.push(employee);
//   }

//   startTimes.forEach(start => {
//     schedule.push({
//       start,
//       employees: _.filter(employees, { start: start })
//     });
//   });
// });
