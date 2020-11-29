var program={
  table:[
    ["heatTreatment",20,20,"00:00","00:00"]
    ,["heatTreatment",30,30,"00:00","00:00"]
    ,["heatTreatment",40,40,"00:00","00:00"]
  ]

}

function getTable(){
  return program.table;
}

function setTable(table){
  program.table=table;
  return true
}

module.exports.getTable=getTable;
module.exports.setTable=setTable;
