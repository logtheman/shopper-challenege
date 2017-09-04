const sqlite3 = require('sqlite3').verbose();  
const file = "applicants.sqlite3";  
const db = new sqlite3.Database(file); 
const startDate = process.argv[2];
const endDate = process.argv[3];
let hash = {};

function getStartofWeek(date) {
  // console.log("original date: ", date);
  date = new Date(date);
  const dayOfWeek = date.getDay();
  // console.log("day of week: ", dayOfWeek);
  const firstDayOfWeeK = date.getDate() - dayOfWeek //+ (dayOfWeek == 0 ? -6:1); // adjust when day is sunday
  // console.log("new day of week: ", newDate);
  return new Date(date.setDate(firstDayOfWeeK)).toISOString().slice(0,10);
}

function sumWeeksByState(week, workflowState){
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
}

function printToCSV(hash){
  console.log("count, week, workflow_state");
  for(let week in hash){
    for(let state in hash[week]){
      console.log(`${hash[week][state]}, ${week}, ${state}`);
    }
  }
}


db.all(`SELECT * FROM applicants WHERE created_at >= ${startDate} AND ${endDate} ORDER BY created_at`, function(err, rows) {  
    rows.forEach(function (row) {  
      let BoW = getStartofWeek(row.created_at.split(' ')[0]);
      sumWeeksByState(BoW, row.workflow_state);
    })  
printToCSV(hash);

});   
db.close();  


