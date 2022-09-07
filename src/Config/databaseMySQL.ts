var mysql  = require('mysql');
var dbMysql = mysql.createConnection({
  host     : '192.168.5.155',
  user     : 'ejecjudiciales',
  password : '!C&H%WcGHF6NnC%CN8vC',
  database : 'Leopoldo'
});
 
dbMysql.connect(function (err:any){
    if(err){
        throw err;
    }else{
        console.log("CONEXION EXITOSA");
    }
});
export default dbMysql;