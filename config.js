// настройки RS485 расположены в папке RS485/config.js

var config={};

config.logger={
     listReg : "T1;T2;T3;T4" //архивируемые регистры с разделителем ";"
    ,path:"./public/logs/"  //папка с архивами относительно app.js
    ,period:10000 //мс, период записи
}
// КОСТЫЛЬ список регистров, возвращаемых по запросу на get /realtimes
config.operativeHeaders=config.logger.listReg+";1-state"+";2-state"+";3-state"+";4-state"//+";DoorState"+";BogieState";

module.exports=config;
