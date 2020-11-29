// парсим массив
//console.log("In refreshOperativeTable() ");
setInterval(()=>{
  let trace=0, logH="refreshOperativeTable():"
  trace ? console.log(logH+"Enter") : null;
  trace=0;
  for (var i = 0; i < operativeTableHeaders.length; i++) {
    trace ? console.log(logH+"--------------------") : null;
    let item=operativeTableHeaders[i];
    let elem=document.getElementById(item);
    if (elem) {
      trace ? console.log(logH+"Element finded:"+elem.id) : null;
      let value=(realTimesData[item]) ? realTimesData[item].value : null;
      if (value) {
        trace ? console.log(logH+"New value for ["+item+"]finded:"+value) : null;
        if (item.indexOf("state")>=0){
            trace ? console.log(logH+"State-element finded:"+elem.id) : null;
            let className="";
            switch (+value) {
              case 7:
                className="stop";
                break;
              case 23:
                className="start";
                break;
              default:
                className="error"
            }//switch (+value)
            elem.className=className;
            trace ? console.log(logH+"State-element new class="+className) : null;
            continue;
        } else { //if (item.indexOf("state")
        // элемент не state
        elem.innerHTML=value;
        trace ? console.log(logH+"Element "+elem.id+" new value="+value) : null;
        }
      }//if (value)
       else {
        //  новое  значение не найдено
        if (item.indexOf("state")>=0) {continue}
        value="????";
        elem.innerHTML=value;
        trace ? console.log(logH+"Value for ["+elem.id+"] not finded. new value="+value) : null;
      }
      continue;
    }//if (elem)
    trace ? console.log(logH+"Element with name ["+item+"] not finded. Break") : null;
  }
},config.operativeValues.timeout)//setInterval
