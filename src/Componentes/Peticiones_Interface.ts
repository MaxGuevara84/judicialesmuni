//revisar Import en Peticion
//import {Document} from 'mysql';
export default interface IPeticiones extends Document{
    _id: string;
    tipo_Reclamo: number;
    reclamo:Object;
    
}