var mysql  = require('mysql');
var dbMysql = mysql.createConnection({
  host     : '192.168.5.153',
  user     : 'root',
  password : 'itcapital2020',
  database : 'ejecuciones'
});
 
dbMysql.connect(function (err:any){
    if(err){
        throw err;
    }else{
        console.log("CONEXION EXITOSA");
    }
});
export default dbMysql;