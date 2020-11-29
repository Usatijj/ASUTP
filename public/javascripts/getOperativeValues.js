
//var T_headers=
var realTimesData={};
var tempErrorMax=5 // максимальное кол-во ошибок
var tempErrorCounter=0 // счетчик ошибок




// 1. Создаём новый объект XMLHttpRequest
var xhrT = new XMLHttpRequest();

console.log("config.operativeValues.url"+config.operativeValues.url);



xhrT.onload = function(){
   let trace=0;
   let now = (new Date()).toLocaleString();
   (trace) ? console.log(now):null;

   (trace) ? console.log("Response text: "+xhrT.responseText):null;

   if (! xhrT.responseText) {
     (trace) ? console.log("Get Realtimes::: Ответ пустой.Выход."):null;
     return
   }
   let res=JSON.parse(xhrT.responseText);
   //trace=1;
   (trace) ? console.dir(res):null;
   //trace=0;
   realTimesData=res;
   (trace) ? console.log("Get Realtimes::: Answer:"):null;
   (trace) ? console.log(realTimesData):null;

   tempErrorCounter=(tempErrorCounter<=0) ? 0 : tempErrorCounter-=1;
   // запускаем следующий запрос
   setTimeout(function(){sendRequest()}.bind(this),config.operativeValues.timeout);
 }//onload


xhrT.onerror = function(){
  //если ошибка
 let trace=0;
 let header="getRealTimes.Error:";
 console.log((new Date()).toLocaleTimeString()+" Error GET from /realtimes : status="+xhrT.status + '; statusText= ' + xhrT.statusText+"; tempErrorCounter="+tempErrorCounter)

 // проверяем кол-во ошибок
 tempErrorCounter+=1;
 //trace ? console.log(header+"tempErrorCounter="+tempErrorCounter):null
 if (tempErrorCounter>tempErrorMax) {
   // кол-во ошибок превысило tempErrorMax
   // обнуляем данные
   trace ? console.log(header+"tempErrorCounter="+tempErrorCounter+" Кол.ошибок превысило предел обнуляем "):null;
   trace ? console.log(header+"realTimesData="+realTimesData):null;
   tempErrorCounter=tempErrorMax; //останавливаем счетчик
   let now=(new Date()).toISOString();
   for (key in realTimesData) {
     realTimesData[key].value=null;
     realTimesData[key].timestamp=now;
   }
   //вызываем обработчика
   realTimeDataParse(realTimesData);
 }
 // повторно отправляем запрос через удвоенный период

 setTimeout( function() {sendRequest(); }.bind(this),config.operativeValues.timeout*2);
 trace ? console.log(header+": start new request with timeout="+config.operativeValues.timeout*2):null;
}//on error

function sendRequest() {
  //console.log("config.operativeValues.url="+config.operativeValues.url);
  // 2. Инициализируем
  xhrT.open("GET",config.operativeValues.url);
  // 3. Отсылаем запрос
  xhrT.send();
}

setTimeout(function(){sendRequest()}.bind(this),5); // первый запуск через 5 сек после занрузки
