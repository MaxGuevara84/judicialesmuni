//revisar Import en Peticion
//import {Document} from 'mysql';
export default interface IEjecuciones extends Document{
    _id: string;
    tipo_Reclamo: number;
    reclamo:Object;
    
}