var sql = require("mssql");
var dbSql = sql.connect({
  host     : '192.168.5.155',
  user     : 'ejecjudiciales',
  password : '!C&H%WcGHF6NnC%CN8vC',
  database : 'Leopoldo'
});
 
dbSql.connect(function (err:any){
    if(err){
        throw err;
    }else{
        console.log("CONEXION EXITOSA");
    }
});
export default dbSql;