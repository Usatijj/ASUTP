var express = require('express');
var router = express.Router();
const thermProcess = require('../RS485/thermProcess.js');
const logModName="/program" // корневоq URL для трассировки
const config = require('../config.js');
var T_headers=config.operativeHeaders;
const programManager = require('./programManager');


router.get('/', function(req, res, next) {
  // страничка с редактором программы
  let trace=1, logH="get("+logModName+"/)::";
  trace ? console.log(logH+"Enter") : null;
  res.render('program', {T_headers});
});

router.post('/init', function(req, res, next) {
    let trace=1, logH="post("+logModName+"/init)::";
    trace ? console.log(logH+"Enter") : null;
    // --------- готовим данные  ---------------
    let data=JSON.stringify(programManager.getTable());
    trace ? console.log(logH+"Data:"+data) : null;
    // ---- готовим ответ  ------------
    res.set('Content-Type', 'application/json');
    res.send(data);
});

/*router.post('/save', function(req, res, next) {
    let trace=1, logH="get("+logModName+"/save)::";
    trace ? console.log(logH+"Enter") : null;
    // --------- готовим данные  ---------------
    let data=JSON.stringify(programManager.getTable());
    trace ? console.log(logH+"Data:"+data) : null;
    // ---- готовим ответ  ------------
    res.set('Content-Type', 'application/json');
    res.send(data);
});*/


/* GET users listing. */
router.post('/save', function(req, res, next) {
  let trace=1;logH="post("+logModName+"/save)::";
  trace ? console.log(logH+"Enter") : null;
  let data=JSON.parse(req.body.data)
  trace ? console.group(data) : null;
  res.set('Content-Type', 'plain/text');
  if (programManager.setTable()) {
    res.send('data accepted');
  } else {
    res.send('data not accepted');
  }


});

module.exports = router;
