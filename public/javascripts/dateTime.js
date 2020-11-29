
function getTime (date){
  // время в формате ЧЧ:ММ:СС
  let now= date ? date : new Date(); //если параметр не указан - то текущая дата, иначе форматируем и выдаем требуемую
  let timeN=("0"+now.getHours()).slice(-2)+":"+("0"+now.getMinutes()).slice(-2)+":"+("0"+now.getSeconds()).slice(-2);
  return timeN;
}

function getDate (date){
  // дата в формате ГГГГ-ММ-ДД
  let now= date ? date : new Date(); //если параметр не указан - то текущая дата, иначе форматируем и выдаем требуемую
  //let timeN=now.toLocaleDateString()
  let timeN=(now.getFullYear())+"-"+("0"+(now.getMonth()+1)).slice(-2)+"-"+("0"+now.getDate()).slice(-2);// оптимизировать getLocaleString
  return timeN;
}
