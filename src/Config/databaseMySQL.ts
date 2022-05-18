var mysql  = require('mysql');
var dbMysql = mysql.createConnection({
  host     : '192.168.5.152',
  user     : 'kevinm',
  password : 'Kevin.2021',
  database : 'db_sem'
});
 
dbMysql.connect(function (err:any){
    if(err){
        throw err;
    }else{
        console.log("CONEXION EXITOSA");
    }
});
export default dbMysql;