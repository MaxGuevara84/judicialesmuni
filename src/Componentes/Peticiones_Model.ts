import {model, Schema} from 'mysql'
import IPeticiones from './Peticiones_Interface';
const PeticionesSchema = new Schema({
    tipoSolicitud: Number,
    solicitud:Object,
   
})
export default model<IPeticiones>('modeloReclamo',PeticionesSchema)