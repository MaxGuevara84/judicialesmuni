const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT id_reclamo, fk_denunciante_reclamo, fecha_hora_reclamo, contenido_reclamo, tipo_reclamo, calle_reclamo, numero_reclamo, orientacion_reclamo, lat_reclamo, lng_reclamo, imagen, operador, estado_reclamo, fk_origen, fk_origen_padre, link_redes_sociales, fk_prioridad, eliminado, fecha_hora_eliminado, fecha_hora_finalizado FROM db_sem.dbo_reclamos', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

module.exports = routes