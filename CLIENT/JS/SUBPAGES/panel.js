window.require = parent.window.require;
var os = require('os-utils');
var mcping = require('ping-minecraft-server');
var db = require('rethinkdb');

var globalConn;

function onLoad(){

  db.connect({host: '0.0.0.0',  port: 28015, db: 'MineBox'}, (err, conn) => {
    if(err)console.log(err);
    globalConn = conn;
  });

  setInterval(() => {
    

    os.cpuUsage((usage) => {
      document.getElementById('cpuUsage').innerText = usage.toString().slice(0, 4) + "%";
      document.getElementById('cpuUsage1').innerText = usage.toString().slice(0, 4) + "%";
      document.getElementById('cpuUsage1').style.width = usage.toString().slice(0, 1);
    });

    document.getElementById('ramUsage').innerText = (parseInt(os.freememPercentage() / 100) * os.totalmem()) + " GB / " + (parseInt(os.totalmem()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".").substring(0,2) + ' GB');
    document.getElementById('ramUsage1').innerText = (parseInt(os.freememPercentage() / 100) * os.totalmem()) + "%";
    document.getElementById('ramUsage1').style.width = (parseInt(os.freememPercentage() / 100) * os.totalmem());





    





    //GET SERVER COUNT AND MAX PLAYER COUNT THEN PING
    /*db.table('Servers').getAll('id').run(global.conn, (err, result) => {
      if(err)console.log(err);
    });*/


    /*mcping('127.0.0.1', 25565).then((result) => {
      console.log(result);
    });*/

    //document.getElementById('serverCount').innerText = 0 + " / " + MBConfig.Servers.length();
    //document.getElementById('serverCount').innerText = 0 + " / " + MBConfig.Servers.length();

  }, 500);



}


function searchF() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('gameList');
    filter = input.value.toUpperCase();
    ul = document.getElementById("gList");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("div")[0];
      txtValue = a.id;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }