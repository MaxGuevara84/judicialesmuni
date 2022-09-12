import {Router} from 'express';
import { ejecucionController } from './EjecucionesController';
const router: Router = Router();
class PeticionesRouter {
    router:Router;
    constructor(){
        this.router = router;
        this.routes();
    }
    routes(){
        //Listar
       
        this.router.get('/listar', ejecucionController.listar);
              
    }
}
const peticionNController = new PeticionesRouter();
export default peticionNController.router;
