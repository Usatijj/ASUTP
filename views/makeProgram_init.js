
var program_data=[]; //данные программы в форме [[тип,T,dT,H,Y]]
var pr_table_id="programTable" // ссылка на таблицу с данными

let ptrace=1, logH="makeProg()::";
ptrace ? console.log(logH+"Enter") : null;

programReset.onclick= function(){
  // восстанавливаем данные в DOM
  initTable(pr_table_id);
} //programSave.onclick

programSave.onclick= function(){
  readTable(pr_table_id);
  $.ajax({
    method:"POST",
    url:"/program/save",
    data:{data:JSON.stringify(program_data)},
    success:(msg) =>{
      ptrace ? console.log(logH+"Saved:  "+msg) : null;

    } })
} //programSave.onclick=

$.ajax({
  method:"POST",
  url:"/program/init",
  data:{},
  success:(msg) =>{
    let ptrace=0;
    ptrace ? console.log(logH+"Saved:  "+msg) : null;
    program_data=msg;
    ptrace ? console.group(msg) : null;
    initTable(pr_table_id);
  } })
/*.done(function (msg) {

  }
)//done*/

function readTable(table_id){
    let ptrace=1;
    let xhrT = new XMLHttpRequest();
    xhrT.open("GET",config.operativeValues.url);

    let elements=document.getElementById(table_id).getElementsByTagName('td');
    for (var i = 0; i < elements.length; i++) {
      let item=elements[i].children[0];
      let id=item.id;
      ptrace ? console.log(logH+"td with id="+id) : null;
      if (id){
          let RC=id.split(';')
          let row=RC[0][1];
          let col=RC[1][1];
          let val=item.value;
          ptrace ? console.log(logH+"program_data["+row+","+col+"]="+val) : null;
          program_data[row][col]=val;
       } //if id
    }//for
}//readTable(table_id)


function initTable(table_id){
    let ptrace=1;
    let elements=document.getElementById(table_id).getElementsByTagName('td');
    for (var i = 0; i < elements.length; i++) {
      let item=elements[i].children[0];
      ptrace ? console.log(logH+"item="+item) : null;
      let id=item.id;
      ptrace ? console.log(logH+"td with id="+id) : null;
      if (id){
        let RC=id.split(';')
        let row=RC[0][1];
        let col=RC[1][1];
        item.value=program_data[row][col];
        ptrace ? console.log(logH+"item.id="+id+"="+program_data[row][col]) : null;
      }


    }

}
