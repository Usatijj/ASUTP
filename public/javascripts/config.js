

var config={}; // объект с настройками
config.urls={
  operativeValues:"/realtimes" // адрес с которого читать оперативные данные
  ,tasks:"/task" //адрес с которого отрендеренное читать задание
  ,points:"/points" //адрес с которого читать точки событий
  ,logs:"/logs" //адрес с которого читать логи температуры
}
// параметры процесса
config.process={
  logName:config.urls.logs+"/"+getDate()+'.log'
  ,name:getDate() // дата старта процесса (имя лог файла)
  ,phase:{}
}
config.operativeValues={
  headers:["T1","T2","T3","T4"] //имена регистров для считывания с сервера
  ,url:config.urls.operativeValues // костыли
  ,url_task:config.urls.task // костыли
  ,url_points:config.urls.points // костыли
  ,timeout:3000 // читать каждые 3 сек
};

config.chart={
   y:{max:1000,min:0}
  ,taskURL:null // URL адрес файла с заданиями
  ,dataURL:config.process.logName
}
//var currentValues={}; //здесь хранятся текущие значения регистров, полученные с сервера
