const sqlite3 = require('sqlite3').verbose();  
const file = "applicants.sqlite3";  
const db = new sqlite3.Database(file); 
const startDate = process.argv[2];
const endDate = process.argv[3];
let applicantRows = [];

function getStartofWeek(d) {
  d = new Date(d);
  const day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
  

db.all(`SELECT * FROM applicants WHERE created_at >= ${startDate} AND ${endDate} LIMIT 10`, function(err, rows) {  
      console.log("err", err);
      applicantRows = rows;
      // console.log("rows", rows);
      rows.forEach(function (row) {  
        let formattedDate = new Date(row.created_at);
        let week = getStartofWeek(row.created_at);
        week = week.toString().split('T')[0];

          console.log(row.first_name, row.last_name, row.created_at, week);  
      })  
  });   

db.close();  


