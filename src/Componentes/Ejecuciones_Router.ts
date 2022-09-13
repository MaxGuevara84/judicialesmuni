import {Router} from 'express';
import { ejecucionController } from './EjecucionesController';
const router: Router = Router();
class EjecucionesRouter {
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
const ejecucionesController = new EjecucionesRouter();
export default ejecucionesController.router;
