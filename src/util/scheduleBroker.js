const axios = require("axios");
const parser = require("node-html-parser");
const _ = require("lodash");
const uuidv4 = require("uuid/v4");

const GREEN_CODE = "(GP)";
const QUALIFIED_CODE = "(QT)";

module.exports = {
  getSched: async function(searchPositions) {
    const schedule = [];

    // @todo update date to current day
    // @todo take SID as input
    const res = await axios.get(
      "https://www6.whentowork.com/cgi-bin/w2wFF.dll/empshiftlist.htm?SID=32325584041A4&UTF8=Y&date=11/03/2019"
    );

    const root = parser.parse(res.data);

    // if the user who made the w2w request has a shift on the requested day, another
    // partial shift will be added to the list, creating an Incoming Shift Data Error
    const selfShift = root.querySelector(".arrows");
    selfShift.removeChild(root.querySelector(".c0"));

    const sftstart = root.querySelectorAll(".sftstart");
    const sftend = root.querySelectorAll(".sftend");
    const sftpos = root.querySelectorAll(".sftpos");
    const sftname = root.querySelectorAll(".sftname");

    // Ensure each list is equal length
    if (sftpos.length !== sftstart.length || sftpos.length !== sftend.length || sftpos.length !== sftname.length) {
      throw new Error("Incoming Shift Data Error");
    }

    const startTimes = [];
    const employees = [];

    for (let i = 0; i < sftpos.length; i++) {
      // not constant to remove role flags later
      let name = sftpos[i].childNodes[0].rawText.trim();
      const start = sftstart[i].childNodes[0].rawText.trim();
      const end = sftend[i].childNodes[0].rawText.trim();
      // input is <positionCode> - <positionName>
      // split to get position name
      const position = sftname[i].childNodes[0].rawText.split("-")[1].trim();

      if (!startTimes.includes(start)) startTimes.push(start);

      // Search for role flags and remove them
      let isGreen = name.includes(GREEN_CODE);
      name = name.replace(GREEN_CODE, "");
      let isQualified = name.includes(QUALIFIED_CODE);
      name = name.replace(QUALIFIED_CODE, "");

      const employee = {
        id: uuidv4(),
        name,
        start,
        end,
        position,
        isGreen,
        isQualified,
        truck: ""
      };

      if (employee.name && searchPositions.includes(employee.position)) employees.push(employee);
    }

    startTimes.forEach(start => {
      schedule.push({
        scheduleSection: {
          id: uuidv4(),
          start
        },
        employees: _.filter(employees, { start: start })
      });
    });

    // console.log(schedule);

    return schedule;
  }
};
