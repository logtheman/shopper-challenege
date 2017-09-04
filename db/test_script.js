const sqlite3 = require('sqlite3').verbose();  
const file = "applicants.sqlite3";  
const db = new sqlite3.Database(file); 
const startDate = process.argv[2];
const endDate = process.argv[3];
let hash = {};

function getStartofWeek(d) {
  d = new Date(d);
  const day = d.getDay();
  const diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff)).toISOString().slice(0,10);
}

function checkIfWeekInList(week, workflowState){
  if(hash[week]){
    if(hash[week][workflowState]){
      hash[week][workflowState] += 1;
    }else{
      hash[week][workflowState] = 1;
    }
  }else{
    hash[week] = {}; 
    hash[week][workflowState] = 1;
  }
  //inc
}

db.all(`SELECT * FROM applicants WHERE created_at >= ${startDate} AND ${endDate} LIMIT 100`, function(err, rows) {  
    // console.log("rows", rows);
    rows.forEach(function (row) {  
      let formattedDate = new Date(row.created_at);
      let week = getStartofWeek(row.created_at);
      checkIfWeekInList(week, row.workflow_state);

      // console.log(row.first_name, row.last_name, row.workflow_state, week);  
    })  
console.log('\n\n RESULTS' ,hash);
    
});   
db.close();  


